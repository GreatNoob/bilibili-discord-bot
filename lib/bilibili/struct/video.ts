import { BaseResponse } from "./base";
/**
 * API Json Structure reference:
 *      https://github.com/SocialSisterYi/bilibili-API-collect
 */

interface Rights {
    bp: number;              //0
    elec: number;            //是否支持充电
    download: number;        //是否允许下载
    movie: number;           //是否电影
    pay: number;             //是否PGC付费
    hd5: number;             //是否有高码率
    no_reprint: number;      //是否显示“禁止转载“标志
    autoplay: number;        //是否自动播放
    ugc_pay: number;         //是否UGC付费
    is_stein_gate: number;   //是否为互动视频
    is_cooperation: number;  //是否为联合投稿
    ugc_pay_preview: number; //0
    no_background: number;   //0
}

interface Stat {
    aid: number;             //稿件avid
    view: number;            //播放数
    danmaku: number;         //弹幕数
    reply: number;           //评论数
    favorite: number;        //收藏数
    coin: number;            //投币数
    share: number;           //分享数
    now_rank: number;        //当前排名
    his_rank: number;        //历史最高排行
    like: number;            //获赞数
    dislike: number;         //点踩数
    evaluation: string;      //视频评分
    argue_msg: string;       //警告/争议提示信息
}

interface Owner {
    mid: number;             //UP主mid
    name: string;            //UP主昵称
    face: string;            //UP主头像
}

interface Dimension {
    width: number;           //当前分P 宽度
    height: number;          //当前分P 高度
    rotate: number;          //是否将宽高对换
}

interface Pages {
    cid: number;             //当前分P cid
    page: number;            //当前分P
    from: string;            //视频来源
    part: string;            //当前分P标题
    duration: number;        //当前分P持续时间
    vid: string;             //站外视频vid
    weblink: string;         //站外视频跳转url
    dimension: Dimension;    //当前分P分辨率
}

interface Author {
    mid: number;             //字幕上传者mid
    name: string;            //字幕上传者昵称
    sex: string;             //字幕上传者性别
    face: string;            //字幕上传者头像url
    sign: string;            //字幕上传者签名
    rank: number;            //10000
    birthday: number;        //0
    is_fake_account: number; //0
    is_deleted: number;      //0
}

interface Cc {
    id: number;              //字幕id
    lan: string;             //字幕语言
    lan_doc: string;         //字幕语言名称
    is_lock: boolean;        //是否锁定
    author_mid: number;      //字幕上传者mid
    subtitle_url: string;    //json格式字幕文件url
    author: Author;          //字幕上传者信息
}

interface Subtitle {
    allow_submit: boolean;   //是否允许提交字幕
    list: Cc[];              //字幕列表
}

interface Vip {
    type: number;            //成员会员类型   0：无<br />1：月会员<br />2：年会员
    status: number;          //会员状态       0：无<br />1：有
    theme_type: number;      //0
}

interface Official {
    role: number;            //成员认证级别
    title: string;           //成员认证名
    desc: string;            //成员认证备注
    type: number;            //成员认证类型
}

interface Staff {
    mid: number;             //成员mid
    title: string;           //成员名称
    name: string;            //成员昵称
    face: string;            //成员头像url
    vip: Vip;                //成员大会员状态
    official: Official;      //成员认证信息
    follower: number;        //成员粉丝数
}

interface Desc_v2 {
    raw_text: string;        //简介内容
    type: number;            //?
    biz_id: number;          //?
}

interface User_garb {
    url_image_ani_cut: string; //某url？
}

interface Video {
    bvid: string;            //稿件bvid
    aid: number;             //稿件avid
    videos: number;          //稿件分P总数
    tid: number;             //分区tid
    tname: string;           //子分区名称
    copyright: number;       //视频类型
    pic: string;             //稿件封面图片url
    title: string;           //稿件标题
    pubdate: number;         //稿件发布时间
    ctime: number;           //用户投稿时间
    desc: string;            //视频简介
    desc_v2: Desc_v2[];      //新版视频简介
    state: number;           //视频状态
    duration: number;        //稿件总时长(所有分P)
    forward: number;         //撞车视频跳转avid
    mission_id: number;      //稿件参与的活动id
    redirect_url: string;    //重定向url
    rights: Rights;          //视频属性标志
    owner: Owner;            //视频UP主信息
    stat: Stat;              //视频状态数
    dynamic: string;         //视频同步发布的的动态的文字内容
    cid: number;             //视频1P cid
    dimension: Dimension;    //视频1P分辨率
    no_cache: boolean;       //true
    pages: Pages[];          //视频分P列表
    subtitle: Subtitle;      //视频CC字幕信息
    staff: Staff[];          //合作成员列表
    user_garb: User_garb;    //用户装扮信息
}

export {Video}