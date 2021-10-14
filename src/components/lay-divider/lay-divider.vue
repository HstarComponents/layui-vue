
<template>
  <button type="button" class="layui-btn" :class="rootClass">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { stringEnum } from '../_utils/componentUtil';

export default defineComponent({
  name: 'LayDivider',
  props: {
    type: {
      type: String,
      validator: stringEnum([
        'primary',
        'normal',
        'warm',
        'danger',
        'disabled',
      ]),
    },
    size: {
      type: String,
      validator: stringEnum(['lg', 'sm', 'xs']),
    },
  },
  data() {
    return {};
  },
  computed: {
    rootClass() {
      const classList: string[] = [];
      if (this.type) {
        classList.push(`layui-btn-${this.type}`);
      }
      return classList;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
</style>
