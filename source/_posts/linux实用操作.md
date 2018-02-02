---
title: linux实用操作积累
date: 2018-01-26 02:38:07
tags:
- Linux
- Shell
description: 日常更新linux下比较实用的指令
---

---

### shell脚本
>由多个linux指令集成在一个命令文件中

1. 脚本执行命令：`./shellname.sh`
1. 文件理论上可以使用任何后缀名，但shell脚本规范为.sh后缀
1. 可以使用任何编辑器编辑
1. 脚本以`#!/bin/bash`开头，表示使用/bin目录下的bash程序来解释执行脚本
1. 编写好后需要使用`chmod +x filename`给相应脚本文件执行权限，否则无法使用常规命令执行脚本

>示例

```sh
#！/bin/bash

while [ $x -ne 1000 ]
	do
		echo "这是第$x秒,1000秒时结束计数！";
		x=$(($x+1)) #这样才不会被理解为字符串
		sleep 1s  #延迟1s
	done
```

---

### 查看文件夹大小

>`du -d 1 -h` :查看深度为1的文件夹大小

---

### 统计命令 `wc`
```
Usage: wc [选项] [输入流文件]
Count lines, words, and bytes for each FILE (or stdin)

	-c	Count bytes
	-l	Count newlines
	-w	Count words
	-L	Print longest line length
```

---

### 管道命令
>`命令1 | 命令2` ：把命令1的输出作为命令2的输入。

1. 例如opkg list `*zh*| grep luci | grep base`,这个命令使用了通配符*和两个管道命令，从而显示出opkg安装列表中同时包含zh、luci、base
三个子串的软件包。
2. `ls -al | wc -l` 统计当前文件夹下文件个数并输出

---

### 文件查找
>#### find命令    

+ find [路径] [表达式选项] [动作表达式]
+ 例如：`find /home 3.jpg` *(动作表达默认为print)*
