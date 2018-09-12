# [Git commit message和工作流规范](https://ivweb.io/topic/58ba702bdb35a9135d42f83d)

# git cherry-pick
> 解决只合并某一次commit id
```
git cherry-pick <commit id>
```

# git merge和git rebase
> rebase：合并状态树交叉
> merge：合并会产生一个新commit
```
git rebase origin   #rebase到orgin
git rebase --continue   #解决rebase冲突后继续rebase
git rebase --abort  #回退到rebase开始前状态
```
