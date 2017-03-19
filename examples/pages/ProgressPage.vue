<template>
  <div class="page-progress">
    <lv-fieldset header="进度条风格">
      <div class="layui-form-item">
        <label class="layui-form-label">进度条值：</label>
        <div class="layui-input-block">
          <input type="number" v-model.number="value" class="layui-input">
        </div>
      </div>
      <lv-progress bg-color="#FF5722" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#F7B824" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#009688" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#2F4056" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#1E9FFF" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#393D49" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#eee" :value="value"></lv-progress>
    </lv-fieldset>
    <lv-fieldset header="尺寸与显示百分比">
      <lv-progress :big-size="true" :value="value"></lv-progress>
      <br>
      <lv-progress :big-size="true" :show-progress-text="true" :value="value"></lv-progress>
      <br>
      <lv-progress bg-color="#393D49" :show-progress-text="true" :value="value"></lv-progress>
    </lv-fieldset>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 50
      };
    }
  };

</script>
