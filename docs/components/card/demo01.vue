<template>
  <div style="background: #eee; padding: 12px">
    <lay-card> 我是一个没有 Header 的卡片 </lay-card>
    <lay-card title="我是 Title"> 通过 title 属性设置卡片标题 </lay-card>
    <lay-card>
      <template v-slot:header>我是自定义Header</template>
      这是一个自定义 Header内容的卡片
    </lay-card>
    <lay-card title="卡片标题">
      <template v-slot:header>自定义Header</template>
      同时设置 title 和 Header 插槽时，header 插槽生效
    </lay-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LayCard } from '../../../src';

export default defineComponent({
  components: {
    LayCard,
  },
});
</script>
