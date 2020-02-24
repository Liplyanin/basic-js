module.exports = class DepthCalculator {
    calculateDepth(arr ) {
        if(arr.every(el=>!Array.isArray(el))){
            return 1;
        }else{
            return 1  + this.calculateDepth(arr.flat());
        }
    }
};

