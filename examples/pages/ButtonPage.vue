<template>
  <div class="page-button">
    <lv-group header="六种按钮主题">
      <lv-button type="primary" @click="onButtonClick($event)">原始按钮</lv-button>
      <lv-button>默认按钮</lv-button>
      <lv-button type="normal">白搭按钮</lv-button>
      <lv-button type="warm">暖色按钮</lv-button>
      <lv-button type="danger">警告按钮</lv-button>
      <lv-button :disabled="true" @click="onButtonClick($event)">警告按钮</lv-button>
    </lv-group>
    <lv-group header="四种按钮尺寸" class="site-demo-button">
      <template v-for="t in types">
        <template v-for="s in sizes">
          <lv-button :type="t" :size="s.name">{{s.text}}</lv-button>
        </template>
        <br>
      </template>
    </lv-group>
    <lv-group header="圆角按钮">
      <lv-button :radius="true">圆角按钮</lv-button>
      <lv-button :radius="true" size="big">圆角大按钮</lv-button>
      <lv-button :radius="true" size="small" type="danger">圆角小型危险按钮</lv-button>
    </lv-group>
    <lv-group header="带图标的按钮">
      <lv-button :radius="true"><i class="fa fa-lock"></i> 锁定按钮</lv-button>
      <lv-button :radius="true" size="small" type="danger"><i class="fa fa-user"></i> 用户按钮</lv-button>
      <lv-button type="warm"><i class="fa fa-spin fa-star"></i> 旋转图标按钮</lv-button>
    </lv-group>
    <lv-group header="按钮组">
      <lv-button-group size="mini" :type="groupType">
        <lv-button>增加</lv-button>
        <lv-button>编辑</lv-button>
        <lv-button>删除</lv-button>
      </lv-button-group>
      <lv-button-group>
        <lv-button><i class="fa fa-edit"></i></lv-button>
        <lv-button><i class="fa fa-minus"></i></lv-button>
        <lv-button><i class="fa fa-remove"></i></lv-button>
      </lv-button-group>
    </lv-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        groupType: 'danger',
        types: ['primary', '', 'normal'],
        sizes: [
          { name: 'big', text: '大型按钮' },
          { name: '', text: '默认按钮' },
          { name: 'small', text: '小型按钮' },
          { name: 'mini', text: '迷你按钮' }
        ],
        intervalId: 0
      };
    },
    mounted() {
      this.intervalId = setInterval(() => {
        this.groupType = this.types[Math.floor(Math.random() * 3)];
      }, 2000);
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    },
    methods: {
      onButtonClick(e) {
        console.log(e);
      }
    }
  };

</script>
