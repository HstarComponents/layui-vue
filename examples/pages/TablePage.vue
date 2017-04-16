<template>
  <div class="page-table">
    <lv-fieldset header="默认表格" :is-title="true"></lv-fieldset>
    <lv-table :dataSource="dataSource" :showCheckbox="true">
      <lv-table-column header="人物" width="150" field="name"></lv-table-column>
      <lv-table-column header="民族" width="150" field="nation"></lv-table-column>
      <lv-table-column header="出场时间" width="150" field="date"></lv-table-column>
      <lv-table-column header="格言" field="motto"></lv-table-column>
    </lv-table>
    <br>
    <lv-fieldset header="行边框表格" :is-title="true"></lv-fieldset>
    <lv-table :dataSource="dataSource" :showColumnBorder="false">
      <lv-table-column header="人物" width="150" field="name"></lv-table-column>
      <lv-table-column header="民族" width="150" field="nation"></lv-table-column>
      <lv-table-column header="出场时间" width="150" field="date"></lv-table-column>
      <lv-table-column header="格言" field="motto"></lv-table-column>
    </lv-table>
    <br>
    <lv-fieldset header="列边框表格" :is-title="true"></lv-fieldset>
    <lv-table :dataSource="dataSource" :showRowBorder="false">
      <lv-table-column header="人物" width="150" field="name"></lv-table-column>
      <lv-table-column header="民族" width="150" field="nation"></lv-table-column>
      <lv-table-column header="出场时间" width="150" field="date"></lv-table-column>
      <lv-table-column header="格言" field="motto"></lv-table-column>
    </lv-table>
    <br>
    <lv-fieldset header="无边框表格" :is-title="true"></lv-fieldset>
    <lv-table :dataSource="dataSource" :showColumnBorder="false" :showRowBorder="false">
      <lv-table-column header="人物" width="150" field="name"></lv-table-column>
      <lv-table-column header="民族" width="150" field="nation"></lv-table-column>
      <lv-table-column header="出场时间" width="150" field="date"></lv-table-column>
      <lv-table-column header="格言" field="motto" :render="renderMottoColumn"></lv-table-column>
    </lv-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dataSource: [
          { name: '贤心', nation: '汉族', date: '1989-10-14', motto: '人生似修行' },
          { name: '张爱玲', nation: '汉族', date: '1920-09-30', motto: '于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…' }
        ]
      }
    },
    methods: {
      renderMottoColumn(rowData) {
        return `最后一列：${rowData.motto}`;
      }
    }
  };

</script>
