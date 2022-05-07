import * as path from 'path'
import { HttpServer } from 'tsrpc'
import { serviceProto } from '@blog/shared'

// TODO: need proto
const server = new HttpServer(serviceProto, {
    port: 3001, json: true
})

async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'))

    // TODO: connect the db
};

async function main() {
    await init()
    await server.start()
};

main()
