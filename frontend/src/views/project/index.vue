<template>
  <NSpace vertical>
    <NButton type="success" @click="createProject">创建项目</NButton>
    <n-data-table :columns="columns" :data="data" bordered />
    <n-pagination v-model:page="pageInfo.offset" :page-count="pageInfo.total" />
  </NSpace>
</template>

<script lang="ts" setup>
import {
  NDataTable,
  DataTableColumns,
  NButton,
  NSpace,
  NPagination,
} from "naive-ui";
import { T_project_item } from "@/shared/DTO/Project";
import { ref, h, reactive, onMounted } from "vue";
import client from "@/util/rpcClient";
const columns = ref<DataTableColumns<T_project_item>>([
  {
    title: "id",
    key: "id",
    align: "center",
  },
  {
    title: "projectName",
    key: "projectName",
    align: "center",
  },
  {
    title: "projectOwner",
    key: "projectOwner",
    align: "center",
  },
  {
    title: "createTime",
    key: "createTime",
    align: "center",
  },
  {
    title: "updateTime",
    key: "updateTime",
    align: "center",
  },
  {
    title: "Action",
    key: "actions",
    align: "center",
    render(row: T_project_item) {
      return h("list", [
        h(
          NButton,
          { strong: true, tertiary: true, type: "info", onClick: () => {} },
          "详情"
        ),
        h(
          NButton,
          { strong: true, tertiary: true, type: "success", onClick: () => {} },
          "编辑"
        ),
        h(
          NButton,
          { strong: true, tertiary: true, type: "error", onClick: () => {} },
          "删除"
        ),
      ]);
    },
  },
]);
let data = ref<T_project_item[]>([]);
const pageInfo = reactive({
  offset: 0,
  size: 10,
  total: 0,
});

const getList = async () => {
  const { res } = await client.callApi("project/List", {
    offset: pageInfo.offset,
    size: pageInfo.size,
  });
  data.value = res?.list ?? [];
  pageInfo.total = res?.total ?? 0;
};

onMounted(async () => {
  await getList();
});

const createProject = () => {

};
</script>

<style scoped lang="less">
</style>
