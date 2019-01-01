---
title: manjaro-xfce-18-踩坑记录
date: 2018-12-24 10:39:08
tags:
- manjaro
- Linux
- xfce
- 踩坑记录
categories:
- Linux
- xfce
---

## 简介

### Manjaro Linux

Manjaro Linux是一个基于Arch Linux的发行版，继承了后者**轻快**、**滚动式更新**、**AUR软件多**的==优点==，同时又**改善了**后者对新手不友好、软件包过于激进、不够稳定的==缺点==，是最能拿来用、最好用的Linux发行版。

它不仅**开箱即用**，**界面人性化**，**轻快不卡慢**，稳定无崩溃，**安静无弹窗**，最最可喜的是**软件超多**！相信你用了Manjaro之后，再不会折腾、也不会再抛弃这个发行版了。

### 开发桌面环境

这是我的 manjaro xfce 18 安装好以后的桌面使用情况：

{% fold 点击显示/隐藏内容 %} 
```shell
# elinuxboy @ mjro18xfce in ~ [9:57:35] 
$ screenfetch

 ██████████████████  ████████     elinuxboy@mjro18xfce
 ██████████████████  ████████     OS: Manjaro 18.0 Illyria
 ██████████████████  ████████     Kernel: x86_64 Linux 4.19.8-2-MANJARO
 ██████████████████  ████████     Uptime: 1m
 ████████            ████████     Packages: 1301
 ████████  ████████  ████████     Shell: zsh 5.6.2
 ████████  ████████  ████████     Resolution: 1366x768
 ████████  ████████  ████████     DE: Xfce4
 ████████  ████████  ████████     WM: Xfwm4
 ████████  ████████  ████████     WM Theme: Arc-Dark
 ████████  ████████  ████████     GTK Theme: Arc-Dark [GTK2]
 ████████  ████████  ████████     Icon Theme: Numix-Circle
 ████████  ████████  ████████     Font: 文泉驿微米黑 12
 ████████  ████████  ████████     CPU: Intel Core i5-5200U @ 4x 2.7GHz [46.0°C]
                                  GPU: Mesa DRI Intel(R) HD Graphics 5500 (Broadwell GT2) 
                                  RAM: 602MiB / 7892MiB
```
{% endfold %}

我对桌面环境的需求次序（优先级由高到低）：

>   系统性能好，占用资源少——》软件数量多——》对用户友好，易安装，易使用——》界面美观

-   性能

    对**系统性能**的要求，必须要足够好，占用资源少，给开发留下的资源越多越好。

    作为一个开发者（程序员），想要提工作高效率，对系统性能的要求几乎达到苛刻的地步。

    因为开发者在处理一个问题时，动则要调用大量工具，或者同时打开十几、几十、上百个网页来搜索网上的解决方案，而firefox或chrome等上网工具都是吃内存大户（牺牲空间复杂度换来快速的时间复杂度），有时候必须牺牲一些后台程序以加快系统速度适应开发者的需要。

    而Manjaro Linux发行版和Xfce桌面都具有快速、轻量、加载程序快速、占用的系统资源少的优点。

-   软件

    为了节省不必要的折腾时间，开发者手头上的工具是越多越好、越容易获取越好。

    centos、slackware这些软件奇缺或者需要非常复杂的途径才能找到安装源的系统就没必要尝试了。

    ubuntu系软件比较丰富，但QQ/TIM这样的基本软件还需要折腾一番，还未必能稳定使用。

    [arch linux系软件包异常丰富](https://www.lulinux.com/archives/2787)，无情碾压deb和rpm系诸多发行版，例如manjaro下可以一条命令安装好无比稳定、功能全面的deepinwine-tim或deepinwine-qq。

-   对用户友好

    对任何一个工作者来说，时间就是衡量一切价值的标准，节省时间就是延长生命尺度。拿archlinux为反面典型，虽然其性能高可以节省工作时间，但是如果安装它都要从头开始学习ABC，那价值就大打折扣。就安装系统的便捷性来说，archlinux、gentoo、lfs这样的系统真没必要尝试。

-   界面外观

    为了性能，必须牺牲酷炫的外观，过炫的桌面影响桌面性能；但是过于简单的桌面需要花时间配置还不一定能完全配置好，也是影响工作效率。所以，外观普通即可，默认桌面选择xfce4、lxde、mate甚至仿制windows界面都是不错的。

综合考虑下，以下是我对一些发行版及桌面的排序（仅代表个人观点）：

-   发行版：

>   manjaro——》mint——》ubuntu——》debian——》其他

-   桌面环境

>   xfce 4——》mate/gnome-classic——》cinnamon——》lxde——》其他

我选择的开发桌面环境：

-   manjaro-xfce-18.0-stable（第一选择）
-   linuxmint-19-xfce
-   ubuntu-16.04.5-desktop

##  自动打开 NumLock

确保已经安装 numlockx, 然后编辑 /etc/lightdm/lightdm.conf文件，在末尾添加以下几行:

```shell
[Seat:*]
greeter-setup-script=/usr/bin/numlockx on
```

##  系统快照

###  安装timeshift

`sudo pacman -S timeshift`

### 使用timeshift创建系统快照

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111028661-336226830.png)

##  国内源设置

### manjaro官方软件仓库

#### 自动寻找最快的源

`sudo pacman-mirrors -i -c China -m rank`

{% fold 点击显示/隐藏内容 %} 
```shell
[elinuxboy@mjro18xfce ~]$ sudo pacman-mirrors -i -c China -m rank
.: INFO Downloading mirrors from repo.manjaro.org
.: INFO Using default mirror file
.: INFO Querying mirrors - This may take some time
   0.867 China          : https://mirrors.ustc.edu.cn/manjaro/
   0.557 China          : http://mirrors.tuna.tsinghua.edu.cn/manjaro/
   0.861 China          : https://mirrors.zju.edu.cn/manjaro/
   0.727 China          : https://mirrors.sjtug.sjtu.edu.cn/manjaro/

.: INFO User generated mirror list
--
.: INFO Custom mirror file saved: /var/lib/pacman-mirrors/custom-mirrors.json
.: INFO Writing mirror list
   China           : http://mirrors.tuna.tsinghua.edu.cn/manjaro/stable/$repo/$a
.: INFO Mirror list generated and saved to: /etc/pacman.d/mirrorlist
[elinuxboy@mjro18xfce ~]$
```
{% endfold %}

#### 选择源

在弹出窗口中选择排第一位的源（这里选择清华大学tsinghua的源）然后点击“OK”，再次单击“确定”即可选择好最快的源。

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111114015-343509629.png)

#### 更新源

`sudo pacman -Sy`

### 非官方仓库（Arch Linux 中文社区仓库）

Arch Linux 中文社区仓库 是由 Arch Linux 中文社区驱动的非官方用户仓库。包含中文用户常用软件、工具、字体/美化包等。

完整的包信息列表（包名称/架构/维护者/状态）请 [点击这里](https://github.com/archlinuxcn/repo) 查看。

-   官方仓库地址：[http://repo.archlinuxcn.org](http://repo.archlinuxcn.org/)
-   镜像地址: <https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/>

#### 手动添加archlinuxcn清华源

`sudo vim /etc/pacman.conf`

用上面的命令编辑/etc/pacman.conf，在最下方添加（这里使用清华大学的源）：

```shell
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

详情参见附录I。

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111509383-263018155.png)

#### 更新源

`sudo pacman -Sy`

#### 安装archlinuxcn-keyring包导入GPG key：

`sudo pacman -S archlinuxcn-keyring`

#### 再次更新源

`sudo pacman -Sy`

## 安装yaourt以及pacaur

为了安装使用AUR方便，也可以额外安装yaourt以及pacaur

`sudo pacman -S yaourt pacaur`

**注意：**使用使用yaourt安装软件时：

>   a.不需要使用sudo否则报root错误；
>
>   b.在提示调用vim时 输入vim然后回车；
>
>   c.如果不想输入vim: 修改~/.zshrc 文件文件最后加入export VISUAL=“vim” 即可。

##  软件安装时下载加速

设置替换wget或者curl下载命令。以下在配置时，aria2c和axel使用其中一种即可（这里使用aria2c）。

### 使用aria2c多线程多链接加速

aria2c 是一个自由、开源、轻量级多协议和多源的命令行下载工具。

aria2c 支持 HTTP/HTTPS、FTP、SFTP、 BitTorrent 和 Metalink 协议。

aria2c 可以通过内建的 JSON-RPC 和 XML-RPC 接口来操纵。

aria2c 下载文件的时候，自动验证数据块。它可以通过多个来源或者多个协议下载一个文件，并且会尝试利用你的最大下载带宽。

aria2c 支持多线程，可以使用多个源或协议下载文件，确实可以加速并尽可能多的完成下载。

#### 安装aria2c

`sudo pacman -Sy aria2c`

#### 配置pacman多线程多链接加速

编辑pacman配置文件/etc/pacman.conf，找到Xfercommand修改成如下：

```shell
......
# aria2c 多线程多链接
XferCommand = /usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 -d $(dirname %o) -o $(basename %o) %u
......
```

#### 配置yaourt多线程多链接加速

编辑makepkg配置文件/etc/makepkg.conf，找到DLAGENTS修改成如下

{% fold 点击显示/隐藏内容 %} 
```shell
...
#DLAGENTS=('file::/usr/bin/curl -gqC - -o %o %u'
#          'ftp::/usr/bin/curl -gqfC - --ftp-pasv --retry 3 --retry-delay 3 -o %o %u'
#          'http::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'https::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'rsync::/usr/bin/rsync --no-motd -z %u %o'
#          'scp::/usr/bin/scp -C %u %o')
#aria2c 多线程多链接
DLAGENTS=('file::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
        'ftp::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
        'http::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
        'https::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
        'rsync::/usr/bin/rsync --no-motd -z %u %o'
        'scp::/usr/bin/scp -C %u %o')
...
```
{% endfold %}

详情请参见附录II。

### 使用Axel单线程多链接加速

Axel 是一个轻量级下载程序，它和其他加速器一样，对同一个文件建立多个连接，每个连接下载单独的文件片段以更快地完成下载。

Axel 支持 HTTP、HTTPS、FTP 和 FTPS 协议。它也可以使用多个镜像站点下载单个文件，所以，Axel 可以加速下载高达 40％（大约，我个人认为）。它非常轻量级，因为它没有依赖并且使用非常少的 CPU 和内存。

Axel 一步到位地将所有数据直接下载到目标文件（LCTT 译注：而不是像其它的下载软件那样下载成多个文件块，然后拼接）。

注意：不支持在单条命令中下载两个文件。

#### 安装axel

~~`sudo pacman -S axel  `~~

#### 配置pacman单线程多链接加速

编辑pacman配置文件/etc/pacman.conf，找到Xfercommand修改成如下：

```shell
......
# axel 单线程多链接
XferCommand = /usr/bin/axel -a -n 16 %u -o %o
......
```

#### 配置yaourt单线程多链接加速

编辑makepkg配置文件/etc/makepkg.conf，找到DLAGENTS修改成如下

{% fold 点击显示/隐藏内容 %} 
```shell
......
#DLAGENTS=('file::/usr/bin/curl -gqC - -o %o %u'
#          'ftp::/usr/bin/curl -gqfC - --ftp-pasv --retry 3 --retry-delay 3 -o %o %u'
#          'http::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'https::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'rsync::/usr/bin/rsync --no-motd -z %u %o'
#          'scp::/usr/bin/scp -C %u %o')
#axel 单线程多链接
DLAGENTS=('file::/usr/bin/axel -a -n 16 %u -o %o'
        'ftp::/usr/bin/axel -a -n 16 %u -o %o'
        'http::/usr/bin/axel -a -n 16 %u -o %o'
        'https::/usr/bin/axel -a -n 16 %u -o %o'
        'rsync::/usr/bin/rsync --no-motd -z %u %o'
        'scp::/usr/bin/scp -C %u %o')
......
```
{% endfold %}

#### 然后更新数据源

`sudo pacman -Syy`

## 安装被锁定的问题

**注意：**出现无法锁定database的错误时，在**确认没有安装任务时**运行以下命令删除锁定：

`sudo rm /var/lib/pacman/db.lck`

## 升级系统

`sudo pacman -Syu`

或者

`yaourt -Syu`

## 常见的软件安装

### pacman 基本用法

#### 安装软件

```bash
# 安装或者升级单个软件包，或者一列软件包（包含依赖包），使用如下命令：
sudo pacman -S pkg_name1 pkg_name2 ...

# 安装一个本地包(不从源里下载）：
sudo pacman -U /path/to/package/package_name-version.pkg.tar.xz

# 安装一个远程包（不在 pacman 配置的源里面）：
sudo pacman -U http://www.example.com/repo/example.pkg.tar.xz

# 下载包而不安装它：
sudo pacman -Sw pkg_name
```

#### 删除软件

```bash
# 删除指定安装包，但是保留其全部已安装的依赖关系
sudo pacman -R pkg_name 

# 删除指定软件包，以及没有被其他已安装软件包使用的依赖关系。 
sudo pacman -Rs pkg_name 

# 删除软件包和所有依赖这个软件包的程序:
# 警告: 此操作是递归的，请小心检查，可能会一次删除大量的软件包。
sudo pacman -Rsc pkg_name

# 删除软件包，但是不删除依赖这个软件包的其他程序：
sudo pacman -Rdd pkg_name
```

#### 清空缓存

```bash
# 清除未安装软件包的缓存 
sudo pacman -Sc 
```

#### 查询

```bash
# 在包数据库中查询软件包，查询位置包含了软件包的名字和描述(不指定string，则列出所有已安装的包)：
pacman -Ss string1 string2 ...

# 查询包含某个文件的包名 	
pacman -Fs pkg_name

# 查询远程库中软件包包含的文件：
pacman -Fl pkg_name

# 获取已安装软件包所包含文件的列表：
pacman -Ql pkg_name

# 查询已安装的软件包(不指定string，则列出所有已安装的包)：
pacman -Qs string1 string2 ...

# 显示软件包的详尽的信息：
sudo pacman -Si pkg_name

# 查询本地安装包的详细信息：
sudo pacman -Qi pkg_name
```

#### 同步文件数据库

```bash
# 同步文件数据库:
sudo pacman -Fy
```

#### 升级系统

```bash
# 升级整个系统,这个命令会同步非本地(local)软件仓库并升级系统的软件包：
sudo pacman -Syu

# 升级系统时安装其他软件包：
sudo pacman -Syu pkg_name1 pkg_name2 ...

# 强制 pacman 刷新软件包列表，每次修改镜像之后都应该使用
sudo pacman -Syyu
```

### 安装中文输入法

-   安装小企鹅fcitx：

*fcitx安装后会默认安装了拼音和五笔输入法。*

`sudo pacman -S fcitx fcitx-im fcitx-configtool`

需要修改配置文件 ~/.xprofile，添加如下语句：

```shell
#fcitx
export GTK_IM_MODULE=fcitx	
export QT_IM_MODULE=fcitx	
export XMODIFIERS="@im=fcitx"
```

-   安装其他中文输入法

    搜狗拼音输入法

    `sudo pacman -S fcitx-sogoupinyin`

启动fcitx并设置输入法之后就可以使用中文输入法啦，如果异常请重新登录或者重启！！

### 安装字体

`sudo pacman -S ttf-dejavu wqy-zenhei wqy-microhei  ttf-monaco`

要使用新安装的字体，需要再设置里自行选择。

-   设置——》外观——》字体——》选择默认字体和默认等宽字体

### 安装vim

`sudo pacman -S vim`

#### 超强vim配置

项目地址：https://github.com/elinuxboy/vim-deprecated

使用下面的命令自动安装配置：

`wget -qO- https://raw.githubusercontent.com/elinuxboy/vim-deprecated/master/setup.sh | sh -x`

或者用另一种方式自动安装：

```shell
wget https://raw.githubusercontent.com/elinuxboy/vim-deprecated/master/setup.sh
chmod +x setup.sh
./setup.sh
```

### 安装markdown编辑器

以下只需要使用其中一种或几种。

`yaourt -S typora`（推荐使用）

`sudo pacman -S remarkable`

`yaourt -S haroopad`

`sudo pacman -S retext`

### 安装git

`sudo pacman -S git`

设置个人github信息

`git config --global user.name "github昵称"`

`git config --global user.email "注册邮箱"`

### 安装smartGit

一个Git客户端。archlinux/manjaro的主源里就有它。

`yaout -S smartgit`

### 安装图形化的解压软件

`sudo pacman -S p7zip file-roller unrar`

### 安装bat替代cat

`sudo pacman -S bat`

### 安装护眼软件红移redshift

`sudo pacman -S redshift`

### 安装gnome磁盘管理

`sudo pacman -S gnome-disk-utility`

### 安装截图软件（可编辑）

`yaourt -S hotshots`

**注意**：因为网络问题，这里可能需要对PKGBUILD做一些修改，将http改为https。

### 安装google浏览器

`sudo pacman -S google-chrome`

### 安装uGet

Linux 下最好的下载管理器

`sudo pacman -S uget`

### 安装网易云音乐

`yaourt -S netease-cloud-music`

### 安装osdlyrics（本地音乐播放器显示歌词需要）

`sudo pacman -S osdlyrics`

### 安装WPS-office

`sudo pacman -S wps-office`

### 安装有道词典

有道词典。

`yaourt -S youdao-dict`

### 安装ClamAV

Clam 防病毒软件（命令行）

`sudo pacman -S clamav`

Clam 防病毒软件（客户端）

`sudo pacman -S clamtk`

### 安装sublime-text-3

输入法修复版本

`yaourt -S sublime-text-3-imfix`

*如果默认的拼音输入法还是无法使用，需要安装其他中文输入法。如谷歌拼音/搜狗拼音等。*

### 安装虚拟机

`yaourt -S vmware-workstation`

**注意：**如果出现vmmod找不到的问题，需要安装linux-headers后再一次安装，之后重新登陆后即可。

### 安装QQ

`yaourt -S deepin.com.qq.im`

### 安装Tim

`yaourt -S deepin.com.qq.office`

### 安装微信

微信，公认最好的，是electronic-wechat。

#### 命令直接安装

`yaourt -S electronic-wechat`

#### 源码编译安装

在下载和运行这个项目之前，你需要在电脑上安装 [Git](https://git-scm.com/) 和 [Node.js](https://nodejs.org/en/download/) (来自 [npm](https://www.npmjs.com/))。在命令行中输入:

-   下载仓库

`git clone https://github.com/geeeeeeeeek/electronic-wechat.git`

-   进入源码目录

`cd electronic-wechat`

-   安装, 运行应用

`sudo npm install && sudo npm start`

-   根据你的平台打包应用:

`sudo npm run build:linux`

#### 使用发布版

[开箱即用的稳定版应用](https://github.com/geeeeeeeeek/electronic-wechat/releases)

```bash
tar xvf electronic-wechat-linux-x64.tar.gz
cd electronic-wechat-linux-x64
./electronic-wechat %U
```

可以给他添加快捷方式

### 安装oh my zsh

#### 查看系统是否安装了zsh

`cat /etc/shells `

```shell
# Pathnames of valid login shells.
# See shells(5) for details.

/bin/sh
/bin/bash
/bin/zsh
/usr/bin/zsh
/usr/bin/git-shell
```

-   如果已经安装zsh,则会多出来以下条目

    ```shell
    /bin/zsh
    /usr/bin/zsh
    ```

#### 查看系统当前使用的shell

```shell
$ echo $SHELL
/bin/bash
```

#### 切换shell为zsh

`$ chsh -s /bin/zsh`

如果要切换回去bash：

`chsh -s /bin/bash`

重启生效,如下所示:

{% fold 点击显示/隐藏内容 %} 
```shell
......
This is the Z Shell configuration function for new users,
zsh-newuser-install.
You are seeing this message because you have no zsh startup files
(the files .zshenv, .zprofile, .zshrc, .zlogin in the directory
~).  This function can help you with a few settings that should
make your use of the shell easier.

You can:

(q)  Quit and do nothing.  The function will be run again next time.

(0)  Exit, creating the file ~/.zshrc containing just a comment.
     That will prevent this function being run again.

(1)  Continue to the main menu.

--- Type one of the keys in parentheses --- 0
mjroXfce18% 
```
{% endfold %}

-   查看当前shell

`$ echo $SHELL `

```
/bin/zsh
```

#### 下载安装 oh my zsh

`wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh`

完成后如下所示:

{% fold 点击显示/隐藏内容 %} 
```shell
......
Looking for an existing zsh config...
Found ~/.zshrc. Backing up to ~/.zshrc.pre-oh-my-zsh
Using the Oh My Zsh template file and adding it to ~/.zshrc
         __                                     __   
  ____  / /_     ____ ___  __  __   ____  _____/ /_  
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \ 
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / / 
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/  
                        /____/                       ....is now installed!

Please look over the ~/.zshrc file to select plugins, themes, and options.

p.s. Follow us at https://twitter.com/ohmyzsh.

p.p.s. Get stickers and t-shirts at https://shop.planetargon.com.

mjroXfce18% 
```
{% endfold %}

#### 配置oh my zsh

-   安装autojump自动跳转插件

```shell
sudo pacman -S autojump
echo ". /usr/share/autojump/autojump.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
source .zshrc
```

-   安装zsh-syntax-highlighting语法高亮插件

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
echo "source $ZSH_CUSTOM/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
source .zshrc
```

-   安装zsh-autosuggestions语法历史记录插件

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
echo "source $ZSH_CUSTOM/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
source .zshrc
```

-   安装自动补全插件incr

```shell
cd $ZSH_CUSTOM/plugins
mkdir incr
cd incr
wget http://mimosa-pudica.net/src/incr-0.2.zsh
echo "source $ZSH_CUSTOM/plugins/incr/incr*.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
source .zshrc
```

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111451681-1556416322.png)

详细的.zshrc请参见附录IV。

-   修改主题

修改.zshrc文件

```shell
vim ~.zshrc
```

找到ZSH_THEME=“robbyrussell”，修改为：ZSH_THEME=“ys”；

```shell
......
ZSH_THEME="ys"
......
```

更新配置

```shell
source .zshrc
```

## XFCE图标主题美化

### 安装图标

`yaourt -S numix-circle-icon-theme-git `

`sudo pacman -S papirus-icon-theme `

### 安装主题

`sudo pacman -S arc-gtk-theme `

### 设置

-   主题：设置——》外观——》样式——》arc
-   图标：设置——》外观——》图标——》numix circle

## 优化系统启动速度

Arch Linux 的 systemd-analyze 是个很不错的工具，利用它你可以很直观地观察到系统启动的时间都花到哪儿去了：

`systemd-analyze`

我注意到打开 AHCI 后，内核和用户空间的载入速度明显提高了，总启动时间从约 30 秒缩短到 20 秒，效果非常明显。

用下面这个命令，可以了解到是什么东西启动最慢：

`systemd-analyze blame`

此外，还可以把启动过程绘制成 SVG 图表供你审阅（用 GNOME 的图片预览或 Chrome 浏览器都可以打开），这个图表中你还可以观察到是否有启动慢的组件影响到了依赖它的组件的启动：

`systemd-analyze plot > plot.svg`

## 将npm的注册表源设置为国内的镜像

国内用户，建议将npm的注册表源设置为国内的镜像，可以大幅提升安装速度。

-   淘宝npm镜像

>   搜索地址：<http://npm.taobao.org/>

>   registry地址：<http://registry.npm.taobao.org/>

-   cnpmjs镜像

>   搜索地址：<http://cnpmjs.org/>

>   registry地址：<http://r.cnpmjs.org/>

-   临时使用

`npm --registry https://registry.npm.taobao.org install express`

-   持久使用

`npm config set registry https://registry.npm.taobao.org`

-   配置后可通过下面方式来验证是否成功
    `npm config get registry`
    或
    `npm info express`

-   通过cnpm(*可能需要加上sudo*)

    `npm install -g cnpm --registry=https://registry.npm.taobao.org`

-   使用
    `cnpm install express`

我使用的是cnpm.如下图:

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111158407-1723419260.png)

## 问题与解决

### 安装中遇到的问题

-   安装时一直停在“正在加载位置数据”

    解决办法：先把网络连接都断开，再启动安装，等地图位置加载完成后，再联网继续安装。

### 警告：xxx本地比xxx的版本更新

例如，加入archlinuxcn中文社区库后，执行sudo pacman -Syu升级系统后，出现如下问题：

```bash
......
警告：cower：本地 (18-2) 比 extra 的版本更新 (18-1)
警告：inxi：本地 (3.0.29-1) 比 community 的版本更新 (3.0.28-1)
警告：lib32-qt4：本地 (4.8.7-14) 比 multilib 的版本更新 (4.8.7-13)
警告：libxpresent：本地 (1.0.0+3+g9d31d21-1) 比 extra 的版本更新 (1.0.0+2+gdd6771c-1)
警告：package-query：本地 (1.9-3) 比 extra 的版本更新 (1.9-2)
......
```

#### 解决办法

该问题一般出现在：启用了多个镜像（比如同时使用manjaro官方库和archlinuxcn中文社区库），或者刚切换了镜像，然后执行升级系统命令。

该问题可以忽略，因为archlinuxcn中文社区库里面的版本要比manjaro官方库里面的版本更新，升级后本地的版本就是使用archlinuxcn中文社区库里面的最新版本。

例如：

```bash
$ pacman -Ss cower
extra/cower 18-1 [已安装: 18-2]
    A simple AUR agent with a pretentious name
archlinuxcn/cower 18-2 [已安装]
    A simple AUR agent with a pretentious name
```

当然，也可以给软件包降级：

-   使用pacman的临时文件（安装本地包）降级

    如果一个新包刚刚被安装并且没有删除[pacman cache](https://wiki.archlinux.org/index.php/Pacman#Cleaning_the_package_cache),你可以在`/var/cache/pacman/pkg/`中找到较早版本. 安装替换现有的版本.

    [pacman](https://wiki.archlinux.org/index.php/Pacman)会处理依赖包但不会处理依赖库的版本冲突。如果一个其依赖库因该包降级需要降级，你需要手动降级这些包。

    `pacman -U /var/cache/pacman/pkg/package-old_version.pkg.tar.xz`

-   使用远程包（安装远程包）降级

    `pacman -U http://www.example.com/repo/package-old_version.pkg.tar.xz`

### aria2c下载xxx.db.sig出现错误

{% fold 点击显示/隐藏内容 %} 
```shell
# elinuxboy @ mjro18xfce in ~ [7:53:20] 
$ sudo pacman -Sy
[sudo] elinuxboy 的密码：
:: 正在同步软件包数据库...

12/15 07:53:25 [NOTICE] Downloading 1 item(s)

12/15 07:53:26 [NOTICE] 下载已完成：/var/lib/pacman/sync/core.db.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
e48729|OK  |   589KiB/s|/var/lib/pacman/sync/core.db.part

状态标识：
(OK)：下载已完成。

12/15 07:53:26 [NOTICE] Downloading 1 item(s)

12/15 07:53:26 [ERROR] CUID#7 - Download aborted. URI=https://mirrors.ustc.edu.cn/manjaro/stable/core/x86_64/core.db.sig
Exception: [AbstractCommand.cc:351] errorCode=3 URI=https://mirrors.ustc.edu.cn/manjaro/stable/core/x86_64/core.db.sig
  -> [HttpSkipResponseCommand.cc:219] errorCode=3 未找到资源

12/15 07:53:26 [NOTICE] GID 为 3ec1fe753480d611 的下载项未完成：/var/lib/pacman/sync/core.db.sig.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
3ec1fe|ERR |       0B/s|/var/lib/pacman/sync/core.db.sig.part

状态标识：
(ERR)：发生错误。

重新启动aria2，自动继续下载文件
如果发生任何错误，请参阅日志文件。要了解详细信息，请在 help/man 页面中参阅“-l”选项。

12/15 07:53:28 [NOTICE] Downloading 1 item(s)
[#58174d 1.7MiB/1.8MiB(95%) CN:1 DL:1.0MiB]                                    
12/15 07:53:30 [NOTICE] 下载已完成：/var/lib/pacman/sync/extra.db.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
58174d|OK  |   1.0MiB/s|/var/lib/pacman/sync/extra.db.part

状态标识：
(OK)：下载已完成。

12/15 07:53:30 [NOTICE] Downloading 1 item(s)

12/15 07:53:31 [ERROR] CUID#7 - Download aborted. URI=https://mirrors.ustc.edu.cn/manjaro/stable/extra/x86_64/extra.db.sig
Exception: [AbstractCommand.cc:351] errorCode=3 URI=https://mirrors.ustc.edu.cn/manjaro/stable/extra/x86_64/extra.db.sig
  -> [HttpSkipResponseCommand.cc:219] errorCode=3 未找到资源

12/15 07:53:31 [NOTICE] GID 为 5da8892ce4724c98 的下载项未完成：/var/lib/pacman/sync/extra.db.sig.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
5da889|ERR |       0B/s|/var/lib/pacman/sync/extra.db.sig.part

状态标识：
(ERR)：发生错误。

重新启动aria2，自动继续下载文件
如果发生任何错误，请参阅日志文件。要了解详细信息，请在 help/man 页面中参阅“-l”选项。

12/15 07:53:33 [NOTICE] Downloading 1 item(s)
[#d66d80 4.5MiB/5.0MiB(90%) CN:1 DL:0.9MiB]                                    
12/15 07:53:38 [NOTICE] 下载已完成：/var/lib/pacman/sync/community.db.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
d66d80|OK  |   1.0MiB/s|/var/lib/pacman/sync/community.db.part

状态标识：
(OK)：下载已完成。

12/15 07:53:38 [NOTICE] Downloading 1 item(s)

12/15 07:53:38 [ERROR] CUID#7 - Download aborted. URI=https://mirrors.ustc.edu.cn/manjaro/stable/community/x86_64/community.db.sig
Exception: [AbstractCommand.cc:351] errorCode=3 URI=https://mirrors.ustc.edu.cn/manjaro/stable/community/x86_64/community.db.sig
  -> [HttpSkipResponseCommand.cc:219] errorCode=3 未找到资源

12/15 07:53:38 [NOTICE] GID 为 44b66925e8f1286f 的下载项未完成：/var/lib/pacman/sync/community.db.sig.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
44b669|ERR |       0B/s|/var/lib/pacman/sync/community.db.sig.part

状态标识：
(ERR)：发生错误。

重新启动aria2，自动继续下载文件
如果发生任何错误，请参阅日志文件。要了解详细信息，请在 help/man 页面中参阅“-l”选项。

12/15 07:53:40 [NOTICE] Downloading 1 item(s)

12/15 07:53:41 [NOTICE] 下载已完成：/var/lib/pacman/sync/multilib.db.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
a00c29|OK  |   722KiB/s|/var/lib/pacman/sync/multilib.db.part

状态标识：
(OK)：下载已完成。

12/15 07:53:41 [NOTICE] Downloading 1 item(s)

12/15 07:53:41 [ERROR] CUID#7 - Download aborted. URI=https://mirrors.ustc.edu.cn/manjaro/stable/multilib/x86_64/multilib.db.sig
Exception: [AbstractCommand.cc:351] errorCode=3 URI=https://mirrors.ustc.edu.cn/manjaro/stable/multilib/x86_64/multilib.db.sig
  -> [HttpSkipResponseCommand.cc:219] errorCode=3 未找到资源

12/15 07:53:41 [NOTICE] GID 为 96eb7b68d9be8b5d 的下载项未完成：/var/lib/pacman/sync/multilib.db.sig.part

下载结果：
gid   |stat|avg speed  |path/URI
======+====+===========+=======================================================
96eb7b|ERR |       0B/s|/var/lib/pacman/sync/multilib.db.sig.part

状态标识：
(ERR)：发生错误。

重新启动aria2，自动继续下载文件
如果发生任何错误，请参阅日志文件。要了解详细信息，请在 help/man 页面中参阅“-l”选项。
```
{% endfold %}

#### 解决办法

xxx.db.sig 缺失是 database 的签名缺失，这是正常的，现在都只验证 package 的签名，database 都不签名了。

在官方仓库和archlinuxcn中文社区库里已经没有xxx.db.sig文件了，所以当然下载不到。

### 错误：无法注册 ‘archlinuxcn’ 数据库 (数据库已登记)

```bash
......
error: could not register 'archlinuxcn' database (database already registered)
error: could not register 'archlinuxcn' database (database already registered)
error: could not register 'archlinuxcn' database (database already registered)
could not register 'archlinuxcn' database (database already registered)
错误：无法注册 'archlinuxcn' 数据库 (数据库已登记)
错误：无法注册 'archlinuxcn' 数据库 (数据库已登记)
错误：无法注册 'archlinuxcn' 数据库 (数据库已登记)
......
```

该问题一般出现在添加archlinuxcn中文社区库的时候添加错文件了，应该是在这个文件“==/etc/pacman.conf==”后面添加archlinuxcn中文社区库，而不是在这个“/etc/pacman.d/mirrorlist”文件后添加。

![](https://img2018.cnblogs.com/blog/1548353/201812/1548353-20181215111136319-520114191.png)

## 附录I：/etc/pacman.conf

{% fold 点击显示/隐藏内容 %} 
```shell
#
# /etc/pacman.conf
#
# See the pacman.conf(5) manpage for option and repository directives

#
# GENERAL OPTIONS
#
[options]
# The following paths are commented out with their default values listed.
# If you wish to use different paths, uncomment and update the paths.
#RootDir     = /
#DBPath      = /var/lib/pacman/
CacheDir = /var/cache/pacman/pkg/
#LogFile     = /var/log/pacman.log
#GPGDir      = /etc/pacman.d/gnupg/
#HookDir     = /etc/pacman.d/hooks/
HoldPkg      = pacman glibc manjaro-system
# If upgrades are available for these packages they will be asked for first
SyncFirst    = manjaro-system archlinux-keyring manjaro-keyring
#XferCommand = /usr/bin/curl -C - -f %u > %o
#XferCommand = /usr/bin/wget --passive-ftp -c -O %o %u
# aria2c 多线程多链接
#XferCommand = /usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 -d $(dirname %o) -o $(basename %o) %u
#CleanMethod = KeepInstalled
#UseDelta    = 0.7
Architecture = auto
# 下载进度条吃豆子方式
ILoveCandy

# Pacman won't upgrade packages listed in IgnorePkg and members of IgnoreGroup
#IgnorePkg   =
#IgnoreGroup =

#NoUpgrade   =
#NoExtract   =

# Misc options
#UseSyslog
# 彩色输出
Color
#TotalDownload
# We cannot check disk space from within a chroot environment
CheckSpace
# 升级前对比版本
VerbosePkgLists
 
# By default, pacman accepts packages signed by keys that its local keyring
# trusts (see pacman-key and its man page), as well as unsigned packages.
SigLevel    = Required DatabaseOptional
LocalFileSigLevel = Optional
#RemoteFileSigLevel = Required
 
# NOTE: You must run `pacman-key --init` before first using pacman; the local
# keyring can then be populated with the keys of all official Manjaro Linux
# packagers with `pacman-key --populate archlinux manjaro`.
 
#
# REPOSITORIES
#   - can be defined here or included from another file
#   - pacman will search repositories in the order defined here
#   - local/custom mirrors can be added here or in separate files
#   - repositories listed first will take precedence when packages
#     have identical names, regardless of version number
#   - URLs will have $repo replaced by the name of the current repo
#   - URLs will have $arch replaced by the name of the architecture
#
# Repository entries are of the format:
#       [repo-name]
#       Server = ServerName
#       Include = IncludePath
#
# The header [repo-name] is crucial - it must be present and
# uncommented to enable the repo.
#
 
# The testing repositories are disabled by default. To enable, uncomment the
# repo name header and Include lines. You can add preferred servers immediately
# after the header, and they will be used before the default mirrors.
 
[core]
SigLevel = PackageRequired
Include = /etc/pacman.d/mirrorlist
 
[extra]
SigLevel = PackageRequired
Include = /etc/pacman.d/mirrorlist
 
[community]
SigLevel = PackageRequired
Include = /etc/pacman.d/mirrorlist
 
# If you want to run 32 bit applications on your x86_64 system,
# enable the multilib repositories as required here.
 
[multilib]
SigLevel = PackageRequired
Include = /etc/pacman.d/mirrorlist
 
# An example of a custom package repository.  See the pacman manpage for
# tips on creating your own repositories.
#[custom]
#SigLevel = Optional TrustAll
#Server = file:///home/custompkgs
 
# archlinuxcn中文社区库清华大学镜像
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```
{% endfold %}

## 附录II：/etc/makepkg.conf

{% fold 点击显示/隐藏内容 %} 
```shell
#
# /etc/makepkg.conf
#
 
#########################################################################
# SOURCE ACQUISITION
#########################################################################
#
#-- The download utilities that makepkg should use to acquire sources
#  Format: 'protocol::agent'
#DLAGENTS=('file::/usr/bin/curl -gqC - -o %o %u'
#          'ftp::/usr/bin/curl -gqfC - --ftp-pasv --retry 3 --retry-delay 3 -o %o %u'
#          'http::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'https::/usr/bin/curl -gqb "" -fLC - --retry 3 --retry-delay 3 -o %o %u'
#          'rsync::/usr/bin/rsync --no-motd -z %u %o'
#          'scp::/usr/bin/scp -C %u %o')
 
# axel 单线程多链接
#DLAGENTS=('file::/usr/bin/axel -a -n 16 %u -o %o'
#		'ftp::/usr/bin/axel -a -n 16 %u -o %o'
#		'http::/usr/bin/axel -a -n 16 %u -o %o'
#		'https::/usr/bin/axel -a -n 16 %u -o %o'
#		'rsync::/usr/bin/rsync --no-motd -z %u %o'
#		'scp::/usr/bin/scp -C %u %o')
 
# aria2c 多线程多链接
DLAGENTS=('file::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
		'ftp::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
		'http::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
		'https::/usr/bin/aria2c --allow-overwrite=true --log-level=error -l aria2c-error.log -c -m2 -x 8 -s 8 -j 8 %u -o %o'
		'rsync::/usr/bin/rsync --no-motd -z %u %o'
		'scp::/usr/bin/scp -C %u %o')
 
# Other common tools:
# /usr/bin/snarf
# /usr/bin/lftpget -c
# /usr/bin/wget
 
#-- The package required by makepkg to download VCS sources
#  Format: 'protocol::package'
VCSCLIENTS=('bzr::bzr'
            'git::git'
            'hg::mercurial'
            'svn::subversion')
 
#########################################################################
# ARCHITECTURE, COMPILE FLAGS
#########################################################################
#
CARCH="x86_64"
CHOST="x86_64-pc-linux-gnu"
 
#-- Compiler and Linker Flags
# -march (or -mcpu) builds exclusively for an architecture
# -mtune optimizes for an architecture, but builds for whole processor family
CPPFLAGS="-D_FORTIFY_SOURCE=2"
CFLAGS="-march=x86-64 -mtune=generic -O2 -pipe -fstack-protector-strong -fno-plt"
CXXFLAGS="-march=x86-64 -mtune=generic -O2 -pipe -fstack-protector-strong -fno-plt"
LDFLAGS="-Wl,-O1,--sort-common,--as-needed,-z,relro,-z,now"
#-- Make Flags: change this for DistCC/SMP systems
#MAKEFLAGS="-j2"
#-- Debugging flags
DEBUG_CFLAGS="-g -fvar-tracking-assignments"
DEBUG_CXXFLAGS="-g -fvar-tracking-assignments"
 
#########################################################################
# BUILD ENVIRONMENT
#########################################################################
#
# Defaults: BUILDENV=(!distcc color !ccache check !sign)
#  A negated environment option will do the opposite of the comments below.
#
#-- distcc:   Use the Distributed C/C++/ObjC compiler
#-- color:    Colorize output messages
#-- ccache:   Use ccache to cache compilation
#-- check:    Run the check() function if present in the PKGBUILD
#-- sign:     Generate PGP signature file
#
BUILDENV=(!distcc color !ccache check !sign)
#
#-- If using DistCC, your MAKEFLAGS will also need modification. In addition,
#-- specify a space-delimited list of hosts running in the DistCC cluster.
#DISTCC_HOSTS=""
#
#-- Specify a directory for package building.
#BUILDDIR=/tmp/makepkg
 
#########################################################################
# GLOBAL PACKAGE OPTIONS
#   These are default values for the options=() settings
#########################################################################
#
# Default: OPTIONS=(!strip docs libtool staticlibs emptydirs !zipman !purge !debug)
#  A negated option will do the opposite of the comments below.
#
#-- strip:      Strip symbols from binaries/libraries
#-- docs:       Save doc directories specified by DOC_DIRS
#-- libtool:    Leave libtool (.la) files in packages
#-- staticlibs: Leave static library (.a) files in packages
#-- emptydirs:  Leave empty directories in packages
#-- zipman:     Compress manual (man and info) pages in MAN_DIRS with gzip
#-- purge:      Remove files specified by PURGE_TARGETS
#-- debug:      Add debugging flags as specified in DEBUG_* variables
#
OPTIONS=(strip docs !libtool !staticlibs emptydirs zipman purge !debug)
 
#-- File integrity checks to use. Valid: md5, sha1, sha256, sha384, sha512
INTEGRITY_CHECK=(md5)
#-- Options to be used when stripping binaries. See `man strip' for details.
STRIP_BINARIES="--strip-all"
#-- Options to be used when stripping shared libraries. See `man strip' for details.
STRIP_SHARED="--strip-unneeded"
#-- Options to be used when stripping static libraries. See `man strip' for details.
STRIP_STATIC="--strip-debug"
#-- Manual (man and info) directories to compress (if zipman is specified)
MAN_DIRS=({usr{,/local}{,/share},opt/*}/{man,info})
#-- Doc directories to remove (if !docs is specified)
DOC_DIRS=(usr/{,local/}{,share/}{doc,gtk-doc} opt/*/{doc,gtk-doc})
#-- Files to be removed from all packages (if purge is specified)
PURGE_TARGETS=(usr/{,share}/info/dir .packlist *.pod)
#-- Directory to store source code in for debug packages
DBGSRCDIR="/usr/src/debug"
 
#########################################################################
# PACKAGE OUTPUT
#########################################################################
#
# Default: put built package and cached source in build directory
#
#-- Destination: specify a fixed directory where all packages will be placed
#PKGDEST=/home/packages
#-- Source cache: specify a fixed directory where source files will be cached
#SRCDEST=/home/sources
#-- Source packages: specify a fixed directory where all src packages will be placed
#SRCPKGDEST=/home/srcpackages
#-- Log files: specify a fixed directory where all log files will be placed
#LOGDEST=/home/makepkglogs
#-- Packager: name/email of the person or organization building packages
#PACKAGER="John Doe <john@doe.com>"
#-- Specify a key to use for package signing
#GPGKEY=""
 
#########################################################################
# COMPRESSION DEFAULTS
#########################################################################
#
COMPRESSGZ=(gzip -c -f -n)
COMPRESSBZ2=(bzip2 -c -f)
COMPRESSXZ=(xz -c -z -)
COMPRESSLRZ=(lrzip -q)
COMPRESSLZO=(lzop -q)
COMPRESSZ=(compress -c -f)
 
#########################################################################
# EXTENSION DEFAULTS
#########################################################################
#
# WARNING: Do NOT modify these variables unless you know what you are
#          doing.
#
PKGEXT='.pkg.tar.xz'
SRCEXT='.src.tar.gz'
```
{% endfold %}

## 附录III：/etc/pacman.d/mirrorlist

{% fold 点击显示/隐藏内容 %} 
```shell
##
## Manjaro Linux custom mirrorlist
## Generated on 2018-12-15 07:14
##
## Please use 'pacman-mirrors -id' to reset custom mirrorlist
## Please use 'pacman-mirrors -c all' to reset custom mirrorlist
## To remove custom config run  'pacman-mirrors -c all'
##
 
## Country : China
Server = https://mirrors.tuna.tsinghua.edu.cn/manjaro/stable/$repo/$arch
 
## Country : China
#Server = https://mirrors.ustc.edu.cn/manjaro/stable/$repo/$arch
 
## Country : China
#Server = https://mirrors.sjtug.sjtu.edu.cn/manjaro/stable/$repo/$arch
 
## Country : China
#Server = https://mirrors.zju.edu.cn/manjaro/stable/$repo/$arch
```
{% endfold %}

## 附录IV：.zshrc

{% fold 点击显示/隐藏内容 %} 
```shell
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH
 
# Path to your oh-my-zsh installation.
  export ZSH="/home/elinuxboy/.oh-my-zsh"
 
# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="ys"
 
# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )
 
# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"
 
# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"
 
# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"
 
# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13
 
# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"
 
# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"
 
# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"
 
# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"
 
# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"
 
# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"
# 历史命令日期显示格式
HIST_STAMPS="yyyy-mm-dd"
 
# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder
 
# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
# z命令快速跳转目录     x命令解压一切文件         命令行可以直接google  
plugins=(
  git z zsh-autosuggestions extract web-search zsh-syntax-highlighting 
)
 
source $ZSH/oh-my-zsh.sh
 
# User configuration
 
# export MANPATH="/usr/local/man:$MANPATH"
 
# You may need to manually set your language environment
# export LANG=en_US.UTF-8
 
# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi
 
# Compilation flags
# export ARCHFLAGS="-arch x86_64"
 
# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"
 
# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
# autojump自动跳转插件
. /usr/share/autojump/autojump.zsh
 
#自动补全插件
#source ~/.oh-my-zsh/plugins/incr/incr-0.2.zsh
 
# 自动更新的时间间隔，单位是天，这里设置 30 天更新一次
export UPDATE_ZSH_DAYS=1
 
# zsh-syntax-highlighting语法高亮插件
source ${ZSH}/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
 
# 设置 gcc/g++ 别名
alias gcc='gcc -fdiagnostics-color=auto'
alias g++='g++ -fdiagnostics-color=auto'
 
# 设置 git 命令自动补全 ，如：git co+敲两次tab键
#if [ -f ~/.git-completion.bash ]; then
#    . ~/.git-completion.bash
#fi
 
# 加载vgz驱动和utf8支持
alias zhcon='zhcon --utf8'
 
alias cat='bat'
 
# 设置环境变量LFS
#export LFS=/mnt/lfs
```
{% endfold %}