# 公匙 => linux
[ssh无密登录](https://www.linuxdashen.com/ssh-key%EF%BC%9A%E4%B8%A4%E4%B8%AA%E7%AE%80%E5%8D%95%E6%AD%A5%E9%AA%A4%E5%AE%9E%E7%8E%B0ssh%E6%97%A0%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95)
> ssh-copy-id username@remote-server


# linux命令
```
# 查看系统版本
uname -a
cat /etc/redhat-release
cat /proc/version
lsb_release -a

# 新建用户，密码
adduser `username`
passwd  `password`


# 修改文件内容
# 解决ssh长时连接 /etc/ssh/sshd_config
# sed -i "..." file_name
sed -i "s/#ClientAliveInterval 0/ClientAliveInterval 60/g" sshd_config

# 输出文件内容
grep ClientAlive sshd_config

# 比较配置文件差异
diff sshd_config sshd_config.bak


# 查看某个服务是否启动，执行：
ps -aux|grep 服务名

# 关闭防火墙、关闭selinux
service iptables stop
setenforce 0


# https://blog.csdn.net/qq_24232123/article/details/79781527
netstat -nltp #查看启动了哪些端口

tail -100f /APP/web/logs/log.log #实时查看某个服务的日志

kill -9 PID #关掉某个进程

systemctl start firewalld #启动防火墙
firewall-cmd --zone=public --add-port=36000/tcp --permanent #防火墙添加端口
/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT 开启centos端口


/etc/rc.local #系统启动脚本

service sshd reload #重新加载ssd配置，让配置生效
service sshd restart #重启ssh


chkconfig docker on #随机启动docker程序
```

## centos系统
```
# 添加nginx库
yum install epel-release
yum install nginx
```

## nvm安装
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

## 文件属性
```
r:read就是读权限     --数字4表示
w:write就是写权限    --数字2表示
x:excute就是执行权限 --数字1表示

读、写、运行三项权限可以用数字表示，就是r=4,w=2,x=1。所以，-rw-r--r--用数字表示成644。
这里总共会有10个“-”，第一个表示文件类型，如该文件是文件(-表示)，文件夹(d表示),连接文件(l表示)，后面9个按照三个一组分。
如:rwxrwx--- 770
表示此文件(文件夹)的拥有着和同组用户有读写及执行权限，其他用户组没任何权限。
也就是前面三个表示所有者权限，中间三个表示同组用户权限，最后一组表示其他用户权限。
注意：以上的其他用户，不包括root这个super user。
```

# 查看linux用户文件配置
[root@centos65 ~]# cat /etc/passwd
