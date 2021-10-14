<style>
  .lv-pagination {
    margin: 0;
  }
</style>
<template>
  <div class="lv-pagination layui-box layui-laypage" :class="theme">
    <a href="javascript:;" class="laypage_first" v-if="showFirstLast" @click.prevent="changeToPage(1)">{{firstText}}</a>
    <a href="javascript:;" class="layui-laypage-prev" v-if="showPrevNext" :disabled="pageIndex <= 1" @click.prevent="changeToPage(pageIndex - 1)">{{prevText}}</a>
    <template v-for="p in showPages" v-if="!disabledPageNumber">
      <a href="javascript:;" v-if="p.page !== pageIndex" @click="changeToPage(p.page)">{{p.text}}</a>
      <span v-if="p.page === pageIndex" class="layui-laypage-curr" @click="changeToPage(p.page)">
        <em class="layui-laypage-em"></em>
        <em>{{p.text}}</em>
      </span>
    </template>
    <a href="javascript:;" class="layui-laypage-next" v-if="showPrevNext" @click.prevent="changeToPage(pageIndex + 1)">{{nextText}}</a>
    <a href="javascript:;" class="layui-laypage-last" v-if="showFirstLast" @click.prevent="changeToPage(pageCount)">{{lastText}}</a>
    <template v-if="showGoto">
      <span class="layui-laypage-total">到第<input type="number" min="1" :max="pageCount" v-model.number="innerPageIndex" class="layui-laypage-skip" /> 页 
      <button type="button" class="layui-laypage-btn" @click="changeToPage(innerPageIndex)">确定</button></span>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'lv-pagination',
    props: {
      pageSize: { type: Number, default: 20 },
      totalCount: { type: Number, default: 0 },
      maxItemCount: { type: Number, default: 5 },
      firstText: { type: String, default: '首页' },
      lastText: { type: String, default: '末页' },
      prevText: { type: String, default: '上一页' },
      nextText: { type: String, default: '下一页' },
      showGoto: { type: Boolean, default: false },
      showFirstLast: { type: Boolean, default: false },
      showPrevNext: { type: Boolean, default: true },
      theme: { type: String, default: '' },
      disabledPageNumber: { type: Boolean, default: false },
      value: null
    },
    data() {
      return {
        pageIndex: 1,
        innerPageIndex: 1
      };
    },
    computed: {
      pageCount() {
        let pageCount = Math.ceil(this.totalCount / this.pageSize);
        if (this.pageIndex > pageCount && pageCount > 0) {
          this.pageIndex = pageCount;
        }
        return pageCount;
      },
      showPages() {
        let pages = [];
        let allPage = Math.ceil(this.pageCount / this.maxItemCount);
        let inPage = Math.ceil(this.pageIndex / this.maxItemCount);
        let startIdx, endIdx;
        startIdx = this.maxItemCount * (inPage - 1);
        endIdx = Math.min(startIdx + this.maxItemCount, this.pageCount);
        for (let i = startIdx + 1; i <= endIdx; i++) {
          pages.push({ page: i, text: String(i) });
        }
        if (inPage < allPage) {
          pages.push({ text: '...', page: endIdx + 1 });
        }
        if (inPage > 1) {
          pages.unshift({ text: '...', page: startIdx - 1 });
        }
        return pages;
      }
    },
    watch: {
      pageIndex(newVal) {
        if (newVal > this.pageCount) {
          this.pageIndex = this.pageCount;
        } else if (newVal <= 0) {
          this.pageIndex = 1;
        }
        this.innerPageIndex = newVal;
        this.$emit('input', this.pageIndex);
      },
      innerPageIndex(newVal) {
        if (newVal > this.pageCount) {
          this.innerPageIndex = this.pageCount;
        } else if (newVal <= 0) {
          this.innerPageIndex = 1;
        }
      },
      value(newVal) {
        this.pageIndex = Math.min(newVal, this.pageCount);
      }
    },
    methods: {
      changeToPage(page) {
        this.pageIndex = page;
      }
    }
  };

</script>
