import { Video } from './struct/video';
import { api } from './api_util';

function getVideoInfo(bvid: string) {
  api<Video>('GET', '/x/web-interface/view', { bvid })
    .then(
      (video_data) => {
        const info: {[k: string]: string} = {
          BV: video_data.bvid,
          AV: `av${video_data.aid}`,
          Title: video_data.title,
        };

        for (const [_, page] of video_data.pages.entries()) {
          info[`P${page.page}`] = page.part;
        }

        console.log('视频信息:');
        console.table(info);
      },
    );
}

export { getVideoInfo };
