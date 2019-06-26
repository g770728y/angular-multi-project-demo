# angular 多个 project 组合成一个大项目

## 为什么

一个后台管理系统, 往往功能繁多, 开发时不容易实现隔离, 代码到处飞, 后期维护不便\
由于功能较多, 所以开发到中期, 会发现页面刷新越来越慢, 严重影响开发效率\

## 实现

将每个菜单页作为一个 project 单独开发, 实现功能高度隔离\
每个 project 可单独运行, 大幅减少开发调试时间, 基本可以实现保存后立即出效果\
同时, 可以将整个 angular 项目作为整体打包

当前实现: 使用 angular 自带的 project 功能\

> https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527

## 与 lerna 比较

可使用 lerna + ng-packagr 实现类似功能, 但非常麻烦, 举例:\

1. 很多 import "./node_modules/..."的地方, 需要修改路径\
2. 有时会报莫名其妙的错误, 虽然最终能够解决, 但心里感觉不安稳

## 当前问题

[ ] 未实现异步加载!
原因 1: BrowserModule 在 app1/app2 中都用到, 重复了. 但如果改成 CommonModule, 则子项目无法单独运行, 很纠结\
解决: 可以保持 AppModule, 其包含 BrowserModule, 以便子项目可单独运行\
同时, 导出 AppInnerModule, 不包含 BrowserModule

原因 2: 去掉主项目中所有对子项目的引用后, 打包时确实会打出 chunk 包, 但运行时会报有关 forRoot 的错\
