---
sidebarDepth: 2
sidebar: auto
---

# ES6 Set使用
## Set集合的特点
* Set存储的值唯一且不重复，可以用于去重
* Set没有键，因此keys/values都将返回相同的结果（一个setIterator,迭代器对象），可以用forof和forEach取值
### Set的应用，去重，交集，并集，差集
```js
//测试用例
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6, 7]

//去重
function distinct(arr) {
    return [...new Set(arr)]
}

//并集，讲两个数组分别结构到set的构造种
function merge(arr1, arr2) {
    return new Set([...arr1, ...arr2])
}

//交集
function unite(arr1, arr2) {
    return new Set([...arr1].filter(v=>arr2.some(v2=>v2===v)))
}

//差集,某个数组减去交集
function difference(arr1, arr2) {
    let un = merge(arr1,arr2)
    let itsct = unite(arr1, arr2);
    //整体差集
    return new Set([...un].filter(v=>!itsct.has(v)))
    //相对差集
    // return new Set([...arr1].filter(v => !itsct.has(v)))
}

console.log('distinction is ', distinct([1, 1, 1, 1, 1]))
console.log('merge is ', merge(a, b))
console.log('unite is ', unite(a, b));
console.log('difference is ',difference(b,a));
```
# [JS tips](https://www.jstips.co/zh_CN/)
## 选择（picking）和反选（rejecting）对象的属性
### 选择用map遍历了键名数组（keys）, 每次都会返回一个包含当前键名（key）的对象（如果在目标对象（obj）中没有当前键名，就会返回空对象）。然后我们用 reduce 把返回的所有单个键-值对象和合并到一个对象中。
```js
function pick(obj, keys) {
    return keys.map(k => k in obj ? {[k]: obj[k]} : {})
        .reduce((res, o) => Object.assign(res, o), {});
}

const row = {
    'accounts.id': 1,
    'client.name': 'John Doe',
    'bank.code': 'MDAKW213'
};

const table = [
    row,
    {'accounts.id': 3, 'client.name': 'Steve Doe', 'bank.code': 'STV12JB'}
];

pick(row, ['client.name']); // 取到了 client name

table.map(row => pick(row, ['client.name'])); // 取到了一系列 client name
```
#### 反选
```js
function reject(obj, keys) {
    return Object.keys(obj)
        .filter(k => !keys.includes(k))
        .map(k => ({[k]: obj[k]}))
        .reduce((res, o) => Object.assign(res, o), {});
}

// 或者, 利用 pick
function reject(obj, keys) {
    const vkeys = Object.keys(obj)
        .filter(k => !keys.includes(k));
    return pick(obj, vkeys);
}

reject({a: 2, b: 3, c: 4}, ['a', 'b']); // => {c: 4}
```
# 公共方法统计
- [ES6 Set使用](#es6-set使用)
  - [Set集合的特点](#set集合的特点)
    - [Set的应用，去重，交集，并集，差集](#set的应用去重交集并集差集)
- [JS tips](#js-tips)
  - [选择（picking）和反选（rejecting）对象的属性](#选择picking和反选rejecting对象的属性)
    - [选择用map遍历了键名数组（keys）, 每次都会返回一个包含当前键名（key）的对象（如果在目标对象（obj）中没有当前键名，就会返回空对象）。然后我们用 reduce 把返回的所有单个键-值对象和合并到一个对象中。](#选择用map遍历了键名数组keys-每次都会返回一个包含当前键名key的对象如果在目标对象obj中没有当前键名就会返回空对象然后我们用-reduce-把返回的所有单个键-值对象和合并到一个对象中)
      - [反选](#反选)
- [公共方法统计](#公共方法统计)
  - [1. 过滤对象中为空的属性](#1-过滤对象中为空的属性)
  - [2. 随机生成数字](#2-随机生成数字)
  - [3. 生成随机颜色值](#3-生成随机颜色值)
  - [4. 随机生成UUID](#4-随机生成uuid)
  - [5. 滚动到顶部](#5-滚动到顶部)
  - [6. 去重](#6-去重)
  - [7. 防抖方法](#7-防抖方法)
  - [8. 节流方法](#8-节流方法)
  - [9. 截取指定字节的字符串](#9-截取指定字节的字符串)
  - [10. 获取字符串字节长度](#10-获取字符串字节长度)
  - [11. 获取url后参数](#11-获取url后参数)
  - [12. 对象克隆\&深拷贝](#12-对象克隆深拷贝)
  - [13. 获取与当前日期相差天数的日期](#13-获取与当前日期相差天数的日期)
  - [14. 毫秒转汉字时间;日期格式转换](#14-毫秒转汉字时间日期格式转换)
- [常用正则统计](#常用正则统计)
  - [1. 身份证号](#1-身份证号)
  - [2. 验证统一社会信用代码](#2-验证统一社会信用代码)
  - [3. 手机号码](#3-手机号码)
  - [4. 数字和字母组成](#4-数字和字母组成)
  - [5. 邮政编码(中国)](#5-邮政编码中国)
  - [6. 车牌号(新能源+非新能源)](#6-车牌号新能源非新能源)
  - [7. 邮箱地址(email)](#7-邮箱地址email)
  - [8. 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）](#8-银行卡号10到30位-覆盖对公私账户-参考微信支付)
## 1. 过滤对象中为空的属性
```js
/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj(obj) {
  if (!(typeof obj == 'object')) {
    return;
  }

  for ( let key in obj) {
    if (obj.hasOwnProperty(key)
      && (obj[key] == null || obj[key] == undefined || obj[key] === '')) {
      delete obj[key];
    }
  }
  return obj;
}
```
## 2. 随机生成数字
```js
/**
 * 随机生成数字
 * 示例：生成长度为 12 的随机数：randomNumber(12)
 * 示例：生成 3~23 之间的随机数：randomNumber(3, 23)
 *
 * @param1 最小值 | 长度
 * @param2 最大值
 * @return int 生成后的数字
 */
export function randomNumber() {
  // 生成 最小值 到 最大值 区间的随机数
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  if (arguments.length === 1) {
    let [length] = arguments
    // 生成指定长度的随机数字，首位一定不是 0
    let nums = [...Array(length).keys()].map((i) => (i > 0 ? random(0, 9) : random(1, 9)))
    return parseInt(nums.join(''))
  } else if (arguments.length >= 2) {
    let [min, max] = arguments
    return random(min, max)
  } else {
    return Number.NaN
  }
}
```
## 3. 生成随机颜色值
```js
export function getRandomColor () {
  const rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}
```
## 4. 随机生成UUID
```js
/**
 * 随机生成uuid
 * @return string 生成的uuid
 */
export function randomUUID() {
  let chats = '0123456789abcdef'
  return randomString(32, chats)
}
```
## 5. 滚动到顶部
```js
export function scrollToTop(){
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if(c>0){
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0,c-c/8);
  }
}
```
## 6. 去重
```js
export function unique() {
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
}
```
## 7. 防抖方法
```js
/**
 * 防抖方法
 *
 * @param fn 要防抖的函数
 * @param delay 防抖的毫秒数
 * @returns {Function}
 */
export function simpleDebounce(fn, delay = 100) {
  let timer = null
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, delay)
  }
}
```
## 8. 节流方法
```js
/**
 *节流
 * @param fn 要节流的函数
 * @param delay 节流的毫秒数
 * @returns {Function}
 */
export function throttle(fn,delay = 1000) {
  let timer = null; // 首先设定一个变量，没有执行定时器时,默认为 null
  return function () {
    if (timer) return; // 当定时器没有执行的时候timer永远是false,后面无需执行
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)
      // 表示可以执行下一次循环了。
      timer = null;
    }, delay);
  };
}
```
## 9. 截取指定字节的字符串
```js
/**
 * 截取指定字节的字符串
 * @param str 要截取的字符穿
 * @param len 要截取的长度，根据字节计算
 * @param suffix 截取前len个后，其余的字符的替换字符，一般用“…”
 * @returns {*}
 */
export function cutString(str,len,suffix){
  if(!str) return "";
  if(len <= 0) return "";
  if(!suffix) suffix = "";
  var templen = 0;
  for(var i = 0;i < str.length;i++){
     if(str.charCodeAt(i) > 255){
        templen += 2;
     }else{
        templen++
     }
     if(templen == len){
        return str.substring(0, i+1) + suffix;
     }else if(templen > len){
        return str.substring(0, i) + suffix;
     }
  }
  return str;
}
```
## 10. 获取字符串字节长度
```js
/**
 * 获取字符串字节长度
 * @param {String}
 * @returns {Boolean}
 */
export function checkLength(v){         
    var realLength = 0;
    var len = v.length;
    for (var i = 0; i < len; i++) {
       var charCode = v.charCodeAt(i);
       if (charCode >= 0 && charCode <= 128)
           realLength += 1;
       else
           realLength += 2;
   }
   return realLength;
}
```
## 11. 获取url后参数
```js
export function getRequest() {            
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
    }
    return theRequest;
}
```
## 12. 对象克隆&深拷贝
```js
/**
 * 对象克隆&深拷贝
 * @param obj
 * @returns {{}}
 */
export function clone(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
      var copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
      var copy = [];
      for (var i = 0, len = obj.length; i < len; ++i) {
          copy[i] = clone(obj[i]);
      }
      return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
      var copy = {};
      for (attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}
```
## 13. 获取与当前日期相差天数的日期
```js
/**
 *获取与当前日期相差天数的日期
 * @param value 相差天数
 * @returns {Array}
 */
export function differenceDate(value){
  let date1 = new Date()
  let time1=date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();//time1表示当前时间
  let date2 = new Date(date1);
  date2.setDate(date1.getDate()+value);
  let time2 =  date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
   return [time2,time1]
}
```
## 14. 毫秒转汉字时间;日期格式转换
```js
/**
 *获取与当前日期相差天数的日期
 */
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
}
```
# 常用正则统计
## 1. 身份证号
```js
function isCardNo(e){
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(e)
}
```
## 2. 验证统一社会信用代码
```js
function isSocialCode(e) {
  const reg = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/;
  return reg.test(e);
}
```
## 3. 手机号码
```js
function isMobile(e) {
  const reg = /^1[0-9]{10}$/;
  return reg.test(e);
}
```
## 4. 数字和字母组成
```js
function isAlphanumeric(e) {
  const reg = /^\[A-Za-z0-9\]+$/;
  return reg.test(e);
}
```
## 5. 邮政编码(中国)
```js
function isPostalCode(e) {
  const reg = /^(0\[1-7\]|1\[0-356\]|2\[0-7\]|3\[0-6\]|4\[0-7\]|5\[1-7\]|6\[1-7\]|7\[0-5\]|8\[013-6\])\\d{4}$/;
  return reg.test(e);
}
```
## 6. 车牌号(新能源+非新能源)
```js
function isPostalCode(e) {
  const reg = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/;
  return reg.test(e);
}
```
## 7. 邮箱地址(email)
```js
function isEmail(e) {
  const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return reg.test(e);
}
```
## 8. 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
```js
function isBankCode(e) {
  const reg = /^[1-9]\d{9,29}$/;
  return reg.test(e);
}
```