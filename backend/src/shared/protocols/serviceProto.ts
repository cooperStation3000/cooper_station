import { ServiceProto } from 'tsrpc-proto';
import { ReqCreate, ResCreate } from './project/PtlCreate';
import { ReqList, ResList } from './project/PtlList';
import { ReqUpdate, ResUpdate } from './project/PtlUpdate';

export interface ServiceType {
    api: {
        "project/Create": {
            req: ReqCreate,
            res: ResCreate
        },
        "project/List": {
            req: ReqList,
            res: ResList
        },
        "project/Update": {
            req: ReqUpdate,
            res: ResUpdate
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "services": [
        {
            "id": 0,
            "name": "project/Create",
            "type": "api"
        },
        {
            "id": 1,
            "name": "project/List",
            "type": "api"
        },
        {
            "id": 2,
            "name": "project/Update",
            "type": "api"
        }
    ],
    "types": {
        "project/PtlCreate/ReqCreate": {
            "target": {
                "type": "Reference",
                "target": "../DTO/Project/T_project_item"
            },
            "keys": [
                "projectName",
                "projectOwner"
            ],
            "type": "Pick"
        },
        "../DTO/Project/T_project_item": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "projectName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "projectOwner",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "createTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "updateTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "isDel",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "project/PtlCreate/ResCreate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "project/PtlList/ReqList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseListRequest"
                    }
                }
            ]
        },
        "base/BaseListRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "size",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "offset",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "project/PtlList/ResList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../DTO/Project/T_project_item"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "total",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "project/PtlUpdate/ReqUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "info",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../DTO/Project/T_project_item"
                        },
                        "keys": [
                            "projectName",
                            "projectOwner"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "project/PtlUpdate/ResUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ]
        }
    }
};