function capitalizeFLetter()
 {
    const str = 'hello world';


const arr = str.split(" ");


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}


const str2 = arr.join(" ");
console.log(str2);

}

    
function stringmatch()
{
let sentence="my nane is khan";
let result=sentence.includes('khan');
console.log(result);
}

function substring()
{
   
var str = "hello world!!";


var substr = str.substring(str.indexOf(" ") + 1);

console.log(substr);
}