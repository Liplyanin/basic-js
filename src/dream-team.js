module.exports = function createDreamTeam( members ) {
if(Array.isArray(members)==true){
let arrFirstLatters = [];
members.forEach( function(element){
  if(typeof element == "string"){
    let str =element.replace( /\s/g, "");
    let latter = str[0].toUpperCase();
    arrFirstLatters.push(latter) ;
  }else return false;
 
});
return arrFirstLatters.sort().join('')}else return false;
};