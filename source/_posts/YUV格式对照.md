---
layout: pages
title: ArcFace图像YUV格式对照
date: 2018-03-02 12:00:54
tags: 图像处理
description: 在使用ArcFace人脸识别时找到对应图像格式的方法
---

## 1.Linux下使用`mediainfo filename`查看图像信息
```shell
hch@hch-PC:~/Desktop/arcface/ArcFace/detection/inc$ mediainfo *.jpeg
General
Complete name                            : hz.jpeg
Format                                   : JPEG
File size                                : 124 KiB

Image
Format                                   : JPEG
Width                                    : 1 200 pixels
Height                                   : 800 pixels
Color space                              : YUV    #色彩格式
Chroma subsampling                       : 4:2:0   #采样比例
Bit depth                                : 8 bits
Compression mode                         : Lossy
Stream size                              : 124 KiB (100%)
```

## 2.使用arcface编程时查看代码头文件`<asvloffscreen.h>`下的定义：
```c++
/*8 bit Y plane followed by 8 bit 2x2 subsampled U and V planes*/
#define		ASVL_PAF_I420				0x601
/*8 bit Y plane followed by 8 bit 1x2 subsampled U and V planes*/
#define		ASVL_PAF_I422V				0x602
/*8 bit Y plane followed by 8 bit 2x1 subsampled U and V planes*/
#define		ASVL_PAF_I422H				0x603
/*8 bit Y plane followed by 8 bit U and V planes*/
#define		ASVL_PAF_I444				0x604
/*8 bit Y plane followed by 8 bit 2x2 subsampled V and U planes*/
#define		ASVL_PAF_YV12				0x605
/*8 bit Y plane followed by 8 bit 1x2 subsampled V and U planes*/
#define		ASVL_PAF_YV16V				0x606
/*8 bit Y plane followed by 8 bit 2x1 subsampled V and U planes*/
```

## 3.分析图像色彩格式


由以上信息可知color space为yuv格式，采样比例为4:2:0，于是查阅[YUV官方文档](http://www.testvid.com/test-tools-and-application/technical-information-listing/107-testvid-pixel-formats),以` 4:2:2 12 Bit `举例，官方文档部分内容如下：

### YCbCr 4:2:2 12 Bit Planar
FourCC: 224E</br>
DHDR:   yuv422_12le</br>
Format:  12 bit components in 16 bit container, little endian.  Y plane followed by 2x1 subsampled U/Cb and V/Cr planes</br>
Example: T2V041 (4K)</br>

||Horizontal|Vertical|
|:-|:-:|:-:|
|Y Sample Period|1|1|
|U/Cb Sample Period	|2|1|
|V/Cr Sample Period|2|1|
<font color="red">换言之，采样比例4:4:4（14bit）相当于12位Y通道加上2x1的U、V通道（_12 bit Y plane followed by 8 bit 2x1 subsampled U and V planes_）。</font>,此时再回过头去看第二点中代码注释，可以找到对应的图像格式了
