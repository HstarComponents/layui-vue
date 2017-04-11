<template>
  <div class="lv-accordion-item layui-colla-item">
    <h2 class="layui-colla-title" @click="toggleStatus">
      <template v-if="!$slots.header">{{header}}</template>
      <slot name="header"></slot>
      <i class="layui-icon layui-colla-icon">{{shown ? '': ''}}</i>
    </h2>
    <div class="layui-colla-content" :class="{'layui-show': shown}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lv-accordion-item',
    props: {
      header: { type: String, default: '' },
      active: { type: Boolean, default: false }
    },
    data() {
      return {
        index: 0,
        shown: false
      };
    },
    created() {
      if (!this.$parent || !this.$parent.$options || this.$parent.$options._componentTag !== 'lv-accordion') {
        console.warn('lv-accordion-item must in lv-accordion.');
      }
      this.$parent.items.push(this);
    },
    watch: {
      active(newVal) {
        this.shown = newVal;
      },
      shown(newVal) {
        this.$parent.notifyChange(this.index, newVal);
      }
    },
    methods: {
      toggleStatus() {
        this.$parent.toggleItemShown(this.index);
      }
    }
  };

</script>