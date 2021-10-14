<template>
  <div class="lv-button-group layui-btn-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lv-button-group',
    props: {
      type: { type: String, default: '' },
      size: { type: String, default: '' }
    },
    mounted() {
      this._updateChildrenTypeAndSize(this.type, this.size);
    },
    watch: {
      type(newVal) {
        this._updateChildrenTypeAndSize(newVal, null);
      },
      size(newVal) {
        this._updateChildrenTypeAndSize(null, newVal);
      }
    },
    methods: {
      _updateChildrenTypeAndSize(type, size) {
        this.$children.forEach(btn => {
          if (btn.$options._componentTag === 'lv-button') {
            btn._updateTypeAndSize(type, size);
          }
        });
      }
    }
  };

</script>
