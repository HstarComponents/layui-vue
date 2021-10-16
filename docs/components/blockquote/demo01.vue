<template>
  <lay-blockquote> 引用区域的文字 </lay-blockquote>

  <lay-blockquote normal> 引用区域的文字 </lay-blockquote>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LayBlockquote } from '../../../src';

export default defineComponent({
  components: {
    LayBlockquote,
  },
});
</script>
