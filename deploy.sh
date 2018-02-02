#!/bin/bash

hexo g
echo '\n***********自动生成静态页面***********'
echo '\n***********启动本地服务器预览***********'
hexo s
proxychains4 hexo d '\n***********部署到github***********'
git add . 
echo '\n***********添加文件完成***********'
git commit -a -m "\n***********脚本自动提交***********"
echo '\n***********正在部署***********'
proxychains4 git push
echo '\n***********部署完成***********'
