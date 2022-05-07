import { HttpClient } from 'tsrpc-browser'
import { serviceProto } from '@blog/shared'

export const client = new HttpClient(serviceProto, {
    server: '/api', json: true
})
