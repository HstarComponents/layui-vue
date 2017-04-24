<template>
  <div class="page-modal">
    <lv-button @click="openModal">打开模态框</lv-button>
    <lv-modal header="我是模态框" v-model="modalShown" :width="600" @ok="onOk">
      AGFADSFSDAFsa
    </lv-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modalShown: false
      }
    },
    methods: {
      openModal() {
        this.modalShown = true;
      },
      onOk(){
        alert('ok');
        this.modalShown = false;
      }
    }
  };

</script>
