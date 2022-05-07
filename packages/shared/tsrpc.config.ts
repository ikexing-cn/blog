import { TsrpcConfig } from 'tsrpc-cli'

const tsrpcConf: TsrpcConfig = {
    proto: [
        {
            ptlDir: 'src/protocols',
            output: 'src/serviceProto.ts',
            apiDir: '../server/src/api'
        }
    ]
}

export default tsrpcConf
