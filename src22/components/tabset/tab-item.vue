<template>
  <div class="lv-tab-item layui-tab-item" :class="{'layui-show': show}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lv-tab-item',
    props: {
      header: { type: String },
      closable: { type: Boolean, default: false },
      icon: { type: String, default: '' },
      disabled: { type: Boolean, default: false }
    },
    data() {
      return {
        show: false,
        removed: false
      }
    }
  };

</script>
