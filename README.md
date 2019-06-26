# angular 多个 project 组合成一个大项目

## 为什么

可以将每个菜单页作为一个 project 单独开发, 实现功能高度隔离\
每个 project 可单独运行, 大幅减少开发调试时间, 基本可以实现保存后立即出效果

当前实现: 使用 angular 自带的 project 功能\

> https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527

## 与 lerna 比较

TODO

## 当前问题

[ ] 未实现异步加载!
原因 1: BrowserModule 在 app1/app2 中都用到, 重复了. 但如果改成 CommonModule, 则子项目无法单独运行, 很纠结\
解决: 可以保持 AppModule, 其包含 BrowserModule, 以便子项目可单独运行\
同时, 导出 AppInnerModule, 不包含 BrowserModule

原因 2: 去掉主项目中所有对子项目的引用后, 打包时确实会打出 chunk 包, 但运行时会报有关 forRoot 的错\
