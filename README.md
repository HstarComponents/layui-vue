# layui-vue

将Layui制作为Vue2组件。（UI一直是个痛，那就先基于现有的UI，先封装几套玩玩。）

对应的LayUI版本为：`1.0.9_rls`，[LayUI 源码仓库](https://github.com/sentsin/layui)

示例对应的Vue版本为：`2.2.4`，[Vue 源码仓库](https://github.com/vuejs/vue)

# Target/Plan

## Components

- [x] Button
- [x] Button Group
- [x] Switch
- [x] Checkbox
- [x] Radio
- [x] DropDownList
- [x] Tabset 
- [x] Progress
- [x] Accordion 
- [x] Table
- [x] Pagination
- [x] Tree
- [x] Fieldset
- [x] Blockquote

## Other

- [ ] Layer(弹出层)
- [ ] LayDate(日期时间选择)
- [ ] FileUpload(文件上传)
- [ ] Editor(富文本编辑器)

# How to Run?

> 推荐使用 pnpm 作为包管理工具

```bash
# Project init
pnpm i

# DEV 构建开发环境，然后打开：http://localhost:8080
pnpm start
# or
pnpm run docs:dev

# 编译文档
pnpm run docs:build

# 打包lib
pnpm run build
```
