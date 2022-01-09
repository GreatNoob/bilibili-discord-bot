import * as request from "superagent"

function get_video_info(){
    request
        .get("https://www.baidu.com/")
        .end((res) => {
            if (res.ok)
                console.log("ok");
            else
                console.log("not ok");
        });
}

