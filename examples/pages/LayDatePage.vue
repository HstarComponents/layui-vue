<template>
  <div class="page-laydate">
    <lv-fieldset header="顺便列举几个常用例子" :is-title="true"></lv-fieldset>
    <div class="layui-inline">
      {{date1Val}}
      <lv-date v-model="date1Val" placeholder="自定义日期格式"></lv-date>
    </div>
    <div class="layui-inline">
      {{date2Val}}
      <lv-date v-model="date2Val" placeholder="开启节日" :show-festival="true"></lv-date>
    </div>
    <div class="layui-inline">
      {{date3Val}}
      <lv-date v-model="date3Val" placeholder="只能选昨天到明天" :show-festival="true" :min-date="minDate" :max-date="maxDate"></lv-date>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minDate: null,
        maxDate: null,
        date1Val: '',
        date2Val: '',
        date3Val: ''
      };
    },
    created() {
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 7);
      this.maxDate = new Date();
    }
  };

</script>
