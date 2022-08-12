/**
 * Model project
 *
 */
 export type T_project_item = {
  id: number
  projectName: string
  projectOwner: string
  repoUrl: string
  createTime: string
  updateTime: string
  isDel: boolean
}

/**
 * Model contaienr
 *
 */
export type T_container = {
  id: number
  projectId: number
  tag: string
  port: number
  nginxUrl: string
  createTime: Date
  updateTime: Date
  isDel: boolean
}
