<template>
  <blockquote class="lv-blockquote layui-elem-quote" :class="{'layui-quote-nm': normal}">
    <slot></slot>
  </blockquote>
</template>
<script>
  export default {
    name: 'lv-blockquote',
    props: {
      normal: { type: Boolean, default: false }
    }
  };

</script>
