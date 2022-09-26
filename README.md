# frontend-www
 Vue 

### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^8.11.3,

## Developing
1. Run `npm install` ||  `npm i` 
2. Run `npm run serve` 

## Build 
- develop: `npm run serve` 
- product: `npm run build`

## 测试 主机名：dfe-web-uhk-tb10 IP：10.101.3.214
本地打包：
```
npm run build && tar -cf dist.tar dist 
```
上传服务器后改变位置：
```
mv /tmp/dist.tar /data/web/frontend_tb/www
```
解压：
```
rm -rf dist && tar -xf dist.tar
```
## 上线
本地打包：
```
npm run build && tar -cf dist.tar dist 
```
上传服务器后改变位置：
```
mv /tmp/dist.tar /data/web/frontend_tb/www
```
解压：
```
rm -rf dist && tar -xf dist.tar
```
