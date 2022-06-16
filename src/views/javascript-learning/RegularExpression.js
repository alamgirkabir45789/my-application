const sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem nesciunt voluptatum corrupti repudiandae, molestias harum cum quasi, dolorem fugiat doloribus ipsum. Quibusdam, eius esse commodi vitae laboriosam voluptatibus nemo!";

const occure = sentence.match(/ipsum/gi);
const occureData = occure ? occure.length : 0;
console.log(occureData);
console.log(occure);

let position = sentence.search(/sipsum/i);
position = position >= 0 ? position : "Not found";
console.log(position);

const myArr = ["a", "b", "c"];
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === val) {
      console.log(arr);
      console.log(arr[i]);
      return i;
    }
  }
  return "not found";
}
console.log(linearSearch(myArr, "b"));

function longestString(names) {
  let longWord = "";
  for (name of names) {
    if (name.length > longWord.length) {
      longWord = name;
    }
  }
  return [longWord, names.indexOf(longWord)];
}
console.log(
  longestString(["kabir", "Hamidul Ilam", "Shafik", "Alamgir kabir"])
);

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i%5===0) {
      console.log(`${i} is fizBuz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is fiz`);
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);


let myObj={
  a:'Kabir',
  b:undefined,
  c:'',
  d:33,
  f:true,
  g:'Thanks',
  h:NaN
}
const mixedArr=['Kabir',
undefined,
'',
33,
true,
'Thanks',
NaN]

const trueArr=mixedArr.filter(function(el){
  if(el){
    return true;
  }else{
    return false
  }
})
console.log(trueArr)
function trueObj(obj){
  for(let i in obj){
    console.log(i)
    console.log(obj[i])
   if(! obj[i]){
     console.log(obj[i])
     delete obj[i];
   }
  }
  return obj;
}
console.log(trueObj(myObj))