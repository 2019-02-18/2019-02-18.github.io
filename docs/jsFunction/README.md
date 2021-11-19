---
sidebarDepth: 2
sidebar: auto
---

## ES6 Set使用
### Set集合的特点
* Set存储的值唯一且不重复，可以用于去重
* Set没有键，因此keys/values都将返回相同的结果（一个setIterator,迭代器对象），可以用forof和forEach取值
##### Set的应用，去重，交集，并集，差集
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
## [JS tips](https://www.jstips.co/zh_CN/)
### 选择（picking）和反选（rejecting）对象的属性
####选择用map遍历了键名数组（keys）, 每次都会返回一个包含当前键名（key）的对象（如果在目标对象（obj）中没有当前键名，就会返回空对象）。然后我们用 reduce 把返回的所有单个键-值对象和合并到一个对象中。
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
####反选
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
