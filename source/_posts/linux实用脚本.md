---
layout: pages
title: linux实用脚本
date: 2018-02-02 15:37:53
tags:
- Linux
- Shell
description: 使用shell脚本操作数据库</br>
---

---
### 使用shell脚本操作数据库
>脚本代码

```sh
#! /bin/bash

mysql -uroot -p123 -e "
show databases;
use MQTT;
show tables;
show columns from sht31;
quit;
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
