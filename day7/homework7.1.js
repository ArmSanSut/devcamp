let arr = [1,2,3,4,5,6,7,8,9,10];
//filter
let modArr = arr.filter(a => a%2 == 0);
console.log(modArr);
//map
let mapArr = modArr.map(b => b*1000);
console.log(mapArr);

