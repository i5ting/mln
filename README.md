# mln

主旨：通过软连接来复用node的模块，避免各种乱七八糟的安装，提高安装速度

- 遍历node_modules下的所有依赖模块
- 获取路径
- 在当前目录创建软链接

目前没有很多时间做，欢迎志愿者联系我

shiren1118@126.com 


示例：


```
bluebird 2.9.26
chai
    - assertion-error
    - deep-eql
ioredis
    - bluebird 2.9.25
    - debug
        - ms
    - flexbuffer
    - lodash
mocha
    - commander 2.3.0
    - debug
        - ms
    - diff
    - escape-string-regexp
    - glob
        - graceful-fs
        - inherits
        - minimatch
            - lru-cache
            - sigmund
    - growl
    - jade
        - commander 0.6.1
        - mkdirp 0.3.0
    - mkdirp 0.0.8
        - minimist
    - supports-color
```

处理方式

- 如果不重复，直接建立软链接
- 如果重复，copy并rename为xxx@0.x.y
