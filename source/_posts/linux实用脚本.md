---
layout: pages
title: linux实用脚本
date: 2018-02-02 15:37:53
tags:
- Linux
- Shell
description: 使用shell脚本操作数据库</br>批量修改文件后缀名</br>
---

---
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
