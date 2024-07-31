//1.comparing two arrays are equal
function arrayequals(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}
let arr1=[2,3,4,5,6];
let arr2=[2,3,4,5,6];
console.log(arrayequals(arr1,arr2));


//2.replace element at specific position
let arr=["car","bike","truck","train"];
let index=2;
let ele="flight";
for(let i=0;i<arr.length;i++){
    if(i==index){
        arr[i]=ele;
    }

}
console.log(arr);


// 3.deduplication of array
const array = [1, 2, 2, 3, 4, 4, 5,5,6,6,7,7];
const uniqueArray=[...new Set(array)];
console.log(uniqueArray);


//4. Converting the Array of object
let users = [
    { id: 25, name: "alpha", age: 20 },
    { id: 24, name: "robert", age: 20 },
    { id: 23, name: "justin", age: 20 }
  ];
  
  let names = users.map(users => users.name);
  console.log(names);
  
  //5. Rotating the Array
  let array3 = [1, 2, 3, 4, 5,6,7,8];
  let rotate_times=3;
  let rotate_Array = rotate(array3, rotate_times);
  
  console.log(rotate_Array);
  
  function rotate(array3, n) {
    n = n % array.length;
    return array.slice(n).concat(array3.slice(0, n));
  }






