export interface ReqTest {
    username: string,
    password: string
}

export interface ResTest {
    user: {
        id: number,
        nickname: string
    }
}
