<style lang="stylus">
  .logo {
    color: antiquewhite;
    h1 strong {
      font-size: 30px;
      color: darkorange;
    }
  }
  
  .layui-body.site-demo {
    padding: 10px !important;
  }
</style>
<template>
  <div id="app" class="layui-layout layui-layout-admin">
    <div class="layui-header header header-demo">
      <div class="layui-main">
        <a class="logo" href="">
          <h1><strong>LV-UI</strong> LayUI的Vue2封装</h1>
        </a>
      </div>
    </div>
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <ul class="layui-nav layui-nav-tree site-demo-nav">
          <li class="layui-nav-item" :class="{'layui-nav-itemed': m1.current}" v-for="m1 in menuData" @click="m1.current = !m1.current">
            <a class="javascript:;" href="javascript:;">{{m1.text}}<span class="layui-nav-more"></span></a>
            <dl class="layui-nav-child" v-if="m1.children && m1.children.length > 0">
              <dd :class="{'layui-this': m2.current}" v-for="m2 in m1.children" @click="setCurrentMenu(m2, $event)">
                <router-link :to="m2.name">{{m2.text}}</router-link>
              </dd>
              <!--<dd class="">
                  <a href="/demo/nav.html">导航与面包屑</a>
                </dd>
                <dd class="">
                  <a href="/demo/collapse.html">折叠面板</a>
                </dd>
                <dd class="">
                  <a href="/demo/table.html">基本表格</a>
                </dd>
                <dd class="">
                  <a href="/demo/auxiliar.html">简单辅助元素</a>
                </dd>-->
            </dl>
          </li>

          <!--<li class="layui-nav-item layui-nav-itemed">
              <a class="javascript:;" href="javascript:;">组件示例<span class="layui-nav-more"></span></a>
              <dl class="layui-nav-child">
                <dd class="">
                  <a href="/demo/layer.html">
                    <i class="layui-icon" style="top: 3px;"></i>
                    <cite>弹出层</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/layim.html">
                    <i class="layui-icon" style="position: relative; top: 3px;"></i>
                    <cite>即时通讯</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/laydate.html">
                    <i class="layui-icon" style="top: 1px;"></i>
                    <cite>日期时间选择</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/laypage.html">
                    <i class="layui-icon"></i>
                    <cite>多功能分页</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/laytpl.html">
                    <i class="layui-icon"></i>
                    <cite>模板引擎</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/layedit.html">
                    <i class="layui-icon"></i>
                    <cite>富文本编辑器</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/upload.html">
                    <i class="layui-icon"></i>
                    <cite>文件上传</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/tree.html">
                    <i class="layui-icon"></i>
                    <cite>树形菜单</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/util.html">
                    <i class="layui-icon"></i>
                    <cite>工具块</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/flow.html">
                    <i class="layui-icon"></i>
                    <cite>流加载</cite>
                  </a>
                </dd>
                <dd class="">
                  <a href="/demo/code.html">
                    <i class="layui-icon" style="top: 1px;"></i>
                    <cite>代码修饰器</cite>
                  </a>
                </dd>
              </dl>
            </li>-->

          <li class="layui-nav-item" style="height: 30px; text-align: center"></li>
          <span class="layui-nav-bar" style="top: 472.5px; height: 0px; opacity: 0;"></span></ul>
      </div>
    </div>
    <div class="layui-body site-demo">
      <router-view></router-view>
    </div>
    <div class="layui-footer footer footer-demo">
      <div class="layui-main">
        <p>
          2017 © <a href="https://github.com/hstarorg/">hstarorg</a> <a href="https://github.com/hstarorg/lv-ui/" target="_blank">Git仓库</a>
        </p>
      </div>
    </div>
    <div class="site-tree-mobile layui-hide">
      <i class="layui-icon"></i>
    </div>
    <div class="site-mobile-shade"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuData: [
          {
            name: '', text: '基本元素', current: true, children: [
              { name: 'button', text: '按钮组' },
              { name: 'tab', text: '选项卡' },
              { name: 'progress', text: '进度条' },
              { name: 'forms', text: '表单集合' },
              { name: 'auxiliar', text: '简单辅助元素' },
              { name: 'accordion', text: '折叠面板' },
              { name: 'table', text: '基本表格' }
            ]
          }, {
            name: '', text: '组件示例', current: true, children: [
              { name: 'pagination', text: '多功能分页' },
              { name: 'tree', text: '树形菜单' },
              { name: 'laydate', text: '日期时间选择' }
            ]
          }
        ],
        prevMenu: null
      };
    },
    methods: {
      setCurrentMenu(menu, evt) {
        evt && evt.stopPropagation();
        this.prevMenu && this.$set(this.prevMenu, 'current', false);
        this.$set(menu, 'current', true);
        this.prevMenu = menu;
      }
    }
  }

</script>
