<template>
  <div class="lv-tabset layui-tab" :class="{'layui-tab-brief': type === 'simple', 'layui-tab-card': type === 'card'}">
    <ul class="layui-tab-title">
      <li v-for="(item, idx) in tabItems" :class="{'layui-this': idx === currentIdx, 'layui-disabled': item.disabled}" @click="setSelectedItem(item, idx)">
        <i :class="item.icon" v-if="item.icon"></i> {{item.header}}
        <i class="layui-icon layui-unselect layui-tab-close" v-if="item.closable" @click="removeItem(item, $event)">ဆ</i>
      </li>
    </ul>
    <div class="layui-tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lv-tabset',
    props: {
      type: { type: String, default: '' }
    },
    data() {
      return {
        tabItems: [],
        currentIdx: 0
      };
    },
    mounted() {
      this._updateTabset();
      this.setSelectedItem(null, 0);
    },
    methods: {
      getTabItems() {
        return this.$children.filter(item => item.$options.name === 'lv-tab-item');
      },
      setSelectedItem(item, idx) {
        if (item && item.disabled) {
          return;
        }
        this.currentIdx = idx;
        this.tabItems.forEach((item, idx2) => {
          item.show = idx2 === idx;
        });
        this.$emit('select-index-changed', idx);
      },
      removeItem(item, evt) {
        evt && evt.stopPropagation();
        item.removed = true;
      },
      _updateTabset() {
        this.tabItems = this.getTabItems();
      }
    }
  };

</script>
