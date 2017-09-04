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
      <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item">
          <router-link to="/">首页</router-link>
        </li>
        <li class="layui-nav-item"><a href="https://github.com/hstarorg/lv-ui/issues/new" target="_blank">提交Bug</a></li>
        <li class="layui-nav-item"><a href="https://github.com/hstarorg/lv-ui/" target="_blank">Git仓库</a></li>
        <li class="layui-nav-item">
          <router-link to="/praise">打赏我</router-link>
        </li>
      </ul>
    </div>
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree">
          <li class="layui-nav-item layui-nav-itemed" v-for="m1 in menus">
            <a class="" href="javascript:;">{{m1.text}}</a>
            <dl class="layui-nav-child">
              <dd v-for="m2 in m1.children" :class="{'layui-this': m2.active}">
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
        menus: [], // 菜单
        breadcrumbs: [], // 面包屑
        prevMenu: null
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
        this._setSelectedMenu(r.path);
      }
    },
    mounted() {
      layui.element.init();
      this._setSelectedMenu(this.$route.path);
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
          m.active = false;
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
      _setSelectedMenu(url) {
        this._setMenuStatus(this.prevMenu, false);
        let menu = this._searchCurrentMenu(url, this.menus);
        if (menu) {
          this.prevMenu = menu;
          this._setMenuStatus(menu, true);
        }
      },
      _setMenuStatus(menu, active) {
        if (!menu) {
          return;
        }
        menu.active = active;
        if (menu.parent) {
          this._setMenuStatus(menu.parent, active);
        }
      }
    }
  }

</script>
