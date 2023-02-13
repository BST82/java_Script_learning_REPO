// Conversions and Operations 


let score="33";
let score_2="33aa";
console.log(typeof score);
console.log(typeof(score));

let value_In_Number=Number(score); // typecasting in java script
console.log(typeof value_In_Number);
console.log(value_In_Number);

let value_In_Number_2=Number(score_2); // typecasting in java script
console.log(typeof value_In_Number_2);
console.log(value_In_Number_2);

let take_nullvalue=null;
let conver_null_value_to_number=Number(take_nullvalue);
console.log(typeof conver_null_value_to_number);
console.log("Null will give 0 when you conver null to Number = "+conver_null_value_to_number);


let take_undefind_value=undefined;
let conver_undefind_value_to_number=Number(take_undefind_value);
console.log(typeof conver_undefind_value_to_number);
console.log("undefined will give 0 when you conver undefind to Number = "+conver_undefind_value_to_number);

// take boolean values 
let flag =true;
let conver_flag=Number(flag);
console.log(typeof conver_flag);
console.log(conver_flag);

// Notes ;
//"33" =>33
//"887gg" =>NaN(Not a Number);
// true => 1 ; and false => 0;

// converting numbber to boolean 

let conver_number_to_boolean=""; 
//""=>false 
//"anystring"=>true 
// 789279=>true
//-118=>true
//0=>false

let lets_conver_number_to_boolean = Boolean(conver_number_to_boolean);
console.log( typeof lets_conver_number_to_boolean);
console.log( lets_conver_number_to_boolean);


//conver number to string 

let conver_number=33;
let conver_number_to_string=String(conver_number);
console.log(typeof conver_number_to_string);
console.log(conver_number_to_string);
