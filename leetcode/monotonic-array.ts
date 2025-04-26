function isMonotonic(nums: number[]): boolean {

    const firstNumber = nums[0];
    const lastNumber = nums[nums.length - 1];

    if (nums.length === 0) return true;

    if (firstNumber === lastNumber) {

        for (let i = 0; i < nums.length -1; i++) {
            if (nums[i + 1] !== nums[i]) return false;
        }

    } else if (firstNumber < lastNumber) {
        
        for (let i = 0; i < nums.length -1; i++) {
            if(nums[i + 1] < nums[i]) return false;
        }
    } else {
        for (let i = 0; i < nums.length -1; i++) {
            if(nums[i + 1] > nums[i]) return false;
        }
    }
    return true;
}

console.log(isMonotonic([1, 1, 3, 1, 2]))