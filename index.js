// Your code here
function saturdayFun(arg1 = 'roller-skate'){
    return `This Saturday, I want to ${arg1}!`
   }
   
   function mondayWork(arg = 'go to the office'){
    return `This Monday, I will ${arg}.`
   }
   
   function wrapAdjective(string = '*'){ 
   return function (arg = 'special') {
    return `You are ${string}${arg}${string}!`
    }
   }
   
   const Calculator = {
    add: function(a,b){
   return a+b
   }, 
   subtract: function(a,b){
   return a-b
   },
    multiply: function(a,b){
   return a*b
   },
    divide: function(a,b){
   return a/b
   }
   }
   
   function actionApplyer(int, array){
    for (let i = 0; i < array.length; i++ ){
    int = array[i](int)
    } 
   return int
   }