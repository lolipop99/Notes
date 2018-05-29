[docker安装gogs](https://www.imooc.com/article/18794?block_id=tuijian_wz)

# gogs配置
custom/conf/app.ini
```
APP_NAME = Gogs: Go Git Service
RUN_USER = xxxxxx                //gogs运行使用的用户名
RUN_MODE = prod

[database]                                  //gogs数据库相关配置，在安装时候可以选择，安装后请勿修改
DB_TYPE  = sqlite3
HOST     = 127.0.0.1:3306
NAME     = gogs
USER     = root
PASSWD   =
SSL_MODE = disable
PATH     = /home/xxxxxx/gogs-database/gogs.db

[repository]                                //代码仓库位置
ROOT = /home/xxxxxx/gogs-repositories

[server]                                       //对外服务器地址，如果绑定域名此处为域名
DOMAIN       = xxx.xxx.xxx.xxx
HTTP_PORT    = 3000
ROOT_URL     = http://xxx.xxx.xxx.xxx:3000/
DISABLE_SSH  = true
SSH_PORT     = 22
OFFLINE_MODE = true

[mailer]                                    //邮件设置。这里服务器位于内网，所以此项没有启用
ENABLED = false

[service]                                    //网站设置，是否启用邮件提醒，开启注册，验证码等
REGISTER_EMAIL_CONFIRM = false
ENABLE_NOTIFY_MAIL     = false
DISABLE_REGISTRATION   = false
ENABLE_CAPTCHA         = true
REQUIRE_SIGNIN_VIEW    = false

[picture]                                    //是否使用gravatar头像
DISABLE_GRAVATAR = true

[session]
PROVIDER = file

[log]
MODE      = file
LEVEL     = Info
ROOT_PATH = /home/xxxxxx/gogs/log

[security]
INSTALL_LOCK = true
SECRET_KEY   = ***************
```

# 常见gogs命令
```
# 启动、停止服务
sudo systemctl start gogs
sudo systemctl stop gogs

# 查看运行状态
sudo systemctl status gogs -l


# gogs无法开机启动
# 按照常规的方式添加脚本到 “/etc/init.d/”下竟然没有开机启动。在网上发现其他方式可以实现，主要是修改"/etc/rc.local"文件，在最后一行添加以下内容
# [cpp] view plain copy
/bin/su - git -c "/usr/bin/nohup /home/soft/gogs/gogs web"  
```