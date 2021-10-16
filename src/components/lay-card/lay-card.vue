
<template>
  <div class="layui-card">
    <div class="layui-card-header" v-if="hasHeader">
      <template v-if="hasHeaderSlot">
        <slot name="header" />
      </template>
      <template v-else> {{ title }} </template>
    </div>
    <div class="layui-card-body">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'lay-card',
  props: {
    title: { type: String },
  },
  data() {
    return {};
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    /**
     * 无 header 的情况，转换样式为 panel
     */
    hasHeader() {
      return this.hasHeaderSlot || this.title;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
</style>
