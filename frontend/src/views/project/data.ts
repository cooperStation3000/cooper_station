import { h, reactive, ref } from 'vue';
import { DataTableColumns, FormRules, NButton, useNotification } from 'naive-ui';
import { T_project_item } from '@/shared/DTO/dto';
import client from '@/util/rpcClient';
import { T_porject_create } from '@/shared/DTO/project.dto';
import { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider';

export const getColumns = (not: NotificationApiInjection) => ref<DataTableColumns<T_project_item>>([
  {
    title: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: 'projectName',
    key: 'projectName',
    align: 'center'
  },
  {
    title: 'projectOwner',
    key: 'projectOwner',
    align: 'center'
  },
  {
    title: 'createTime',
    key: 'createTime',
    align: 'center'
  },
  {
    title: 'updateTime',
    key: 'updateTime',
    align: 'center'
  },
  {
    title: 'Action',
    key: 'actions',
    align: 'center',
    render(row: T_project_item) {
      return h('list', [
        h(NButton, { strong: true, tertiary: true, type: 'info', onClick: () => {} }, '详情'),
        h(NButton, { strong: true, tertiary: true, type: 'success', onClick: () => {} }, '编辑'),
        h(NButton, { strong: true, tertiary: true, type: 'error', onClick: async () => {await deleteOne(row, not);} }, '删除')
      ]);
    }
  }
]);
export const options = reactive({
  label: 'Cooper Admin',
  value: 'CooperAdmin'
});

export const getList = async (pageInfo: { offset: number, size: number }) => {
  const { res } = await client.callApi('project/List', {
    offset: pageInfo.offset,
    size: pageInfo.size
  });
  return res;
};

export const createProject = async (project: T_porject_create) => {
  const { res } = await client.callApi('project/Create', project);
  return res;
};

export const rules: FormRules = {
  projectName: [
    {
      required: true,
      trigger: 'blur',
      message: '项目名称不能为空'
    }
  ],
  projectOwner: [
    {
      required: true,
      trigger: 'change',
      message: '项目管理员不能为空'
    }
  ]
};

async function deleteOne(row: T_project_item, note: NotificationApiInjection) {
  const res = await client.callApi('project/Update', { id: row.id, info: { isDel: true } });
  if (res.isSucc) {
    note.success({
      content: '删除成功!',
      keepAliveOnHover: true
    });
  }
}
