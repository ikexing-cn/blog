import * as path from 'path'
import { HttpServer } from 'tsrpc'
import { serviceProto } from '@blog/shared'
import { dbInit } from './db'

// TODO: need proto
const server = new HttpServer(serviceProto, {
    port: 3001, json: true
})

async function init() {
    await dbInit()
    await server.autoImplementApi(path.resolve(__dirname, 'api'))
};

async function main() {
    await init()
    await server.start()
};

main()
