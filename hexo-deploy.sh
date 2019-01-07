#!/bin/bash
# 
#鸿
#自动预览、部署博客、并将项目同步到github->hexo
#

# exec ssh-agent bash
# ssh-add ~/ubuntu.rsa
echo -e "\n***********自动生成静态页面***********\n"
hexo g
echo -e  "\n***********准备部署到github***********\n"
hexo d
echo -e  "\n***********部署完成，开始同步项目到github***********\n"
git add .
echo -e "\n***********添加文件完成***********\n"
git commit -a -m "脚本自动提交--$USER"
echo -e "\n***********自动commit完成，正在push***********\n"
git push #git@github.com:geekhch/hexo.git
echo -e "\n***********OK！***********\n"
