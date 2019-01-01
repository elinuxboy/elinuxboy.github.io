---
title: Linux-mint-xfce-19-踩坑记录
date: 2018-12-24 10:38:51
tags:
- Linux
- mint
- xfce
- 踩坑记录
categories:
- Linux
- xfce
---

## 创建系统快照

创建系统快照是 Linux Mint 19 的重要建议，可以使用与更新管理器捆绑的 Timeshift 应用程序轻松完成创建与恢复。


> 这个阶段很重要，万一出现令人遗憾的事件，比如安装破坏系统的应用程序，你始终可以恢复到系统副本。

![](https://i.imgur.com/pbx7uUr.png)

## 启用国内软件源

将主要和基础两个镜像设置为国内的最快的镜像，这里用 ustc （科大）镜像：

![](https://i.imgur.com/95mjNzv.png)

## 设置 Redshift 保护眼睛健康

Night Light 已迅速成为桌面操作系统和手持设备的一项必备功能。该功能有助于过滤蓝光，因而减轻视觉疲劳。你要做的就是启动 Redshift 应用程序（它默认安装），将其设置成自动启动。

![](https://i.imgur.com/VLa6WIz.png)

## 设置防火墙

Linux Mint 19 预装 UFW （简单防火墙）。你只要在菜单中搜索 ufw 并激活它。

![](https://i.imgur.com/cXKXgYO.png)

## 卸载自带软件

linux mint 会自带一些国内不常用的软件，需要卸载。

### 卸载自带音乐播放器 rhythmbox

`$ sudo apt remove rhythmbox`

### 卸载自带即时通讯工具 hexchat

`$ sudo apt remove hexchat`

### 卸载自带 libreoffice

只卸载文字（libreoffice-writer）与表格（libreoffice-calc）和幻灯片（libreoffice-impress）：

`$ sudo apt remove libreoffice-impress libreoffice-writer libreoffice-calc`

~~完全卸载，不要漏掉通配符“?”，否则无法清除/卸载全部 LibreOffice 软件包：~~

~~`$ sudo apt-get purge libreoffice?`~~

### 卸载自带词典 xfce4-dict

`$ sudo apt remove xfce4-dict`

## 安装常用软件

### 安装 apt-fast

apt-fast 是一款替代 apt-get 提升下载速度的软件，安装软件时，通过增加线程使下载软件速度加快。apt-fast 本身其实就是一个脚本，所以安装特别简单，都不需要编译的。

`$ git clone https://github.com/ilikenwf/apt-fast.git`

`$ cd apt-fast`

`$ sudo ./quick-install.sh`

也可以到`/etc/apt-fast.conf`自行修改，详情查看 apt-fast 的`README.md`文件。

*注：脚本`quick-install.sh`会自动安装 aria2。*

### 解决汉化不完全的问题

全新安装的 linux mint 中文版即使完全安装了简体中文语言包也会有汉化不完全的问题。
参照网上的解决办法：

![](https://i.imgur.com/b0wUxcb.png)

`$ sudo apt-fast install language-pack-zh-hans language-pack-gnome-zh-hans libreoffice-l10n-zh-cn thunderbird-locale-zh-hans firefox-locale-zh-hans`

### 安装中文输入法

#### 安装谷歌拼音输入法

搜狗拼音好用是好用，就是问题太多，资源占用也比较大，所以使用谷歌拼音输入法。

使用软件管理器安装以下组件：

	基础组件：fcitx
	配置组件：fcitx-config-gtk
	图标组件：fcitx-ui-classic
	谷歌拼音：fcitx-googlepinyin


`$ sudo apt-fast install fcitx fcitx-config-gtk fcitx-ui-classic fcitx-googlepinyin`

安装完成后注销或者重启即可。

*提示：安装系统默认中文输入法后如果系统的字体显示会出现变化，下面会介绍解决办法。*

~~#### 安装搜狗拼音输入法~~

~~到官网 https://pinyin.sogou.com/linux/?r=pinyin 下载，双击已下载的 deb 安装包 sogoupinyin_2.2.0.0108_amd64.deb，包管理器会解决依赖问题，然后自动安装。~~

### 安装中文字体

- 新建文件夹：`/usr/share/fonts/myFontsFromWin10` 
- 复制 windows 10 下`c:\Windows\Fonts\`的字体

  微软雅黑：msyh.ttc 

  微软雅黑：msyhbd.ttc

  楷体：simkai.ttf

  新宋体： simsun.ttc

  黑体：simhei.ttf

  仿宋：simfang.ttf

  宋体：simsunb.ttf

到`/usr/share/fonts/myFontsFromWin10`目录下。

- 控制台进入`/usr/share/fonts/myFontsFromWin10`目录，执行

`$ sudo mkfontale`

`$ sudo mkfontdir`

- 检查字体 

`$ fc-list | grep myFonts*`

以后就可以方便设置和使用这些字体了，顺便解决安装系统默认输入法后字体变化问题。

### 安装谷歌浏览器 chrome

从官网 https://www.google.com/chrome/ 下载，双击已下载的deb安装包`google-chrome-stable_current_amd64.deb`自动安装。

#### 添加谷歌访问助手扩展插件

打开 chrome，打开扩展程序，打开开发者模式，将已下载的文件“谷歌访问助手XXX.crx”拖到扩展程序页面，添加扩展程序即可。

![](https://i.imgur.com/MTsrNL0.png)

![](https://i.imgur.com/qFhhwaa.png)

### 安装多媒体插件

Linux Mint 19 整合了多种媒体播放器，但仍缺少一些多媒体代码，因此播放某些媒体文件可能是个问题。运行下列命令来安装媒体插件，享受出色的电影观赏和音乐聆听体验。

`$ sudo apt-fast install mint-meta-codecs`

### 安装网易云音乐播放器

官方版本（目前版本：netease-cloud-music_1.1.0_amd64_ubuntu.deb）的网易云音乐播放器有启动不了的 bug，网上修复也有很多问题，这里使用第三方的替代品 ieaseMusic。
项目地址：[https://github.com/trazyn/ieaseMusic](https://github.com/trazyn/ieaseMusic)。
双击已下载的 deb 安装包`ieaseMusic-1.3.2-linux-amd64.deb`开始自动安装。

### 安装在线视频播放

在线视频方面，Funplayer 更名为 Moonplayer（月亮播放器），而且一直在活跃更新中。目前已经较为成熟完善了，而且最近作者可能得到了某些志愿者美工的帮助，换了一套较为大气、漂亮的界面。站长薄荷君觉得非常有必要重新介绍一下 Linux 用户喜爱的“月亮播放器”。
在 LinuxMint/Ubuntu 系列系统中，使用如下 PPA 安装月亮播放器：

`$ sudo add-apt-repository ppa:cos-lyk/moonsoft`

`$ sudo apt-fast update`

`$ sudo apt-fast install moonplayer`

### 安装截图软件

#### shutter

可编辑的截图软件，使用软件管理器安装。

![](https://i.imgur.com/lI4Ah8H.png)

##### 修复shutter不能使用编辑截图的问题

安装了截图工具 Shutter 后，编辑按钮变成灰色。要重新启用“编辑”选项，Shutter 需要`libgoo-canvas-perl`库。使用已下载的 deb 包安装：

	libgoocanvas3_1.0.0-1_amd64.deb
	libgoocanvas-common_1.0.0-1_all.deb
	libgoo-canvas-perl_0.06-2ubuntu3_amd64.deb

![](https://i.imgur.com/Tn6oTLN.png)

#### hotshots

跨平台的截图工具。能添加文字、箭头、圆形、矩形、直线、贝塞尔曲线、图片、高亮荧光效果。如果不能用 shutter 编辑截图的话，就用 hotshots 替代。

### 安装录屏软件

#### vokscreen

使用软件管理器安装。

![](https://i.imgur.com/JJvEd79.png)

#### peek

AUR 上人气很高的屏幕录像工具，小巧玲珑，可保存录像为 gif 动图和兼容于 html5 的 webm 视频。

使用软件管理器安装。

![](https://i.imgur.com/5xA5gLe.png)

### 安装下载工具 uget

`$ sudo apt-fast install uget`

#### 配置 Chrome 调用 uGet 下载

##### 安装 uget-integrator

`$ sudo add-apt-repository ppa:uget-team/ppa`

`$ sudo apt update`

`$ sudo apt-fast install uget-integrator`

##### chrome 安装 uget 扩展

在 chrome 应用商店搜索`uGet Integration`，添加即可。

### 安装翻译词典 goldendict

强大的翻译软件，有离线词典（需要下载，然后添加）。使用软件管理器安装。

![](https://i.imgur.com/Wxc4t2l.png)

### 安装深度终端

可分屏的终端模拟器。使用软件管理器安装。

![](https://i.imgur.com/dqvWYXi.png)

### 安装 gnome 系统监视器

较全面的任务管理器。使用软件管理器安装。

![](https://i.imgur.com/r9Dl3QP.png)

###安装硬件信息查看工具

使用软件管理器安装。

![](https://i.imgur.com/BMy7I0Q.png)

###安装文件比较工具

使用软件管理器安装。

![](https://i.imgur.com/210EODj.png)

### 安装即时通讯工具

腾讯官方没有 linux 版本的 QQ 和微信客户端。只能使用第三方打包的软件。

QQ&TIM 项目地址：[https://github.com/askme765cs/Wine-QQ-TIM](https://github.com/askme765cs/Wine-QQ-TIM)

微信项目地址：[https://github.com/geeeeeeeeek/electronic-wechat](https://github.com/geeeeeeeeek/electronic-wechat)

或者另外一个微信项目：[https://github.com/trazyn/weweChat](https://github.com/trazyn/weweChat)

#### 安装 QQ

使用已经下载的软件包：Wine-QQ.AppImage

创建快捷方式：`/home/elinuxboy/.local/share/applications/wine-qq.desktop`

内容如下（具体位置需要修改，其中图标需要另行下载）：

{% fold 点击显示/隐藏内容 %} 
```shell
[Desktop Entry]
# 快捷方式的名称
Name=QQ轻聊版
# 注释
Comment=Linux下QQ的替代品wine-qq.
# AppImage qq所在的文件路径
Exec=/mnt/backup/软件/linux/software/qq&weixin/Wine-QQ.AppImage %U
Terminal=false
# 图标
Icon=/mnt/backup/软件/linux/software/qq&weixin/qq.png   
Type=Application
Categories=Network
StartupNotify=true
TryExec=/mnt/backup/软件/linux/software/qq&weixin/Wine-QQ.AppImage
Name[zh_CN]=QQ轻聊版
```
{% endfold %}

#### 安装 TIM

使用软件包 Wine-TIM.AppImage,
快捷方式类同 qq 的快捷方式创建

#### 安装微信

![](https://i.imgur.com/xeZXCGI.png)

下载后解压缩 electronic-wechat-linux-x64.tar.gz。
创建快捷方式与 QQ 类似。

### 安装远程桌面管理软件

去官网 https://www.teamviewer.com/cn/ 下载deb安装包安装。

### 安装超酷的 cat 替代命令 bat

项目地址：[https://github.com/sharkdp/bat](https://github.com/sharkdp/bat)

使用已下载的 deb 包`bat_0.8.0_amd64.deb`安装。

### 安装编辑软件Sublime

非常轻量、非常好用的代码编辑软件，使用软件管理器安装。

#### 中文输入修复

	## Sublime Text 3 输入法(Fcitx)修复[Ubuntu(Debian)]
	+ 修复 Sublime Text 3's 在 Ubuntu(Debian) 系统下的无法输入中文(CJK 字符)的问题
	+ 修复中文对齐问题

`$ git clone https://github.com/lyfeyaj/sublime-text-imfix.git`

`$ cd sublime-text-imfix`

`$ sudo ./sublime-imfix`

### 安装 git 图形界面

#### GitKraken

AUR 里人气很高的一个 Git 客户端。使用软件管理器安装。

![](https://i.imgur.com/axALn4P.png)

#### smartgit

使用软件管理器安装。

![](https://i.imgur.com/UWcLufZ.png)

##### SmartGit 过期破解

找到并删除文件：  ~/.smartgit/

### 安装虚拟机 vmware workstations

到官网下载。使用已下载的包`VMware-Workstation-Full-14.1.1-7528167.x86_64.bundle`。

在终端执行命令安装：

`$ sudo ./VMware-Workstation-Full-14.1.1-7528167.x86_64.bundle`

### 安装办公软件 wps

著名的国产 Office 套件，需要上wps官网下载。

使用已下载的 deb 包`wps-office_10.1.0.6757_amd64.deb`安装

#### 解决 wps 提示字体缺失问题

使用已下载的 deb 包`symbol-fonts_1.2_all.deb`安装。

### 安装 npm

`$ sudo apt-fast install npm`

#### 淘宝 npm

国内使用 npm 太慢的话，可以使用淘宝 npm。
淘宝 npm 地址： [http://npm.taobao.org/](http://npm.taobao.org/)

##### 临时使用

`$ npm --registry https://registry.npm.taobao.org install express`

##### 通过 cnpm 使用

###### 配置镜像

`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`

###### 使用 

`$ cnpm install express`

## 更新升级系统

`$ sudo apt update` 

`$ sudo apt-fast upgrade -y`

## 解决关机重启时间过长问题

LinuxMint/Ubuntu 关机重启等待 90 秒问题的解决办法：

1. 安装 watchdog

`$ sudo apt-fast install watchdog`

2. 开启 watchdog 服务

`$ sudo systemctl enable watchdog.service`

3. 马上启用 watchdog 服务

`$ sudo systemctl start watchdog.service`

只需上述三步，关机等待 90 秒就消失了。

## 双系统时间同步

装了 windows10 和 linux mint 19 双系统，仍然出现了喜闻乐见的老问题，装完后，在 windows 下时区不对。

- 方法一：

`$ sudo xed /etc/default/rcS`

更改 utc=yes 改成 utc=no，如若没有此行，直接添加即可

- 方法二：

`$ sudo apt-fast install ntpdate`

`$ sudo ntpdate time.windows.com`

然后将时间更新到硬件上：

`$ sudo hwclock --localtime --systohc`

重新进入 windows10，发现时间恢复正常了！

## 清洁系统

删除未完全安装的软件包：

`$ sudo apt autoclean`

删除 apt-cache：

`$ sudo apt clean`

删除不需要的软件依赖项：

`$ sudo apt autoremove`

## 设置开始菜单（whisker 菜单）属性

右键单击开始菜单》属性》行为》菜单》将菜单下的复选框全选上

![](https://i.imgur.com/y3Z4ygL.png)

效果如下：

![](https://i.imgur.com/yuW1YGf.png)

## 将打开的窗口设置为扁平按钮

右键单击面板》面板》面板首选项》项目》窗口管理》编辑当前选中的项目》外观》使用扁平按钮
设置面板时间显示

![](https://i.imgur.com/cY5A9tG.png)

右键单击面板》面板》面板选项》项目》时钟》编辑当前选中的项目》时钟选项》格式》自定义格式》将格式设置为：%Y 年 %m 月 %d 日 %T

![](https://i.imgur.com/7J3TrKs.png)

## 使用 adb 连接 android 手机

### 安装 adb

`$ sudo apt-fast install adb`

- 新建文件 `cat /etc/udev/rules.d/51-android.rules`，添加如下内容：

  SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"

- 重启 udev

`$ sudo /etc/init.d/udev restart`

- 将手机用数据线连接电脑，使用终端操作手机（需在手机上开启USB调试）

`$ adb shell #shell`

![](https://i.imgur.com/GZ8iAAW.png)

## 支持兼容 32bit 程序

要运行 32bit 的程序，需要安装如下库：

`$ sudo dpkg –add-architecture i386`

`$ sudo apt-fast install libc6:i386 lib32ncurses5 lib32stdc++6 ia32-libs lib32z1`

## 开机挂载 windows 格式的硬盘

*注意：该步骤会导致开机变慢*

linux mint 系统默认不会开机挂载其他分区，为了方便使用其他分区，需要设置开机挂载其他分区。
开始菜单》附件》硬盘》选择硬盘》选择分区》其他分区选项》编辑挂载选项》设置挂载选项和挂载点。重启系统后会自动挂载了。

![](https://i.imgur.com/nIf3zjV.png)