// A R G U M E N T S  &  P A R A M A T E R S 
// OKey.. imagin you want to greet somebody..
const speak=function(name){
    console.log(`Hello `)
};
// You can create an argument, so write inside of the parenthesis a variable. And  at the action 
// of the function use the template string to set the argument whatever you want.
const speak2=function(name){
    console.log(`Hello ${name}`)
};
// Then if you call the function whitout an argument you'll see undefined. Sou you have to apss the 
// value of the function inside of the parenthesis when you invoke the functions
 speak2();
//  Like here.
 speak2('Isaac');
// You can put any arguments you want inside of the parenthesis, Now the order is important the order 
// arguments must match the order paramaters.
 const speak3=function(name, time){
     console.log(`Good ${time} ${name}`)
 };
 speak3('Isaac', 'morning');

//  We have a solution to not see undefined. You can put some default values insiden of the argument.
// Just put the argument equal to whatever.

const speak4=function(name='Leire'){
    console.log(`Hello ${name}`)
}
speak4();