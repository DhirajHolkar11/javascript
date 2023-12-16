// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.


var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = nums1.concat(nums2);
    newArr.sort((a,b)=>a-b);
    let n = newArr.length;

    if(n%2==0){
    let solution1 = (newArr[Math.floor((n-1)/2)] + newArr[Math.floor((n-1)/2) + 1])/2;
    return solution1;

    }
    else{
        let solution2 = newArr[Math.floor((n-1)/2)];
        return solution2;
    }
};