/******************************** 1.数组去重 ********************************/
/**
 * 通过 Set 实现普通数组的去重，时间复杂度 O(n)
 * 
 * @example uniqueBySet([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) => [1,2,3,4,5]
 * @param {(number | string)[]} arr 普通数组 
 * @returns 去重之后的结果
 */
const uniqueBySet = (arr = []) => Array.from(new Set(arr));

/**
 * 通过 Set 解构实现普通数组的去重，时间复杂度 O(n)
 * 
 * @example uniqueBySetDeconstruct([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) => [1,2,3,4,5]
 * @param {(number | string)[]} arr 普通数组 
 * @returns 去重之后的结果
 */
const uniqueBySetDeconstruct = (arr = []) => [...new Set(arr)];

/**
 * 通过 Map 实现普通数组的去重，时间复杂度 O(n)
 * 
 * @example uniqueByMap([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) => [1,2,3,4,5]
 * @param {(number | string)[]} arr 普通数组
 * @returns 去重之后的结果
 */
const uniqueByMap = (arr = []) => Array.from(new Map(arr.map(item => [item, item])).values());

/**
 * 通过 Map 过滤方式实现普通数组的去重，时间复杂度 O(n)
 * 
 * @example uniqueByMapFilter([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) => [1,2,3,4,5]
 * @param {(number | string)[]} arr 普通数组
 * @returns 去重之后的结果
 */
const uniqueByMapFilter = (arr = []) => {
  const map = new WeakMap();
  return arr.filter((item) => !map.has(item) && map.set(item, 1));
};

/**
 * 通过 Map 实现对象数组的去重，时间复杂度 O(n)
 * 
 * @example uniqueByObjMap([{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 1, name: 'Alice' },{ id: 3, name: 'Charlie' }]) => [{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 3, name: 'Charlie' }]
 * @param {object[]} arr 对象数组
 * @returns 去重之后的结果
 */
const uniqueByObjMap = (arr = []) => [...new Map(arr.map(item => [item.id, item])).values()];

/**
 * 通过 filter + findIndex 实现对象数组的去重，时间复杂度 O(n^2)
 * 
 * @example uniqueByObjFindIdx([{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 1, name: 'Alice' },{ id: 3, name: 'Charlie' }]) => [{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 3, name: 'Charlie' }]
 * @param {object[]} arr 对象数组
 * @returns 
 */
const uniqueByObjFindIdx = (arr = []) => arr.filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

/**
 * 通过 reduce + find 实现对象数组的去重，时间复杂度 O(n^2)
 * 
 * @example uniqueByObjReduce([{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 1, name: 'Alice' },{ id: 3, name: 'Charlie' }]) => [{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 3, name: 'Charlie' }]
 * @param {object[]} arr 对象数组
 * @returns 去重之后的结果
 */
const uniqueByObjReduce = (arr = []) => arr.reduce((prev, curr) => prev.find(item => item.id === curr.id) ? prev : prev.concat([curr], []), []);


/******************************** 2.数组扁平化 ********************************/
/**
 * 使用数组原生的 flat 方法实现数组扁平化
 * 
 * @example arrayFlat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], Infinity) => [1,2,3,4,5,6,7,8,9]
 * @param {number []} arr 数组
 * @param {number} depth 指定要提取嵌套数组的结构深度，默认值为 1
 * @returns 扁平化之后的数组
 */
const arrayFlat = (arr = [], depth = 1) => arr.flat(depth);

/**
 * 使用数组原生的 reduce 方法递归实现数组扁平化
 * 
 * @example arrayReduceFlat([1, 2, 3, [4, 5, 6, [7, 8, 9]]]) => [1,2,3,4,5,6,7,8,9]
 * @param {number []} arr 数组
 * @returns 扁平化之后的数组
 */
const arrayReduceFlat = (arr = []) => arr.reduce((prev, curr) => prev.concat(Array.isArray(curr) ? arrayReduceFlat(curr) : curr), []);