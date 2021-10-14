<template>
  <div class="layui-btn-group">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { stringEnum } from '../_utils/componentUtil';
import LayButton from './lay-button.vue';

export default defineComponent({
  name: 'lay-button-group',
  components: { LayButton },
  props: {
    type: {
      type: String,
      validator: stringEnum(['primary', 'normal', 'warm', 'danger']),
    },
    size: { type: String, validator: stringEnum(['lg', 'sm', 'xs']) },
  },
  data() {
    return {};
  },
  setup() {
    return {};
  },
});
</script>