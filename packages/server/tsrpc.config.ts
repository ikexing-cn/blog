import { TsrpcConfig } from 'tsrpc-cli'

const tsrpcConf: TsrpcConfig = {
    dev: {
        autoApi: false,
        autoSync: false,
        autoProto: false,
        autoFillNewPtl: false,
        watch: [
            'src',
            '../shared/src'
        ]
    }
}

export default tsrpcConf
