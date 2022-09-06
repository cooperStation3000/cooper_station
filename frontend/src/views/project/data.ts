import { h, reactive, ref } from 'vue';
import { createDiscreteApi, DataTableColumns, FormRules, NButton, useNotification } from 'naive-ui';
import { T_project_item } from '@/shared/DTO/dto';
import client from '@/util/rpcClient';
import { T_porject_create } from '@/shared/DTO/project.dto';

export const columns = ref<DataTableColumns<T_project_item>>([
  {
    title: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: '项目名称',
    key: 'projectName',
    align: 'center'
  },
  {
    title: '项目管理员',
    key: 'projectOwner',
    align: 'center'
  },
  {
    title: '项目仓库地址',
    key: 'repoUrl',
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
        h(NButton, { strong: true, tertiary: true, type: 'error', onClick: async () => {await deleteOne(row);} }, '删除')
      ]);
    }
  }
]);

export const options = reactive({
  label: 'Cooper Admin',
  value: 'CooperAdmin'
});

export let data = ref<T_project_item[]>([]);

export const pageInfo = reactive({
  offset: 0,
  size: 10,
  total: 0
});

export const fetch = async () => {
  const res = await getList(pageInfo);
  data.value = res?.list ?? [];
  pageInfo.total = Math.floor((res?.total ?? 0) / 10) + 1;
};

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

async function deleteOne(row: T_project_item) {
  const res = await client.callApi('project/Update', { id: row.id, info: { isDel: true } });
  if (res.isSucc) {
    const note = createDiscreteApi(['notification']).notification;
    note.success({
      content: '删除成功!',
      keepAliveOnHover: true,
      duration: 3000
    });
    await fetch();
  }
}
