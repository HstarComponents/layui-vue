<template>
  <blockquote class="layui-elem-quote" :class="{ 'layui-quote-nm': normal }">
    <slot />
  </blockquote>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'lay-blockquote',
  props: {
    normal: { type: Boolean },
  },
  emits: ['click'],
  data() {
    return {};
  },
});
</script>
