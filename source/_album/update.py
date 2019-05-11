import os,json,imghdr

data = {}
folders = os.listdir('images') #文件夹名为相册名

for name in folders:
    folder = os.path.join('images',name)
    if not os.path.isdir(folder):
        continue
    data[name] = []
    for filename in os.listdir(folder):
        file_n = os.path.join('images', name, filename)
        if(imghdr.what(file_n)):
            data[name].append(file_n)

# print(data)
#生成主页相册文件夹和封面
index_data = {}
for k in data.keys():
    if len(data[k])>0:
        index_data[k] = data[k]
with open('indexData.js','w',encoding='utf8') as f:
    f.write("data = ")
    f.write(str(index_data))

# #生成相册内的文件
# for name in folders:
#     folder = os.path.join('images', name)
#     if not os.path.isdir(folder):
#         continue
#     with open(os.path.join(folder,'singleDate.js'),'w',encoding='utf8') as f:
#         f.write('data = ')
#         f.write(str([f for f in os.listdir(folder)
#                      if imghdr.what(os.path.join(folder, f))]))
    
#     # 复制single页面到相册文件夹下
#     with open('images/single.html','rb') as fr:
#         with open('single%s.html'%name,'wb') as to:
#             to.write(fr.read())
