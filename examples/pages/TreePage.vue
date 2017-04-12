<template>
  <div class="page-tree">
    <lv-fieldset header="基本树" :is-title="true"></lv-fieldset>
    <lv-tree :data-source="treeData" @item-click="onItemClick"></lv-tree>
    <lv-fieldset header="生成一个较深的树" :is-title="true"></lv-fieldset>
    <lv-tree :data-source="treeData2"></lv-tree>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        treeData: [],
        treeData2: [],
      }
    },
    created() {
      this.treeData = this.buildNodeList(2, 3, 3);
      this.treeData2 = this.buildNodeList(2, 10, 10);
    },
    methods: {
      buildNodeList(len, level, totalLevel) {
        let self = this;
        let result = [];
        for (let i = 0; i < len; i++) {
          let item = {
            text: `Level${totalLevel - level}-Item${i + 1}`,
            icon: 'fa fa-folder',
            // open: true
          };
          if (level > 0) {
            item.children = self.buildNodeList(len, level - 1, totalLevel)
          }
          result.push(item);
        }
        return result;
      },
      onItemClick(item) {
        console.log(item.text);
      }
    }
  };

</script>