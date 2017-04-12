<style>

</style>
<template>
  <ul :class="{'layui-show': open && isChild, 'layui-box layui-tree': !isChild}">
    <li v-for="item in dataSource" @click.stop="itemClick(item)">
      <i class="layui-icon layui-tree-spread" v-if="item.children && item.children.length > 0" @click.stop="toggleOpen(item)">{{item.open ? '': ''}}</i>
      <a href="javascript:;">
        <i :class="item.icon" v-if="showIcon"></i>
        <cite>{{item.text}}</cite>
      </a>
      <lv-tree v-if="item.children && item.children.length > 0" :data-source="item.children" :open="item.open" @item-click="itemClick"
        :is-child="true"></lv-tree>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'lv-tree',
    props: {
      dataSource: { type: Array, default: () => [] },
      open: { type: Boolean, default: false },
      showIcon: { type: Boolean, default: false },
      isChild: { type: Boolean, default: false }
    },
    methods: {
      toggleOpen(item) {
        this.$set(item, 'open', !item.open);
      },
      itemClick(item) {
        this.$emit('item-click', item);
      }
    }
  };

</script>