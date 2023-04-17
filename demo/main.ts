export {}
// let a = "10";
// let b = 20;
// console.log(a  + b);
const arr:number[] = [1,2,3];
const arrMix:Array<number | string> = [1,2,3, 'a'];

const users: {id:number, firstName: string ,lastName: string}= {
    id: 1,
    firstName: "ngoc",
    lastName: "Đào"
}
// console.log(users);

// K thể trả về bất cứ giá trị nào void
// có thể trả về bất kì giá trị nào any
function sum(a:number , b:number):void{
    // console.log(a+b);
    
}
sum(10,20);

const product = {
    id: 1,
    name: "ngoc"
}
function showpro(pops){
    console.log(pops);
    
    return pops;
}
showpro(product);

