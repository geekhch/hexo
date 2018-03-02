---
title: YUV格式对照
date: 2018-03-02 12:00:54
tags: 图像处理
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

## 2.使用arcface编程时查看代码头文件<asvloffscreen.h>下的定义：</br>
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


> 由以上信息可知color space为yuv格式，采样比例为4:2:0，于是查阅[YUV官方文档](http://www.testvid.com/test-tools-and-application/technical-information-listing/107-testvid-pixel-formats),内容如下：

<h2>YCbCr 4:4:4 14 Bit Planar</h2>
<p>FourCC: 444F</p>
<p>DHDR: &nbsp;&nbsp;yuv444_14le</p>
<p>Format: &nbsp;14 bit components in 16 bit container, little endian. &nbsp;Y plane followed by U/Cb and V/Cr planes</p>
<p>Example: &nbsp;T2V005_HighRes (HD)</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<font color="red">换言之，采样比例4:4:4（14bit）相当于14位Y通道加上1x1的U、V通道（_14 bit Y plane followed by 8 bit 1x1 subsampled U and V planes_）。</font>,此时再回过头去看第二点中代码注释，可以找到对应的图像格式了

<h2>YCbCr 4:4:4 12 Bit Planar</h2>
<p>FourCC: 444E</p>
<p>DHDR: &nbsp;&nbsp;yuv444_12le</p>
<p>Format: &nbsp;12 bit components in 16 bit container, little endian. &nbsp;Y plane followed by U/Cb and V/Cr planes</p>
<p>Example: &nbsp;T2V005_HighRes (2K)</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2>YCbCr 4:2:2 12 Bit Planar</h2>
<p>FourCC: 224E</p>
<p>DHDR: &nbsp;&nbsp;yuv422_12le</p>
<p>Format: &nbsp;12 bit components in 16 bit container, little endian. &nbsp;Y plane followed by 2x1 subsampled U/Cb and V/Cr planes</p>
<p>Example: T2V041 (4K)</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2>YCbCr 4:2:2 10 Bit Planar</h2>
<p>FourCC: v210</p>
<p>DHDR: &nbsp;&nbsp;yuv422_10le</p>
<p>Format: &nbsp;10 bit components in 16 bit container, little endian. &nbsp;Y plane followed by 2x1 subsampled U/Cb and V/Cr planes<br>Example: &nbsp;T2V005_HighRes (HD)</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2>YCbCr 4:2:0 8 Bit Planar</h2>
<p>FourCC: &nbsp;I420&nbsp;</p>
<p>DHDR: &nbsp;YUV420</p>
<p>Format: &nbsp;8 bit Y plane followed by 8 bit 2x2 subsampled U/Cb and V/Cr planes.</p>
<p>Example: &nbsp;T2V003 (All)</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>TestVid makes short sample files in each format available, along with simple C/C++ code for reading the frames and extracting the raw YCbCr samples to qualified applicants. To request your free samples and code, please contact <span id="cloak704d287d85b2b9a66bee4ba7bdf41f5e"><a href="mailto:support@drastictech.com?cc=sales">support@drastictech.com</a></span><script type="text/javascript">
				document.getElementById('cloak704d287d85b2b9a66bee4ba7bdf41f5e').innerHTML = '';
				var prefix = '&#109;a' + 'i&#108;' + '&#116;o';
				var path = 'hr' + 'ef' + '=';
				var addy704d287d85b2b9a66bee4ba7bdf41f5e = 's&#117;pp&#111;rt' + '&#64;';
				addy704d287d85b2b9a66bee4ba7bdf41f5e = addy704d287d85b2b9a66bee4ba7bdf41f5e + 'dr&#97;st&#105;ct&#101;ch' + '&#46;' + 'c&#111;m?cc=s&#97;l&#101;s';
				var addy_text704d287d85b2b9a66bee4ba7bdf41f5e = 's&#117;pp&#111;rt' + '&#64;' + 'dr&#97;st&#105;ct&#101;ch' + '&#46;' + 'c&#111;m';document.getElementById('cloak704d287d85b2b9a66bee4ba7bdf41f5e').innerHTML += '<a ' + path + '\'' + prefix + ':' + addy704d287d85b2b9a66bee4ba7bdf41f5e + '\'>'+addy_text704d287d85b2b9a66bee4ba7bdf41f5e+'<\/a>';
		</script>.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>Output TestVid Formats</h1>
<h2>YCbCr 4:2:2 8 Bit Interleaved (UYVY, yuv2)</h2>
<p>FourCC: UYVY (avi), yuv2 (mov)</p>
<p>DHDR: &nbsp;&nbsp;</p>
<p>Format: &nbsp;</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>Byte Order:</p>
<table>
<tbody>
<tr>
<td>U/Cb&nbsp;</td>
<td>Y0&nbsp;</td>
<td>V/Cr&nbsp;</td>
<td>Y1&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2>YCrCb 4:2:2 8 Bit Interleaved (YUY2)</h2>
<p>FourCC: YUY2 (avi)</p>
<p>DHDR: &nbsp;&nbsp;</p>
<p>Format: &nbsp;</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>Byte Order:</p>
<table>
<tbody>
<tr>
<td>Y0&nbsp;</td>
<td><span style="color: #000000;">U/Cb</span>&nbsp;</td>
<td>Y1&nbsp;</td>
<td><span style="color: #000000;">V/Cr</span>&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2>YCbCr 4:2:2 10 Bit Interleaved (v210)</h2>
<p>FourCC: v210 (mov)</p>
<p>DHDR: &nbsp;&nbsp;</p>
<p>Format: &nbsp;Little endian</p>
<p>Byte Order:</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Horizontal</td>
<td>Vertical</td>
</tr>
<tr>
<td>Y Sample Period</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>U/Cb Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>V/Cr Sample Period</td>
<td>2</td>
<td>1</td>
</tr>
</tbody>
</table>
