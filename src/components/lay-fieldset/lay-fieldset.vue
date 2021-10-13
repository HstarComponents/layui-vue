
<template>
  <fieldset class="layui-elem-field" :class="{ ['layui-field-title']: simple }">
    <legend>{{ legend }}</legend>
    <div class="layui-field-box"><slot /></div>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayFieldset',
  props: {
    legend: {
      type: String,
      required: true,
    },
    simple: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.layui-elem-field {
  border-color: #eee;
  margin-bottom: 10px;
  padding: 0;
  border-width: 1px;
  border-style: solid;
}
.layui-elem-field legend {
  margin-left: 20px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 300;
}
.layui-field-title {
  margin: 10px 0 20px;
  border-width: 1px 0 0;
}
.layui-field-box {
  padding: 15px;
}
.layui-field-title .layui-field-box {
  padding: 10px 0;
}
</style>
