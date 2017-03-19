<template>
  <div class="page-forms">
    <lv-group header="简单表单控件">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">复选框</label>
          <div class="layui-input-block">
            <input type="checkbox" v-model="checked">
            <lv-checkbox :simple-style="false" v-model="checked">写作</lv-checkbox>
            <lv-checkbox :simple-style="false" v-model="checked">阅读</lv-checkbox>
            <lv-checkbox :simple-style="false" v-model="checked" :disabled="true">游戏</lv-checkbox>
          </div>
        </div>
        <div class="layui-form-item" pane="">
          <label class="layui-form-label">原始复选框</label>
          <div class="layui-input-block">
            <lv-checkbox v-model="checked">写作</lv-checkbox>
            <lv-checkbox v-model="checked">阅读</lv-checkbox>
            <lv-checkbox v-model="checked" :disabled="true">游戏</lv-checkbox>
          </div>
        </div>

        <div class="layui-form-item">
          <label class="layui-form-label">开关-默认关</label>
          <div class="layui-input-block">
            <lv-switch v-model="checked"></lv-switch>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">开关-默认开</label>
          <div class="layui-input-block">
            <lv-switch v-model="checked" on-text="开启" off-text="关闭"></lv-switch>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">单选框（{{radioValue}}）</label>
          <div class="layui-input-block">
            <lv-radio v-model="radioValue" val="男">男</lv-radio>
            <lv-radio v-model="radioValue" val="女">女</lv-radio>
            <lv-radio v-model="radioValue" val="保密">保密</lv-radio>
            <lv-radio v-model="radioValue" val="禁用" :disabled="true">禁用</lv-radio>
          </div>
        </div>
      </form>
    </lv-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        radioValue: '男'
      };
    }
  };

</script>
