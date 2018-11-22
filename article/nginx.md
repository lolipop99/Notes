# nginx
```
# 关闭nginx版本号，在nginx.conf => http配置
server_tokens  off

which nginx #查看当前机器nginx位置

# 创建新nginx config
# 新建一个文件夹sites-enabled
vi /etc/nginx/nginx.conf
include /etc/nginx/sites-enabled/*;


sudo service nginx restart #重启

kill -9 nginx
```


# 配置一个应用池
```
upstream gitlab_pool{
    server 127.0.0.1:10080;
}

upstream gogs_pool{
    server 127.0.0.1:3000;
}


server {
    listen       80;
    server_name  gitlab.xxx.com;
    access_log /var/log/httpd/gitlab-access.log;
    error_log /var/log/httpd/gitlab-error.log;
    
    #将所有请求转发给demo_pool池的应用处理
    location / {
        proxy_pass http://gitlab_pool;
    }
}

server {
    listen       80;
    server_name  git.xxx.com;
    access_log /var/log/httpd/gogs-access.log;
    error_log /var/log/httpd/gogs-error.log;
    
    location / {
        proxy_pass http://gogs_pool;
    }
}
```
