<template>
  <div class="page-pagination">
    <input type="text" v-model.number="totalCount">
    <input type="text" v-model.number="pageSize">
    当前选中的页码：{{pageIndex}}
    <lv-fieldset header="开门见山：默认分页" :is-title="true"></lv-fieldset>
    <lv-pagination :total-count="totalCount" :page-size="pageSize" v-model="pageIndex"></lv-pagination>
    <br>
    <lv-fieldset header="自定义文本 ： 上一页、下一页、首页、末页统统被替换" :is-title="true"></lv-fieldset>
    <lv-pagination :total-count="totalCount" :page-size="pageSize" prev-text="<" next-text=">" v-model="pageIndex"></lv-pagination>
    <br>
    <lv-fieldset header="不显示首页、末页" :is-title="true"></lv-fieldset>
    <lv-pagination :total-count="totalCount" :page-size="pageSize" :show-first-last="false" v-model="pageIndex"></lv-pagination>
    <br>
    <lv-fieldset header="只显示上一页、下一页" :is-title="true"></lv-fieldset>
    <lv-pagination :total-count="totalCount" :page-size="pageSize" :disabledPageNumber="true" v-model="pageIndex"></lv-pagination>
    <br>
    <lv-fieldset header="是时候看一下完整功能了！" :is-title="true"></lv-fieldset>
    <lv-pagination :total-count="totalCount" :page-size="pageSize" :showGoto="true" v-model="pageIndex"></lv-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        totalCount: 1024,
        pageSize: 25,
        pageIndex: 1,
      }
    }
  };

</script>