function runningSum(nums: number[]): number[] {

    nums.reduce((a,c,i,arr) => arr[i] += a)
    console.log(nums)
    return nums
}
runningSum([1, 2, 3, 4]);
