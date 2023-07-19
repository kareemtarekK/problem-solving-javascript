console.log(Date.now()/1000/60/60/24/365);
let my_date = new Date();
console.log(my_date);
console.log(my_date.getTime()/1000/60/60/24/365);
console.log(my_date.getDate());
console.log(my_date.getDay());
console.log(my_date.getFullYear());
console.log(my_date.getMonth());
console.log(my_date.getHours());
console.log(my_date.getMinutes());
console.log(my_date.getSeconds());
console.log(my_date.getMilliseconds());
console.log(my_date.getTimezoneOffset());
console.log(my_date.getUTCDate());
let date = new Date("1982-9-15T06:30:15Z");
console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
let start =Date.now();
for(let i =0;i<100;i++){
    document.write('<div>hello</div>');
}
let end =Date.now();
let duration = end - start;
console.log(duration);
function* hello(){
    yield 1;
    // alert("stop");
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let generator = hello();
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
console.log(hello().next());
for(let prop of generator){
    console.log(`${prop}`);
}
function* nums(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
function* letters(){
    yield "a";
    yield "b";
    yield "c";
    yield "d";
    yield "e";
}
function* all(){
    yield* nums();
    yield* letters();
    yield* [6,7,8,9,10];
}
let gene = all();
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());
////////////////////
let text = '{"name" : "kareem" , "age" : 21 , "arr" : [1,2,3,4,5],"obj" : {"egypt" :"cairo","ksa" : "rayah" , "bulgiq": "country"}, "null" : null}'
console.log(text);
let myobj = JSON.parse(text);
console.log(myobj.obj);
let test = {
    name  : "kareem",
    age : 21,
    boolean : true,
}
console.log(test);
let json = JSON.stringify(test)
console.log(json);
///////////
let dataformserver = '{"name":"kareem","age":21,"country" : "egypt"}'
let dataformserverafterparsing = JSON.parse(dataformserver);
console.log(dataformserverafterparsing);
dataformserverafterparsing.name = "anwarbelalkareem";
dataformserverafterparsing.country = "ksa";
console.log(dataformserverafterparsing);
let datagotoserver = JSON.stringify(dataformserverafterparsing);
console.log(datagotoserver);
let datee = new Date("1982-09-15T06:30:15-06:30");
console.log(datee);
///////
// export let m = 10;
// export let arr = [1,2,3,4,5,6,7,8,9,10];
// export function hello(){
//     console.log("hello user");
// }
/////////////////
let mybirthdate = new Date("2001-10-17");
let current = new Date();
let result = current - mybirthdate;
console.log(`${Math.round(result / 1000)} seconds \n ${Math.round(result / 1000 / 60)} minutes \n ${Math.round(result / 1000 / 60 / 60)} hours \n ${Math.round(result / 1000 / 60 / 60 / 24)} days \n ${Math.round(result / 1000 / 60 / 60 / 24 / 30)} months \n ${Math.round(result / 1000 / 60 / 60 / 24 / 30 / 12 )} years`);
//////////////////
let dateandtime = new Date(null);
// let dateandtime = new Date(0);  <= or
dateandtime.setFullYear(1980);
dateandtime.setHours(0);
dateandtime.setSeconds(01);
console.log(dateandtime);
/////////////////
// let start_two = performance.now();
// for(let i=0;i<=99999;i++){
//     console.log(i);
// }
// let end_two = performance.now();
// let duration_two = end_two - start_two;
// console.log(`Loop Took ${Math.round(duration_two)} Milliseconds`);
/////////////////////////
function* getnums(){
    yield* new Set([1, 2, 2, 2, 3, 4, 5]);
}
function* getletters(){
    yield* new Set(["A", "B", "B", "B", "C", "D"]);
}
function* getall(){
    yield* getnums();
    yield* getletters();
}
let gene_all = getall();
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
console.log(gene_all.next());
////////////////
function* gener(){
    let index = 14;
    yield index;
    let num = 140;
    let sum = index + num;
    while(true){
        yield sum;
        sum += num += 200;
    }
}
let gen = gener();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/////////////////
let beforemonth = new Date();
beforemonth.setDate(0);
console.log(beforemonth + "(Eastern European Standard Time)");
let arrmonth = ["January","February","March","April","May","June","July","August","September","October","November ","December"];
arrmonth.forEach((e,i)=>{
if(i == beforemonth.getMonth()){
    console.log(`Previous Month Is ${arrmonth[i]} And Last Day Is ${beforemonth.getDate()}`);
}
});
/////////////////////
let birthdate = new Date('2001-November-17');
console.log(birthdate);
let birthdate2 = new Date(2001,10,17);
console.log(birthdate2);
let birthdate3 = new Date();
birthdate3.setFullYear(2001,10,17);
birthdate3.setHours(0,0,0);
console.log(birthdate3);
/////////////////////
import calc from "./mode-one.js"
import * as modOne from "./mode-two.js"
console.log(calc(modOne.mun_one,modOne.num_two,modOne.num_three));













