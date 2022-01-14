import axios, { Method, AxiosResponse} from 'axios'
import { BaseResponse } from './struct/base';

const userAgent: string = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36`;

async function _api<T=any>(method: Method, service: string, params: any): Promise<AxiosResponse<BaseResponse<T>>> {
    return axios.request<BaseResponse<T>>({
        "url": `https://api.bilibili.com${service}`,
        method,
        "headers": {
            'User-Agent': userAgent
        },
        params
    });
}

async function api<T=any>(method: Method, service: string, params: any): Promise<T> {
    const response = await _api(method, service, params);

    if (response.data.code != 0)
        throw new Error(`request failed: ${response.data.message}`)
    const response_data = response.data.data;
    
    return response_data;
}

export {api}