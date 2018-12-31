基于Hexo框架，Next主题，使用Pages服务托管的个人博客项目

# 概述

静态个人博客，使用`Hexo`静态博客框架创建，基于`Next`主题个性化定制。

源码主要托管在国外的代码托管平台`GitHub`远程仓库的`source`分支上；

静态博客网页部署在`GitHub`远程仓库的`master`分支上，使用`GitHub`的`Pages`托管服务。

因为国内的网络环境原因，`GitHub`有时候会不能访问，或者网速实在“感人”，因此，需要同时将博客项目托管在国内的代码托管平台。

目前主要使用`Gitee`（开源中国`oschina`推出的基于`Git`的代码托管平台，个人有`5G`的免费私有仓库）和`Coding`（现在使用的是腾讯云）上，同时，静态博客使用各自的`Pages`托管服务。

-   `GitHub`远程仓库

项目地址：[https://github.com/elinuxboy/elinuxboy.github.io](https://github.com/elinuxboy/elinuxboy.github.io)

博客访问地址：[https://elinuxboy.github.io](https://elinuxboy.github.io)

-   `Gitee`远程仓库

项目地址：[https://gitee.com/elinuxboy/elinuxboy](https://gitee.com/elinuxboy/elinuxboy)

博客访问地址：[https://elinuxboy.gitee.io](https://elinuxboy.gitee.io)

-   `Coding`远程仓库

项目地址：[https://dev.tencent.com/u/elinuxboy/p/elinuxboy.coding.me/git](https://dev.tencent.com/u/elinuxboy/p/elinuxboy.coding.me/git)

博客访问地址：[https://elinuxboy.coding.me](https://elinuxboy.coding.me)

# 克隆项目

以`GitHub`远程仓库为例，克隆`source`源码分支。

`git clone -b source git@github.com:elinuxboy/elinuxboy.github.io.git`

# 安装依赖模块

对于重新克隆下来的博客项目，需要重新安装依赖：

`$ cnpm install`

这一步将会根据`package.json`文件安装所需要的模块。

# 博客部署设置

为了将博客静态站点部署到不同的代码托管平台，需要按照如下方式在配置文件内（站点配置文件或者自定义配置文件）设置部署信息：

```yaml
# Deployment 远程部署设置
## Docs: https://hexo.io/docs/deployment.html
deploy:
  # github
- type: git
  repo: git@github.com:elinuxboy/elinuxboy.github.io.git,
  branch: master # 部署到主分支
  # coding
- type: git
  repo: git@git.dev.tencent.com:elinuxboy/elinuxboy.coding.me.git
  branch: master # 部署到主分支
  # gitee
- type: git
  repo: git@gitee.com:elinuxboy/elinuxboy.git
  branch: master # 部署到主分支
```