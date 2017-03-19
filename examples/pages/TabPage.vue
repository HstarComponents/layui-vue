<template>
  <div class="page-tab">
    <lv-tabset>
      <lv-tab-item header="网站设置" :closable="true" icon="fa fa-home">网站设置的内容</lv-tab-item>
      <lv-tab-item header="用户管理">用户管理</lv-tab-item>
      <lv-tab-item header="权限分配">权限分配</lv-tab-item>
      <lv-tab-item header="商品管理" :disabled="true">商品管理</lv-tab-item>
      <lv-tab-item header="订单管理">订单管理</lv-tab-item>
    </lv-tabset>
    <hr>
    <lv-tabset type="simple">
      <lv-tab-item header="网站设置">网站设置的内容</lv-tab-item>
      <lv-tab-item header="用户管理">用户管理</lv-tab-item>
      <lv-tab-item header="权限分配">权限分配</lv-tab-item>
      <lv-tab-item header="商品管理">商品管理</lv-tab-item>
      <lv-tab-item header="订单管理">订单管理</lv-tab-item>
    </lv-tabset>
    <hr>
    <lv-tabset type="card">
      <lv-tab-item header="网站设置">网站设置的内容</lv-tab-item>
      <lv-tab-item header="用户管理">用户管理</lv-tab-item>
      <lv-tab-item header="权限分配">权限分配</lv-tab-item>
      <lv-tab-item header="商品管理">商品管理</lv-tab-item>
      <lv-tab-item header="订单管理">订单管理</lv-tab-item>
    </lv-tabset>
  </div>
</template>
<script>
  export default {};

</script>
