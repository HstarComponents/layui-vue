<template>
  <div class="lv-table layui-form">
    <slot></slot>
    <table class="layui-table" :lay-skin="skin">
      <colgroup>
        <col width="50" v-if="showCheckbox">
        <col v-for="col in columns" :width="col.width || 'auto'">
      </colgroup>
      <thead>
        <tr>
          <th v-if="showCheckbox">
            <input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </th>
          <th v-for="col in columns">{{col.header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in dataSource">
          <td v-if="showCheckbox"><input type="checkbox" name="" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary"><i class="layui-icon"></i></div>
          </td>
          <td v-for="col in columns">{{row[col.field]}}</td>
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
      showCheckbox: { type: Boolean, default: true },
      showRowBorder: { type: Boolean, default: true },
      showColumnBorder: { type: Boolean, default: true }
    },
    data() {
      return {
        columns: []
      };
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
    mounted() {
    }
  };

</script>