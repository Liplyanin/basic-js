module.exports = function repeater(str, options) {

    if(options.repeatTimes === undefined) options.repeatTimes = 1;  
    if(options.separator === undefined) options.separator = '+';
    if(options.addition === undefined) options.addition = '';
    if(options.additionSeparator === undefined) options.additionSeparator = '|';
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  
    let result = '';
    for(let i = 0; i < options.repeatTimes; ++i) {
        result += str;
        for(let j = 0; j < options.additionRepeatTimes; ++j) {
            result += options.addition;
            if(j < options.additionRepeatTimes - 1) {
                result += options.additionSeparator;
            }
        }
        if(i < options.repeatTimes - 1) {
            result += options.separator;
        }
    }
    return result;
  };