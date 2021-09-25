<template>
  <div class="lv-accordion layui-collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lv-accordion',
    props: {
      single: { type: Boolean, default: false }
    },
    data() {
      return {
        items: []
      }
    },
    mounted() {
      this.items.forEach((item, index) => item.index = index);
    },
    methods: {
      notifyChange(index, shown) {
        this.$emit('shown-change', { index, shown });
      },
      toggleItemShown(index) {
        if (this.single) {
          this.items.filter(x => x.index !== index).forEach(item => item.shown = false);
        }
        this.items[index].shown = !this.items[index].shown;
      }
    }
  };

</script>