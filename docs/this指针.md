### call、apply、bind

### 闭包
```javascript
for (var i = 0; i < 10; i++) {
    (function(i){
        setTimeout(function(){
            console.log(new Date() + '：' + i)
        }, 1000)
    })(i);
}
```