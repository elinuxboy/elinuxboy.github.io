基于`Hexo`框架，`Next`主题，`Pages`托管服务的个人博客项目

# 概述

个人博客项目，使用`Hexo`静态博客框架创建，基于`Next`主题个性化定制，托管于代码托管平台的`Pages`服务上。

源码主要托管在 [GitHub](https://github.com) 远程仓库的`source`分支上；静态博客网页部署在 [GitHub](https://github.com) 远程仓库的`master`分支上，使用`GitHub`的`Pages`服务进行托管。

但是，受限于国内的网络环境原因，`GitHub`有时候会不能访问，或者网速实在“感人”。因此，需要同时将博客项目托管在国内的其他代码托管平台。

目前正在使用的代码托管平台为：[Gitee](https://gitee.com)（[开源中国 oschina](https://www.oschina.net/)推出的基于`Git`的代码托管平台，个人有`5G`的免费私有仓库）和 [Coding](https://coding.net/)（现在使用的是[腾讯云](https://dev.tencent.com)），同时，静态博客网页使用各自的`Pages`托管服务进行托管。

以下是我的个人博客项目在各个代码托管平台上远程仓库的项目地址和博客访问地址：

-   `GitHub`远程仓库

项目地址：[https://github.com/elinuxboy/elinuxboy.github.io](https://github.com/elinuxboy/elinuxboy.github.io)

博客访问地址：[https://elinuxboy.github.io](https://elinuxboy.github.io)

-   `Gitee`远程仓库

项目地址：[https://gitee.com/elinuxboy/elinuxboy](https://gitee.com/elinuxboy/elinuxboy)

博客访问地址：[https://elinuxboy.gitee.io](https://elinuxboy.gitee.io)

-   `Coding`远程仓库

项目地址：[https://dev.tencent.com/u/elinuxboy/p/elinuxboy.coding.me/git](https://dev.tencent.com/u/elinuxboy/p/elinuxboy.coding.me/git)

博客访问地址：[https://elinuxboy.coding.me](https://elinuxboy.coding.me)

# 前提准备

要使用`Hexo`创建博客项目，必须检查电脑中是否已安装下列应用程序：

-   [Node.js](http://nodejs.org/)
-   [Git](http://git-scm.com/)
-   [curl、tar 和 wget](http://lmgtfy.com/?q=linux+curl+tar+wget+install) 
-   [npm](https://www.npmjs.com/)（国内使用 [cnpm](https://npm.taobao.org/)，即[淘宝 npm](https://npm.taobao.org/) 代替）
-   [Hexo](https://hexo.io/zh-cn/)

具体如何安装可以百度，或者参考：[Hexo | 文档](https://hexo.io/zh-cn/docs/)。

# 项目管理

为了更好的进行管理和使用博客项目，需要使用`git`等工具对博客项目进行版本控制，并且将其托管在托管平台的远程仓库上。

## 已有项目

对于已经托管在代码托管平台上的博客项目，或者在更换了不同电脑的情况下，只需要将项目克隆下来即可继续使用。

### 克隆项目

以`GitHub`远程仓库为例，需要克隆`source`源码分支。

`git clone -b source git@github.com:elinuxboy/elinuxboy.github.io.git`

### 安装依赖模块

对于重新克隆下来的博客项目，想要使用，需要重新安装依赖：

`cnpm install`

这一步将会根据`package.json`文件安装所需要的模块。

## 新项目

对于需要重新创建项目时，可以按照如下方式进行。

### 新建 Hexo 博客项目

在工作空间创建并初始化`Hexo`博客项目，`Hexo` 将会新建所需要的文件：

`hexo init hexoBlog`

{% fold 点击显示/隐藏内容 %}

```sh
$ hexo init hexoBlog
INFO  Cloning hexo-starter to ~/workspace/blog/hexo/hexoBlog
正克隆到 '/home/elinuxboy/workspace/blog/hexo/hexoBlog'...
remote: Enumerating objects: 68, done.
remote: Total 68 (delta 0), reused 0 (delta 0), pack-reused 68
展开对象中: 100% (68/68), 完成.
子模组 'themes/landscape'（https://github.com/hexojs/hexo-theme-landscape.git）未对路径 'themes/landscape' 注册
正克隆到 '/home/elinuxboy/workspace/blog/hexo/hexoBlog/themes/landscape'...
remote: Enumerating objects: 1, done.        
remote: Counting objects: 100% (1/1), done.        
remote: Total 867 (delta 0), reused 0 (delta 0), pack-reused 866        
接收对象中: 100% (867/867), 2.55 MiB | 775.00 KiB/s, 完成.
处理 delta 中: 100% (459/459), 完成.
子模组路径 'themes/landscape'：检出 '73a23c51f8487cfcd7c6deec96ccc7543960d350'
INFO  Install dependencies
npm WARN deprecated titlecase@1.1.2: no longer maintained
npm WARN deprecated postinstall-build@5.0.3: postinstall-build's behavior is now built into npm! You should migrate off of postinstall-build and use the new `prepare` lifecycle script with npm 5.0.0 or greater.

> nunjucks@3.1.6 postinstall /home/elinuxboy/workspace/blog/hexo/hexoBlog/node_modules/nunjucks
> node postinstall-build.js src

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 422 packages from 501 contributors and audited 4700 packages in 19.96s
found 0 vulnerabilities

INFO  Start blogging with Hexo!
```

{% endfold %}

进入 **hexo 根**目录。这一目录中应当有 `node_modules`、`source`、`themes` 等若干子目录和文件：

`cd hexoBlog`

{% fold 点击显示/隐藏内容 %}

```sh
.
├── _config.yml* # 站点配置文件
├── package.json* # 已安装模块信息文件
├── package-lock.json*
├── .gitignore # 版本控制忽略控制文件 
├── node_modules/ # 已安装`nodejs`模块文件夹
├── scaffolds/ # 模板文件夹
│   ├── draft.md* # 草稿模板文件
│   ├── page.md* # 页面模板文件
│   └── post.md* # 发布文章模板文件
├── source/ # 资源文件夹
│   └── _posts/ # 发布文章文件夹
└── themes/ # 主题文件夹
    └── landscape/ # landscape 主题文件夹
```

{% endfold %}

### 本地版本控制仓库

#### 初始化

```sh
$ git init
已初始化空的 Git 仓库于 /home/elinuxboy/workspace/blog/hexo/hexoBlog/.git/
```

查看`git`本地版本控制仓库状态：

`git status `

{% fold 点击显示/隐藏内容 %}

```sh
$ git status      
位于分支 master

尚无提交

未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）

    .gitignore
    _config.yml
    package-lock.json
    package.json
    scaffolds/
    source/
    themes/

提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
```

{% endfold %}

#### git ignore 设置

```sh
$ cat .gitignore 
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```

#### 创建源码分支

创建新分支`source`用于管理`Hexo`博客源码，并切换到`source`分支：

```sh
$ git checkout -b source
切换到一个新分支 'source
```

#### 添加内容到暂存区

`git add .`

#### 提交暂存区的内容

`git commit -a`

添加提交日志：

{% fold 点击显示/隐藏内容 %}

```
初始提交

新创建 Hexo 博客并初始化

初始化本地版本控制仓库

增加新分支 source 用于管理 Hexo 博客项目源码
```

{% endfold %}

### 远程版本控制仓库

想要将博客项目托管在代码托管平台上，需要在代码托管平台上创建远程版本控制仓库并和本地版本控制仓库进行关联，然后推送本地版本控制仓库到远程仓库。

#### 创建远程仓库

-   GitHub

    创建名为`elinuxboy.github.io`空仓库。

-   Gitee

    创建名为`elinuxboy`的空仓库。

-   Coding

    创建名为`elinuxboy.coding.me`的空仓库。

#### 添加远程仓库关联

以`Github`代码托管平台为例，使用`Github`的远程仓库作为默认远程仓库，其他代码托管品台的远程仓库作为备用，需要按照如下方式添加远程仓库关联：

`git remote add origin git@github.com:elinuxboy/elinuxboy.github.io.git`

再将其他托管平台的远程仓库作为`push`方式添加：

`git remote set-url --add origin git@gitee.com:elinuxboy/elinuxboy.git `

`git remote set-url --add origin git@git.dev.tencent.com:elinuxboy/elinuxboy.coding.me.git`

添加远程仓库关联完成后，可查看是否正确添加：

```sh
origin  git@github.com:elinuxboy/elinuxboy.github.io.git (fetch)
origin  git@github.com:elinuxboy/elinuxboy.github.io.git (push)
origin  git@gitee.com:elinuxboy/elinuxboy.git (push)
origin  git@git.dev.tencent.com:elinuxboy/elinuxboy.coding.me.git (push)
```

如果使用其他托管平台作为默认远程仓库，方法与上面相同，只需要替换相应的地址即可。

#### 推送源码到远程仓库

上面已经将博客项目源码提交到本地版本控制仓库了，要将代码托管在托管平台，需要将本地版本控制仓库推送到代码托管平台的远程仓库。

查看当前所在的分支：

```shell
$ git status 
位于分支 source
您的分支与上游分支 'origin/source' 一致。
```

将本地版本控制仓库的`source`分支推送到远程仓库的`source`分支：

`git push origin source`

# 使用 Next 主题

## 下载最新 release 版本

选择好相应的 [release 版本](https://github.com/theme-next/hexo-theme-next/releases/latest)。使用 [curl、tar 和 wget](http://lmgtfy.com/?q=linux+curl+tar+wget+install) 安装(此处已加上版本号，使用时需要手动**替换版本号**)：

```sh
$ mkdir themes/next-v6.6.0
$ curl -s https://api.github.com/repos/theme-next/hexo-theme-next/releases/latest | grep tarball_url | cut -d '"' -f 4 | wget -i - -O- | tar -zx -C themes/next-v6.6.0 --strip-components=1
```

## 启用 Next 主题

修改站点配置文件`/_config.yml`，启用`Next`主题：

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
# theme: landscape
theme: next-v6.6.0 # 启用 Next 主题
```

启用了`Next`主题后，就可以对`Next`主题进行相应的优化和个性化定制了。

# 以 Hexo 方式使用 Hexo 数据文件特性

将全部配置都将置于`hexo`站点配置文件`/_config.yml`中，将主题配置文件的所有项复制到站点配置文件中进行修改，不需要修改主题配置文件`/themes/next-xxx/_config.yml`，或者创建其他的配置文件。但是所有的主题选项必须放置在 `theme_config:` 后，并全部增加两个空格的缩进。

如果在新的 release 中出现了任何新的选项，那么你只需要从 `next/_config.yml` 中将他们复制到 `hexo/_config.yml` 中并设置它们的值为你想要的选项。

# 远程部署

上面已经将博客项目的源码推送到代码托管平台的远程版本控制仓库了，下面就是将博客静态网页相关文件部署到代码托管平台的远程仓库上了。

## 部署设置

为了将博客静态站点部署到不同的代码托管平台，需要按照如下方式在配置文件内（站点配置文件）设置部署信息：

{% fold 点击显示/隐藏内容 %}

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

{% fold 点击显示/隐藏内容 %}
{% endfold %}

## 安装部署插件

修改了部署设置信息，想要使用`hexo`进行部署，还需要安装部署插件：

`cnpm install hexo-deployer-git --save`

## 部署

根据`Hexo`文档说明，使用以下命令进行部署(先清空后生成再部署)：

`hexo clean && hexo g -d`