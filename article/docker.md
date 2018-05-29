[docker安装](https://yq.aliyun.com/articles/110806?spm=a2c4e.11153959.blogcont29941.13.520269d6eYnCuM)


# docker 磁盘映射时访问时出现Permission denied
  本人系统是centos，后经百度寻找资料发现，原来是centos中的selinux作祟。 
解决方法有两个： 
0. 查看getenforce
1. selinux模式为permissive模式 setenforce 0 
2. 容器启动，添加–privileged=true


# docker常用命令
```
docker ps #列出容器

docker ps -a
docker ps -as #列出所有创建容器

docker exec -t gitlab gitlab-ctl stop #执行容器应用命令


docker exec -it gitlab bash #进入容器环境

docker attach container-id #进入容器环境
```
