import { AxiosRequestConfig } from "axios";
export declare const host = "https://o2api.spc.co.kr";
export declare function getOrderDataList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getKdsMstSection(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getKdsMstSectionItemList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function updateOrderHdKdsState(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function post(request: string, body: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function postQueryString(request: string, config: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
export declare function get(request: string, body: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function put(request: string, body: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function deleteM(request: string, body: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function setAuthToken(token: string): void;
export declare function login(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getCmpList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getSalesOrgList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getStorList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getCornerList(params: any): Promise<import("axios").AxiosResponse<any, any>>;
