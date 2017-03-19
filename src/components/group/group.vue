<template>
  <fieldset class="lv-group layui-elem-field">
    <legend>{{header}}</legend>
    <div class="layui-field-box">
      <slot></slot>
    </div>
  </fieldset>
</template>
<script>
  export default {
    name: 'lv-group',
    props: {
      header: { type: String, default: '' }
    }
  };

</script>
