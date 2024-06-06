const a = [1,2,3];
const b = [4,5,6];
const newarrr =[...a, ...b];
console.log(newarrr);

const myprofile = {id: 1 ,name: 'Hồng Quân'};
const myemail = {email: "hongquan@gmail.com"};
const newprofile = {...myprofile, ...myemail};
console.log(newprofile);
const myprofilee = {...myprofile,mobile:"099999999"};
console.log(myprofilee);