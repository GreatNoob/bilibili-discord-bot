const userAgent: string = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36`;

interface BaseResponse<T=any> {
    code: number;
    message: number;
    ttl: number;
    data: T;
}

export {userAgent, BaseResponse}