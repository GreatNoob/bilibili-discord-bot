import * as request from "superagent"

export function get_video_info(){
    request
        .get("https://www.baidu.com/")
        .end((res) => {
            if (res.ok)
                console.log("ok");
            else
                console.log("not ok");
        });
}

