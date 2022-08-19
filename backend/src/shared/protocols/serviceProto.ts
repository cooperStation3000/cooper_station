import { ServiceProto } from 'tsrpc-proto';
import { ReqCreate, ResCreate } from './container/PtlCreate';
import { ReqList, ResList } from './container/PtlList';
import { ReqUpdate, ResUpdate } from './container/PtlUpdate';
import { ReqCreate as ReqCreate_1, ResCreate as ResCreate_1 } from './project/PtlCreate';
import { ReqList as ReqList_1, ResList as ResList_1 } from './project/PtlList';
import { ReqUpdate as ReqUpdate_1, ResUpdate as ResUpdate_1 } from './project/PtlUpdate';

export interface ServiceType {
    api: {
        "container/Create": {
            req: ReqCreate,
            res: ResCreate
        },
        "container/List": {
            req: ReqList,
            res: ResList
        },
        "container/Update": {
            req: ReqUpdate,
            res: ResUpdate
        },
        "project/Create": {
            req: ReqCreate_1,
            res: ResCreate_1
        },
        "project/List": {
            req: ReqList_1,
            res: ResList_1
        },
        "project/Update": {
            req: ReqUpdate_1,
            res: ResUpdate_1
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 10,
    "services": [
        {
            "id": 3,
            "name": "container/Create",
            "type": "api"
        },
        {
            "id": 4,
            "name": "container/List",
            "type": "api"
        },
        {
            "id": 5,
            "name": "container/Update",
            "type": "api"
        },
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
        "container/PtlCreate/ReqCreate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../DTO/container.dto/T_container_create"
                    }
                }
            ]
        },
        "../DTO/container.dto/T_container_create": {
            "target": {
                "type": "Reference",
                "target": "../DTO/dto/T_container"
            },
            "keys": [
                "projectId",
                "tag",
                "port",
                "nginxUrl"
            ],
            "type": "Pick"
        },
        "../DTO/dto/T_container": {
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
                    "name": "projectId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "tag",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "port",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "nginxUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "createTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "updateTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "isDel",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "container/PtlCreate/ResCreate": {
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
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "data",
                    "type": {
                        "type": "Any"
                    },
                    "optional": true
                }
            ]
        },
        "container/PtlList/ReqList": {
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
        "container/PtlList/ResList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseListResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../DTO/dto/T_container"
                        }
                    }
                }
            ]
        },
        "base/BaseListResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Any"
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
        "container/PtlUpdate/ReqUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 1,
                    "type": {
                        "type": "Reference",
                        "target": "../DTO/container.dto/T_container_update_one"
                    }
                }
            ]
        },
        "../DTO/container.dto/T_container_update_one": {
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
                    "name": "info",
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../DTO/dto/T_container"
                        },
                        "keys": [
                            "tag",
                            "port",
                            "nginxUrl"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "container/PtlUpdate/ResUpdate": {
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
        "project/PtlCreate/ReqCreate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../DTO/project.dto/T_porject_create"
                    }
                }
            ]
        },
        "../DTO/project.dto/T_porject_create": {
            "target": {
                "type": "Reference",
                "target": "../DTO/dto/T_project_item"
            },
            "keys": [
                "projectName",
                "projectOwner",
                "repoUrl"
            ],
            "type": "Pick"
        },
        "../DTO/dto/T_project_item": {
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
                    "id": 7,
                    "name": "repoUrl",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "createTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "updateTime",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
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
        "project/PtlList/ResList": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseListResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../DTO/dto/T_project_item"
                        }
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
                        "type": "Partial",
                        "target": {
                            "target": {
                                "type": "Reference",
                                "target": "../DTO/dto/T_project_item"
                            },
                            "keys": [
                                "projectName",
                                "projectOwner",
                                "isDel"
                            ],
                            "type": "Pick"
                        }
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