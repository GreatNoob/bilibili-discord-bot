import axios from 'axios'
import {BaseResponse, userAgent} from './struct/base'
import {Video} from './struct/video'

function getVideoInfo(bvid: string) {
    axios.get<BaseResponse<Video>>('https://api.bilibili.com/x/web-interface/view',{
        params: {bvid},
        headers: {
            'User-Agent': userAgent
        }
    })
    .then(
        (response) => {
            const video_data = response.data.data;
            if (response.data.code == 0){
                let info: {[k: string]: string} = {
                    BV: video_data.bvid,
                    AV: `av${video_data.aid}`,
                    Title: video_data.title
                };

                for (const [_, page] of video_data.pages.entries()){
                    info[`P${page.page}`] = page.part
                }

                console.log(`视频信息:`);
                console.table(info);
            }
            else{
                throw new Error(`get video info failed: ${response.data.message}`)
            }
        }
    )
}

export {getVideoInfo};