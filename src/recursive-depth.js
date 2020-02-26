module.exports = class DepthCalculator {
    calculateDepth(arr ) {
        let count = 1;
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                count+=this.calculateDepth(arr.flat());
                break;
            }
        }
        return count;
    }
};

