<template>
  <div class="lv-table-column">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lv-table-column',
    props: {
      header: { type: String, default: '' },
      field: { type: String },
      width: { type: String },
      render: { type: Function }
    },
    created() {
      if (!this.$parent || !this.$parent.$options || this.$parent.$options._componentTag !== 'lv-table') {
        console.warn('lv-table-column must in lv-table.');
      }
      this.$parent.columns.push(this);
    }
  };

</script>
