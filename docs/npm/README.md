---
sidebarDepth: 2
sidebar: auto
---

# NPM

## npm是什么

## 搭建私服npm
### 1.安装 Nexus
***
 [详细教程](https://www.cnblogs.com/grimm/p/11404862.html)
 
    $ docker run -d --name nexus3 --restart=always 
        -p 8081:8081 
        -p 8082:8082 
        -v nexus-data:/nexus-data 
        sonatype/nexus3
    Unable to find image 'sonatype/nexus3:latest' locally
    latest: Pulling from sonatype/nexus3
    c65691897a4d: Pull complete
    641d7cc5cbc4: Pull complete
    c508b13320cd: Pull complete
    79e3bf9d3132: Pull complete
    Digest: sha256:2c33632ccd8f8c5f9023a3d7f5f541e271833e402219f8c5a83a29d1721457ca
    Status: Downloaded newer image for sonatype/nexus3:latest
    f637e039214978f8aac41e621e51588bd8cd8438055498c4060fbaf87799e64f
###2.创建npm仓
***
打开`设置 -> repositories`页面，点击``
## 


