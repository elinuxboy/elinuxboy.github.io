---
title: 基于Hexo框架Next主题的个人博客（文章内音乐播放和视频播放）
date: 2018-12-26 08:42:13
tags:
- Hexo
- Blog
- Next
- 文章内音乐播放
- 文章内视频播放
categories:
- Blog
- Hexo
- Next
keywords:
- Blog
- Hexo
- Next
- 文章内音乐播放
- 文章内视频播放
description:
- Blog
- Hexo
- Next
- 文章内音乐播放
- 文章内视频播放
---

效果预览：

文章内添加音乐播放器：

<!-- 文章内添加音乐播放器进阶示例 -->
{% meting "60198" "netease" "playlist" "mutex:true" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}



文章内使用视频：

<!-- 视频使用示例 -->
{% dplayer "url=https://zhyong-cn-file.oss-cn-shanghai.aliyuncs.com/media%2F%E5%86%AF%E6%8F%90%E8%8E%AB%E3%80%8A%E7%BA%A2%E6%98%AD%E6%84%BF%E3%80%8B%5B%E8%BD%AF%E5%AD%97%E5%B9%95%5D.mp4" “api=https://api.prprpr.me/dplayer/“ “loop=yes” “theme=#FADFA3” “autoplay=false” %}

# 音乐播放器插件

一款好用的音乐播放器插件，通过对[Meting API](https://github.com/metowolf/Meting)的引用，播放器将支持对于 `QQ`音乐、网易云音乐、虾米、酷狗、百度等平台的音乐播放。

`github`项目地址：https://github.com/MoePlayer/hexo-tag-aplayer

官方文档：https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md

安装：`npm install --save hexo-tag-aplayer`

在站点配置文件里添加如下的内容：

```yaml
# 文章内音乐播放器 不能在自定义配置文件里添加，只能在站点配置文件里添加
aplayer:
  meting: true
```

使用示例：

```
<!-- 简单示例 (id, server, type)  -->
{% meting "60198" "netease" "playlist" %}

<!-- 进阶示例 -->
{% meting "60198" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}
```

有关选项表如下：

| 选项          | 默认值     | 描述                                                        |
| ------------- | ---------- | ----------------------------------------------------------- |
| id            | **必须值** | 歌曲 id / 播放列表 id / 相册 id / 搜索关键字                |
| server        | **必须值** | 音乐平台: `netease`, `tencent`, `kugou`, `xiami`, `baidu`   |
| type          | **必须值** | `song`, `playlist`, `album`, `search`, `artist`             |
| fixed         | `false`    | 开启固定模式                                                |
| mini          | `false`    | 开启迷你模式                                                |
| loop          | `all`      | 列表循环模式：`all`, `one`,`none`                           |
| order         | `list`     | 列表播放模式： `list`, `random`                             |
| volume        | 0.7        | 播放器音量                                                  |
| lrctype       | 0          | 歌词格式类型                                                |
| listfolded    | `false`    | 指定音乐播放列表是否折叠                                    |
| storagename   | `metingjs` | LocalStorage 中存储播放器设定的键名                         |
| autoplay      | `true`     | 自动播放，移动端浏览器暂时不支持此功能                      |
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

# 视频播放插件

`Embed dplayer in Hexo posts/pages`

`GitHub`项目地址：<https://github.com/MoePlayer/hexo-tag-dplayer>

安装：`npm install hexo-tag-dplayer --save`

使用：在文章内调用`{% dplayer key=value ... %}`

参考：https://github.com/MoePlayer/hexo-tag-dplayer/blob/master/README.md#usage

