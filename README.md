# sealion

前端框架，用Sea.js做模块加载，用gulp.js构建。

### 框架结构

+ base 基础模块
  - seajs
    - 2.3.0
      - sea.js
  - jquery
    - 2.1.1
      - jquery.min.js
  - bootstrap
    - 3.2.0
      - bootstrap.min.js
      - bootstrap.min.css

+ module 自定义模块
  - encryption
    - rc4.js
    - rsa.js
  - fs
    - walk.js

+ app 业务

  - app1
  	- main.js
  	- style.css
  
  - app2
    - subapp1
      - main.js
      - style.css
    - subapp2
      - main.js
      - style.css
    
- loader.js 框架入口

- gulpfile.js 构建配置

- package.json 包配置

### 资源
- Sea.js  http://seajs.org/docs/
- gulp.js  http://gulpjs.com/
