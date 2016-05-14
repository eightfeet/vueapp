# vue-app项目
> ef

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 组件介绍
### loading
引入

```javascript
import loading from './components/publick/loading.vue'
```

参数

<table>   
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>   
  </thead>   
  <tbody>
    <tr>
      <td>show</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否显示loading
      </td>
    </tr>
    <tr>
      <td>loadersize</td>
      <td>Number</td>
      <td>1</td>
      <td>loading尺寸默认为1rem
      </td>
    </tr>
    <tr>
      <td>top</td>
      <td>Number</td>
      <td>3</td>
      <td>距离页面顶部，默认为3，这样能显示头部（头部高度为3rem）
      </td>
    </tr>
  </tbody>
</table>
  使用
```html
<loading
  :show="authenticating"
  :loadersize="loadersize"
  :top="loadertop">
</loading>
```
### headerbar
引入
```javascript
import headerbar from './components/publick/header.vue'
```
参数
<table>   
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>   
  </thead>   
  <tbody>
    <tr>
      <td>lefticon,righticon</td>
      <td>Boolean</td>
      <td>true</td>
      <td>是否有左，右图标</td>
    </tr>
    <tr>
      <td>lefticonname,righticonname</td>
      <td>String</td>
      <td>true</td>
      <td>左，右图标名称</td>
    </tr>
    <tr>
      <td>handlerlefticon,handlerrighticon</td>
      <td>String</td>
      <td>true</td>
      <td>左，右图标事件</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title</td>
      <td>标题</td>
    </tr>
  </tbody>
</table>
[图标样式列表](./src/othes/vueappfont/demo.html)
