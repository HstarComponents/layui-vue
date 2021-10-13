<template>
  <lay-fieldset legend="主题" simple>
    <lay-button>默认按钮</lay-button>
    <lay-button type="primary">原始按钮</lay-button>
    <lay-button type="normal">百搭按钮</lay-button>
    <lay-button type="warm">暖色按钮</lay-button>
    <lay-button type="danger">警告按钮</lay-button>
    <lay-button type="disabled">禁用按钮</lay-button>
    <br />
  </lay-fieldset>
  <lay-fieldset legend="尺寸" simple>
    <lay-button size="lg">大型按钮</lay-button>
    <lay-button>默认按钮</lay-button>
    <lay-button size="sm">大型按钮</lay-button>
    <lay-button size="xs">大型按钮</lay-button>
  </lay-fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LayButton, LayFieldset } from '../../../src';

export default defineComponent({
  components: {
    LayButton,
    LayFieldset,
  },
  setup() {
    return {};
  },
});
</script>
