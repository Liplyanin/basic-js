module.exports = function getSeason(date) {
  
  if(date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  let month = date.getMonth();

 if(month===11||month===1||month===0){
    return "winter"
  }else if(1<month&&month<5){
    return "spring";
  }else if (4<month&& month <8){
    return 'summer';
  }else if (7<month&&month<11){
    return 'autumn';
  }
};

  