<template>
  <NSpace vertical>
    <NGrid :cols="6">
      <NGi>
        <NButton type="success" @click="showAdd = true">创建项目</NButton>
      </NGi>
      <NGi>
        <NInputGroup>
          <NInput round v-model:value="searchWord"/>
          <NButton type="primary" @click="search">搜索项目</NButton>
        </NInputGroup>
      </NGi>
    </NGrid>

    <NDataTable :columns="columns" :data="data" bordered/>
    <n-pagination v-model:page="pageInfo.offset" :page-count="pageInfo.total" @update:page="flep"/>
    <NModal
      v-model:show="showAdd"
      :model="projectData"
      preset="dialog"
      title="创建项目"
      positive-text="确认"
      negative-text="取消"
      @positive-click="submitCallback"
      @negative-click="negative"
    >
      <n-form ref="formRef" :rules="rules" :model="projectData">
        <n-form-item path="projectName" label="项目名称">
          <n-input v-model:value="projectData.projectName" placeholder="请输入项目名称" maxlength="30"/>
        </n-form-item>
        <n-form-item path="repoUrl" label="项目仓库地址">
          <n-input v-model:value="projectData.repoUrl" placeholder="请输入项目名称"/>
        </n-form-item>
        <n-form-item path="projectOwner" label="项目管理员">
          <NSelect v-model:value="projectData.projectOwner" :options="options"/>
        </n-form-item>
      </n-form>
    </NModal>
  </NSpace>
</template>

<script lang="ts" setup>
import {
  FormInst,
  NButton,
  NDataTable,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NPagination,
  NSelect,
  NSpace,
  useNotification,
  NGrid,
  NGi,
  NInputGroup
} from 'naive-ui';
import { onMounted, reactive, ref } from 'vue';
import { T_project_item } from '@/shared/DTO/dto';
import { T_porject_create } from '@/shared/DTO/project.dto';
import { createProject, getColumns, getList, options, rules } from './data';
import client from '@/util/rpcClient';

const note = useNotification();
const columns = getColumns(note);
let data = ref<T_project_item[]>([]);
const pageInfo = reactive({
  offset: 0,
  size: 10,
  total: 0
});
let projectData = ref<T_porject_create>({
  projectName: '',
  projectOwner: '',
  repoUrl: ''
});
const showAdd = ref(false);
const formRef = ref<FormInst>();
const searchWord = ref('');

onMounted(async () => {
  await fetch();
});

const fetch = async () => {
  const res = await getList(pageInfo);
  data.value = res?.list ?? [];
  pageInfo.total = Math.floor((res?.total ?? 0) / 10) + 1;
};
const submitCallback = () => {
  formRef.value?.validate(async isError => {
    if (!isError) {
      await createProject(projectData.value);
      negative();
      await fetch();
    }
  });
  return false;
};
const negative = () => {
  showAdd.value = false;
  projectData.value = {
    projectName: '',
    projectOwner: '',
    repoUrl: ''
  };
};
const search = async () => {
  const search = searchWord.value.trim();
  if (!search) await fetch();
  else {
    const { res } = await client.callApi('project/Search', { searchWord: search, offset: pageInfo.offset, size: pageInfo.size });
    data.value = res?.list ?? [];
    pageInfo.total = Math.floor((res?.total ?? 0) / 10) + 1;
  }
};
const flep = async (page: number) => {
  pageInfo.offset = page;
  if (searchWord.value) await search();
  else await fetch();
};

</script>

<style scoped lang="less"></style>
