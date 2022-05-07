import { ServiceProto } from 'tsrpc-proto'
import { ReqTest, ResTest } from './protocols/PtlTest'

export interface ServiceType {
    api: {
        'Test': {
            req: ReqTest,
            res: ResTest
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    services: [
        {
            id: 0,
            name: 'Test',
            type: 'api'
        }
    ],
    types: {
        'PtlTest/ReqTest': {
            type: 'Interface',
            properties: [
                {
                    id: 0,
                    name: 'username',
                    type: {
                        type: 'String'
                    }
                },
                {
                    id: 1,
                    name: 'password',
                    type: {
                        type: 'String'
                    }
                }
            ]
        },
        'PtlTest/ResTest': {
            type: 'Interface',
            properties: [
                {
                    id: 0,
                    name: 'user',
                    type: {
                        type: 'Interface',
                        properties: [
                            {
                                id: 0,
                                name: 'id',
                                type: {
                                    type: 'Number'
                                }
                            },
                            {
                                id: 1,
                                name: 'nickname',
                                type: {
                                    type: 'String'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}
