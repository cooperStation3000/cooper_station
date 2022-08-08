<template>
  <NSpace>
    <NLayout has-sider style="height: 100vh;">
      <NLayoutSider bordered>
        <NMenu :options="routes" v-model:value="selectKey" ref="menuInstRef" @update:value="handleUpdateValue"/>
      </NLayoutSider>
      <NLayoutContent embedded content-style="width:85vw; padding: 24px">
        <NCard>
          <router-view/>
        </NCard>
      </NLayoutContent>
    </NLayout>
  </NSpace>
</template>

<script lang="ts" setup>
import { NCard, NLayout, NLayoutContent, NLayoutSider, NMenu, NSpace, MenuInst } from 'naive-ui';
import { routes } from '@/router';
import _ from 'lodash';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const handleUpdateValue = (key: string) => router.push({ name: key });
const pathToKey = () => {
  const { path } = useRoute();
  return _.camelCase(path);
};
const menuInstRef = ref<MenuInst | null>(null);
const selectKey = ref(pathToKey());
menuInstRef.value?.showOption(selectKey.value);

</script>
