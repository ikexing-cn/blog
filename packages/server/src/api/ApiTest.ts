import { ApiCall } from 'tsrpc'
import { ReqTest, ResTest } from '@blog/shared'

export async function ApiTest(call: ApiCall<ReqTest, ResTest>) {
    if (call.req.username !== 'a' || call.req.password !== 'b') {
        call.error('input error')
        return
    }

    call.succ({
        user: {
            id: -1,
            nickname: 'user'
        }
    })
}
