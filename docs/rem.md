### rem布局
* 把设计图100等份切割
```javascript

// 根元素字体大小
document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';


// 设计图宽度
$ue-width: 750px
$el-width: 50px

=>

最终rem尺寸：50 / 750 * 100 = 6.67rem
```

* jd实验室rem方案
```javascript
!function(){
    // 设置最大宽度750
    var maxWidth=750;
    
    // 插入一个id为o2HtmlFontSize的style标签
    document.write('<style id="o2HtmlFontSize"></style>');
    
    // 定义一个 o2_resize 的函数
    var o2_resize = function(){
        var cw,ch;
        
        if(document && document.documentElement){
            // 当前页面可视宽度、高度
            cw = document.documentElement.clientWidth,
            ch = document.documentElement.clientHeight;
        }
        
        // 判断可视宽高是否存在 
        if(!cw || !ch){
            if(window.localStorage["o2-cw"] && window.localStorage["o2-ch"]){
                cw = parseInt(window.localStorage["o2-cw"]),
                ch = parseInt(window.localStorage["o2-ch"]);
            }else{
                // 定时检查
                chk_cw();
                // 出错了
                return;
            }
        }
        
        // 由ip6 weChat
        var zoom = maxWidth && maxWidth < cw ? maxWidth / 375 : cw / 375,
            zoomY= ch / 603;
        
        // 缓存到localStorage
        window.localStorage["o2-cw"] = cw,
        window.localStorage["o2-ch"] = ch;
        
        // 保证ip6 wechat的显示比率
        // zoom = Math.min(zoom, zoomY);
        
        window.zoom = window.o2Zoom = zoom;
        
        document.getElementById("o2HtmlFontSize").innerHTML = 'html{font-size:'+(zoom*20)+'px;}.o2-zoom,.zoom{zoom:'+(zoom/2)+';}.o2-scale{-webkit-transform: scale('+zoom/2+'); transform: scale('+zoom/2+');} .sq_sns_pic_item,.sq_sns_picmod_erea_img{-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scale('+zoom/2+');transform: scale('+zoom/2+');}';
    },
    
    siv,
    chk_cw = function(){
        // 已经存在定时器返回
        if (siv)
            return;
        
        // 定时检查，成功则关闭定时器并回收变量
        siv = setInterval(function(){
            document && document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight && (o2_resize(), clearInterval(siv), siv = undefined);
        }, 100);
    };
    
    // 立即初始化
    o2_resize();
    
    // 监听横竖屏
    window.addEventListener("resize", o2_resize);
}();
```