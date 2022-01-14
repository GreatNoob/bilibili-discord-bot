interface BaseResponse<T=any> {
    code: number;
    message: number;
    ttl: number;
    data: T;
}

export { BaseResponse };
