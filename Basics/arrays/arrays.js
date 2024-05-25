const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log("-------------- ⚡️ accessing a single item -------------");
console.log(arr[0]);

console.log("-------------- ⚡️ Looping through an array-------------");
for (const items of arr) {
  console.log(items);
}
console.log("-------------- ⚡️ adding an item at the end -------------");
arr.push(6);
console.log(arr); // you should see 6 added at the end

console.log("-------------- ⚡️ adding an item at the start -------------");
arr.unshift(0);
console.log(arr); // you should see 0 added at the beginning

console.log("-------------- ⚡️ removing an item at the start -------------");
const removedElementAtTheStart = arr.shift(); // doesnt take an argument // we can store the removed element in another var
console.log(removedElementAtTheStart, ": was removed ");
console.log(arr); // you should see 0 removed at the beginning

console.log("-------------- ⚡️ removing an item at the end -------------");
const removedElementAtTheEnd = arr.pop(); // doesnt take an argument
console.log(removedElementAtTheEnd, ": was removed ");
console.log(arr); // you should see 6 removed at the end

console.log(
  "-------------- ⚡️ map, filter, reduce, slice, splice, concat -------------",
);
