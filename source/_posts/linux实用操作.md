title: linux实用操作积累
tags:
  - Linux
  - Shell
description: 日常更新linux下比较实用的指令
categories: 猿笔记
date: 2018-01-26 02:38:07
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

### Bash字符串处理
```sh
#基于Pattern Matching的子串替换
${STR/$OLD/$NEW}
#替换第一个。
${STR//$OLD/$NEW}
#替换所有。
${STR/#$OLD/$NEW}
#替换开头。如果STR以OLD串开头，则替换。
${STR/%$OLD/$NEW}
#替换结尾。如果STR以OLD串结尾，则替换。

[user@laptop ~]# STR=”Hello World”
[user@laptop ~]# echo ${STR/o/O}
HellO World
[user@laptop ~]# echo ${STR//o/O}
HellO WOrld
[user@laptop ~]# STR=”Hello World”
[user@laptop ~]# echo ${STR/#He/he}
hello World
[user@laptop ~]# echo ${STR/#o/he}
Hello World
[user@laptop ~]# echo ${STR/%He/he}
Hello World
[user@laptop ~]# echo ${STR/%ld/lD}
Hello WorlD

#注意：不能使用正则表达式，只能使用?*的Shell扩展。只能用shell通配符如 * ?  [list] [!list] [a-z]。
#如果被替换串包含/字符，那么要转义，写成\/。
```

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

### 使用shell脚本操作数据库
>脚本代码:显示数据库、数据表、属性

```sh
#! /bin/bash

mysql -uroot -p123 -e "
show databases;
use MQTT;
show tables;
show columns from sht31;
"
```
>效果

```
geek@geek-PC:~/hexo$ ../code/sqlopt.sh
mysql: [Warning] Using a password on the command line interface can be insecure.
+--------------------+
| Database           |
+--------------------+
| information_schema |
| MQTT               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
+----------------+
| Tables_in_MQTT |
+----------------+
| sht31          |
+----------------+
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| sht_time | datetime    | YES  |     | NULL    |       |
| sht_temp | smallint(6) | YES  |     | NULL    |       |
| sht_hum  | smallint(6) | YES  |     | NULL    |       |
| id       | int(11)     | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
ERROR 1064 (42000) at line 6: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'quit' at line 1

```

---

### 批量修改文件后缀名
>运行命令：`./scriptName  [原后缀] [新后缀]`

```sh
#!/bin/bash

for filename in `ls ./ |grep $1 ` #筛选出需要修改的文件
    do
        echo "原文件名：$filename"
        newname=${filename/%$1/$2}
        echo "新文件名：$newname"
        mv $filename $newname
    done
```

---

### 批量修改图片分辨率
由于体育课要提交大量照片，源图片太大需要压缩一下。参考上面批量修改文件名的脚本可以轻松得到此效果

```sh
#!/bin/bash

for filename in `ls ./ |grep $1 ` #筛选出需要修改的文件
    do
        echo "文件名：$filename"
        convert $filename -resize 1080x440 $filename
    done

```

### scp发送文件到服务器
```sh
scp -P 1022 '/home/hch/Downloads/libmosquitto-nossl_1.4.14-1_mips_24kc.ipk' root@192.168.199.1:/tmp
```