const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  let sampleActiv = parseFloat(sampleActivity);
  if(typeof sampleActivity != "string" || sampleActiv <= 0 || sampleActiv > 15 ||  isNaN(sampleActiv) ){
    return false;
    
  }else   {
    let K = 0.693/HALF_LIFE_PERIOD;
    let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActiv))/K)
    return result;
  }

};
