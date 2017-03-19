<template>
  <div class="page-auxiliar">
    <lv-fieldset header="引用区块 - 默认风格" :is-title="true"></lv-fieldset>
    <lv-blockquote>这个貌似不用多介绍，因为你已经在太多的地方都看到</lv-blockquote>
    <lv-fieldset header="引用区块 - 一般风格" :is-title="true"></lv-fieldset>
    <lv-blockquote :normal="true">
      猿强，则国强。国强，则猿更强！
      <br>——孟子（好囖。。其实这特喵的是我说的）
    </lv-blockquote>
    <lv-fieldset header="字段集区块 - 默认风格" :is-title="true"></lv-fieldset>
    <lv-fieldset header="爱好">
      你可以在这里放任何内容，比如表单神马的
    </lv-fieldset>
    <lv-fieldset header="字段集区块 - 带标题的横线" :is-title="true"></lv-fieldset>
    <lv-fieldset header="标题" :is-title="true">
      内容区域
    </lv-fieldset>
  </div>
</template>
<script>
  export default {

  };

</script>
