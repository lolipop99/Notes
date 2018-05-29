# 获取ssh key
> pbcopy < ~/.ssh/id_rsa.pub

# gitlab
[资料查询](https://github.com/jaywcjlove/handbook/blob/master/CentOS/CentOS7%E5%AE%89%E8%A3%85%E7%BB%B4%E6%8A%A4Gitlab.md#%E5%8D%B8%E8%BD%BD)
[安装教程](https://www.2cto.com/net/201701/588343.html)
[docker安装教程](http://www.bubuko.com/infodetail-2536599.html?yyue=a21bo.50862.201879,http://blog.gezhiqiang.com/2017/03/01/gitlab-ce-install/)


# 卸载 sudo gitlab-ctl uninstall
 

sudo EXTERNAL_URL="http://git.digitalgd.com.cn/" yum -y install gitlab-ee


# 安装步骤
* [下载相关版本包：el7 => centos7](https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-8.14.0-ce.0.el7.x86_64.rpm)
* rpm执行安装：rpm -ivh gitlab-ce-8.8.5-ce.1.el6.x86_64.rpm
* docker安装：
docker pull gitlab/gitlab-ce:8.14.0-ce.0
sudo docker run --detach \
    --hostname git.digitalgd.com.cn \
    --publish 445:443 --publish 465:465 --publish 10080:80 --publish 10086:22 \
    --name gitlab \
    --restart always \
    --volume /docker/gitlab/config:/etc/gitlab \
    --volume /docker/gitlab/logs:/var/log/gitlab \
    --volume /docker/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce:8.14.0-ce.0


# 常见命令
```
gitlab-ctl reconfigure #重置配置

gitlab-ctl restart #重启服务

gitlab-ctl status #查看应用状态

gitlab-ctl tail #查看所有日志

gitlab-ctl tail nginx/gitlab_access.log #查看nginx访问日志


gitlab-rake gitlab:backup:create #备份

crontab -e #自动备份
```

# 常见问题总结
* nginx端口没转发，需重新设置
* nginx、gitlab-ctl status服务没问题，有可能是`防火墙端口`、`服务器端口限制`等问题
* 修改内部ssh端口限制[gitlab_shell_ssh_port](https://www.cnblogs.com/xuezhigu/p/6555895.html)
* [git clone报ssh ip changed](https://blog.csdn.net/wangjunjun2008/article/details/37870849)


# gitlab设置
1. [配置限制注册邮箱](https://www.zhihu.com/question/263706388)
2. 关闭注册窗口，用管理员账号后台设置`sign-up`
3. [测试邮箱是否成功](https://www.cnblogs.com/wanglan/p/8759356.html)
> gitlab-rails console
> Notify.test_email('zql@digitalgd.com.cn', 'Message Subject', 'Message Body').deliver_now