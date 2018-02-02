#!/bin/bash

echo -e "\n***********自动生成静态页面***********\n"
hexo g
echo -e "\n***********启动本地服务器预览***********\n"
hexo s
echo -e  "\n***********准备部署到github***********\n"
proxychains4 hexo d
echo -e  "\n***********部署完成，开始同步项目到github***********\n"
git add . 
echo -e "\n***********添加文件完成***********\n"
git commit -a -m 
echo -e "\n***********自动commit完成，正在push***********\n"
proxychains4 git push
echo -e "\n***********OK！***********\n"