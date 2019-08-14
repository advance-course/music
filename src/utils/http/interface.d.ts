declare namespace http {
  interface ServerResponse<T> {
    /**
     * 业务逻辑代码
     */
    code: number,

    result: T
  }

  type PromiseResp<T> = Promise<ServerResponse<T>>;
}