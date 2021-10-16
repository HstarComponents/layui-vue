<template>
  <button
    type="button"
    class="layui-btn"
    :class="rootClass"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { stringEnum } from '../_utils/componentUtil';

export default defineComponent({
  name: 'lay-button',
  props: {
    type: {
      type: String,
      validator: stringEnum(['primary', 'normal', 'warm', 'danger']),
    },
    size: {
      type: String,
      validator: stringEnum(['lg', 'sm', 'xs']),
    },
    disabled: { type: Boolean },
    block: {
      type: Boolean,
    },
    radius: { type: Boolean },
  },
  emits: ['click'],
  data() {
    return {};
  },
  computed: {
    rootClass() {
      const buttonGroupProps = this.$parent?.$props as any;
      const classList: string[] = [];
      const type = this.type || buttonGroupProps.type;
      if (this.disabled) {
        classList.push(`layui-btn-disabled`);
      }
      if (type) {
        classList.push(`layui-btn-${type}`);
      }
      // 本组件优先，同时接受父组件传值
      const size = this.size || buttonGroupProps?.size;
      if (size) {
        classList.push(`layui-btn-${size}`);
      }
      if (this.block) {
        classList.push(`layui-btn-fluid`);
      }
      if (this.radius) {
        classList.push(`layui-btn-radius`);
      }
      return classList;
    },
  },
  methods: {
    handleClick(evt: any) {
      if (!this.disabled) {
        this.$emit('click', evt);
      }
    },
  },
  setup() {
    return {};
  },
});
</script>
