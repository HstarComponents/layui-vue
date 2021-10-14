<template>
  <lay-fieldset legend="主题" simple>
    <lay-button type="primary">原始按钮</lay-button>
    <lay-button>默认按钮</lay-button>
    <lay-button type="normal">百搭按钮</lay-button>
    <lay-button type="warm">暖色按钮</lay-button>
    <lay-button type="danger">警告按钮</lay-button>
    <lay-button disabled>禁用按钮</lay-button>
  </lay-fieldset>
  <lay-fieldset legend="尺寸" simple>
    <lay-button size="lg">大型按钮</lay-button>
    <lay-button>默认按钮</lay-button>
    <lay-button size="sm">小型按钮</lay-button>
    <lay-button size="xs">迷你按钮</lay-button>
    <br />
    <br />
    <lay-button size="lg" type="normal">大型百搭</lay-button>
    <lay-button type="warm">大型百搭</lay-button>
    <lay-button size="sm" type="danger">小型警告</lay-button>
    <lay-button size="xs" disabled>迷你禁用</lay-button>
    <br />
    <br />
    <lay-button block>流体按钮（最大化适应）</lay-button>
    <br />
    <br />
    <lay-button block type="primary">流体按钮（最大化适应）</lay-button>
  </lay-fieldset>
  <lay-fieldset legend="圆角" simple>
    <lay-button type="primary" radius>原始按钮</lay-button>
    <lay-button radius>默认按钮</lay-button>
    <lay-button type="normal" radius>百搭按钮</lay-button>
    <lay-button type="warm" radius>暖色按钮</lay-button>
    <lay-button type="danger" radius>警告按钮</lay-button>
    <lay-button disabled radius>禁用按钮</lay-button>
    <br />
    <br />
    <lay-button size="lg" type="normal" radius>大型百搭</lay-button>
    <lay-button type="warm" radius>大型百搭</lay-button>
    <lay-button size="sm" type="danger" radius>小型警告</lay-button>
    <lay-button size="xs" disabled radius>迷你禁用</lay-button>
  </lay-fieldset>
  <lay-fieldset legend="按钮容器" simple>
    <lay-button-container>
      <button type="button" class="layui-btn">按钮一</button>
      <button type="button" class="layui-btn">按钮二</button>
      <button type="button" class="layui-btn">按钮三</button>
      <button type="button" class="layui-btn">按钮四</button>
      <button type="button" class="layui-btn">按钮五</button>
      <button type="button" class="layui-btn">按钮六</button>
      <button type="button" class="layui-btn">按钮七</button>
      <button type="button" class="layui-btn">按钮八</button>
      <button type="button" class="layui-btn">按钮九</button>
    </lay-button-container>
  </lay-fieldset>
  <lay-fieldset legend="按钮组" simple>
    <lay-button-group>
      <lay-button>按钮一</lay-button>
      <lay-button>按钮二</lay-button>
      <lay-button>按钮三</lay-button>
    </lay-button-group>
    <lay-button-group size="sm" type="warm">
      <lay-button>按钮一</lay-button>
      <lay-button>按钮二</lay-button>
      <lay-button>按钮三</lay-button>
    </lay-button-group>
  </lay-fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  LayButton,
  LayButtonGroup,
  LayButtonContainer,
  LayFieldset,
} from '../../../src';

export default defineComponent({
  components: {
    LayButton,
    LayButtonGroup,
    LayButtonContainer,
    LayFieldset,
  },
  setup() {
    return {};
  },
});
</script>
