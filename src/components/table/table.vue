<template>
  <div class="lv-table layui-form">
    <div v-if="!inited">
      <slot></slot>
    </div>
    <table class="layui-table" :lay-skin="skin">
      <colgroup>
        <col width="50" v-if="showCheckbox">
        <col v-for="col in columns" :width="col.width || 'auto'">
      </colgroup>
      <thead>
        <tr>
          <th v-if="showCheckbox">
            <lv-checkbox v-model="allChecked"></lv-checkbox>
          </th>
          <th v-for="col in columns">{{col.header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in dataSource">
          <td v-if="showCheckbox">
            <lv-checkbox v-model="selectedItems[idx].selected"></lv-checkbox>
          </td>
          <td v-for="col in columns">{{renderColumnText(row, col.field, col.render)}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
  export default {
    name: 'lv-table',
    props: {
      dataSource: { type: Array, default: () => [] },
      showCheckbox: { type: Boolean, default: false },
      showRowBorder: { type: Boolean, default: true },
      showColumnBorder: { type: Boolean, default: true }
    },
    data() {
      return {
        inited: false,
        columns: [],
        allChecked: false,
        selectedItems: []
      };
    },
    created() {
      this.syncSelectedItems();
    },
    mounted() {
      this.inited = true;
    },
    computed: {
      skin() {
        if (this.showRowBorder && this.showColumnBorder) {
          return '';
        } else if (this.showRowBorder) {
          return 'line';
        } else if (this.showColumnBorder) {
          return 'row';
        } else {
          return 'nob';
        }
      }
    },
    watch: {
      dataSource() {
        this.syncSelectedItems();
      },
      allChecked(newVal) {
        this.selectedItems.forEach(item => item.selected = newVal);
      }
    },
    methods: {
      syncSelectedItems() {
        this.selectedItems = this.dataSource.map((item, i) => ({ selected: false, item, index: i }));
      },
      getSelectedItems() {
        return this.selectedItems.filter(item => item.selected);
      },
      renderColumnText(rowData, field, render) {
        if (typeof render === 'function') {
          return render(rowData);
        }
        return rowData[field];
      }
    }
  };

</script>
