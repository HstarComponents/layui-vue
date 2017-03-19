<template>
  <fieldset class="lv-fieldset layui-elem-field" :class="{'layui-field-title': isTitle}">
    <legend>{{header}}</legend>
    <div class="layui-field-box" v-show="$slots.default">
      <slot></slot>
    </div>
  </fieldset>
</template>
<script>
  export default {
    name: 'lv-fieldset',
    props: {
      header: { type: String, default: '' },
      isTitle: { type: Boolean, default: false },
    }
  };

</script>
