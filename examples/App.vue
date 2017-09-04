<style lang="stylus">
  .logo {
    color: antiquewhite;
    h1 strong {
      font-size: 30px;
      color: darkorange;
    }
  }

  .layui-body.site-demo {
    z-index: 1000;
  }

  .layui-layout-admin .layui-body {
    bottom: 1px;
  }
</style>
<template>
  <div id="app" class="layui-layout layui-layout-admin">
    <div class="layui-header">
      <div class="layui-logo">LV-UI</div>
      <!-- 头部区域（可配合layui已有的水平导航） -->
      <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item"><a href="">控制台</a></li>
        <li class="layui-nav-item"><a href="">商品管理</a></li>
        <li class="layui-nav-item"><a href="">用户</a></li>
        <li class="layui-nav-item">
          <a href="javascript:;">其它系统</a>
          <dl class="layui-nav-child">
            <dd><a href="">邮件管理</a></dd>
            <dd><a href="">消息管理</a></dd>
            <dd><a href="">授权管理</a></dd>
          </dl>
        </li>
      </ul>
      <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item">
          <a href="javascript:;">
                <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
                贤心
              </a>
          <dl class="layui-nav-child">
            <dd><a href="">基本资料</a></dd>
            <dd><a href="">安全设置</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="">退了</a></li>
      </ul>
    </div>
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree">
          <li class="layui-nav-item layui-nav-itemed" v-for="m1 in menus">
            <a class="" href="javascript:;">{{m1.text}}</a>
            <dl class="layui-nav-child">
              <dd v-for="m2 in m1.children">
                <router-link :to="m2.path"><i :class="m2.icon"></i> {{m2.text}}</router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="layui-body site-demo">
      <router-view></router-view>
    </div>
    <!-- <div class="layui-footer footer footer-demo">
      <div class="layui-main">
        <p>
          2017 © <a href="https://github.com/hstarorg/">hstarorg</a> <a href="https://github.com/hstarorg/lv-ui/" target="_blank">Git仓库</a>
        </p>
      </div>
    </div> -->
    <div class="site-tree-mobile layui-hide">
      <i class="layui-icon"></i>
    </div>
    <div class="site-mobile-shade"></div>
  </div>
</template>

<script>
  import { eventBus } from './services/eventBus';
  export default {
    data() {
      return {
        systemName: 'AdminLTE UI DEMO',
        menus: [], // 菜单
        breadcrumbs: [] // 面包屑
      };
    },
    created() {
      this._loadSystemMenus();
      this._setBreadcrumb(this.$route.path);
    },
    watch: {
      $route(r) {
        eventBus.emit('route-change', r.path);
        this._setBreadcrumb(r.path);
      }
    },
    mounted() {
      layui.element.init();
    },
    methods: {
      _loadSystemMenus() {
        let menus = AppConf.menus.slice(0);
        this._processMenus(menus, null);
        this.menus = menus;
      },
      _processMenus(menus, parent) {
        menus.forEach(m => {
          m.$parent = parent;
          m.hasChildren = m.children && m.children.length > 0;
          if (m.hasChildren) {
            this._processMenus(m.children, m);
          }
        });
      },
      _setBreadcrumb(path) {
        let currentMenu = this._searchCurrentMenu(path, this.menus);
        let breadcrumbs = [];
        while (currentMenu) {
          breadcrumbs.push(currentMenu);
          currentMenu = currentMenu.$parent;
        }
        this.breadcrumbs = breadcrumbs.reverse();
      },
      _searchCurrentMenu(path, menus) {
        for (let m of menus) {
          if (!m.hasChildren && m.path === path) {
            return m;
          }
          if (m.hasChildren) {
            let result = this._searchCurrentMenu(path, m.children);
            if (result) {
              return result;
            }
          }
        }
        return null;
      },
      setCurrentMenu(menu, evt) {
        evt && evt.stopPropagation();
        this.prevMenu && this.$set(this.prevMenu, 'current', false);
        this.$set(menu, 'current', true);
        this.prevMenu = menu;
      }
    }
  }

</script>
