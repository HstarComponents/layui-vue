<template>
  <lay-fieldset legend="字段集区块 - 默认风格"> 内容区域 </lay-fieldset>

  <lay-fieldset legend="字段集区块 - 横线风格" simple> 内容区域 </lay-fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LayFieldset } from '../../../src';

export default defineComponent({
  components: {
    LayFieldset,
  },
});
</script>
