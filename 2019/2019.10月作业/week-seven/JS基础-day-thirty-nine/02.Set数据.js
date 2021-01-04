//Set和数组不一样，Set不能有相同的元素,array中数据可以重复
let arr = [0, 2, 3, 4, 2, 3, 5];
let set = new Set(arr);
console.log(set);

var set2 = new Set([1, 2, 3]);
//属性：size
console.log(set2.size);
//添加元素：add（）,无法添加已存在的元素
set2.add(1);
set2.add('a');
set2.add(true);
set2.add(undefined);

//是否拥有：has（）有这个元素返回true，没有返回false
console.log(set2.has(1));

//删除：delete（）删除成功返回true，删除失败返回false
console.log(set2.delete(undefined));
console.log(set2);
//清空：clear（）

console.log(set.values())

//Set的遍历方法Set.key()
// for (let key of set2.keys()) {
//     console.log(key);
// }
// //遍历值set.
// for (let value of set2.values()) {
//     console.log(value);
// }
// //遍历键值对
// for (let ket of set2.entries()) {
//     console.log(ket);
// }