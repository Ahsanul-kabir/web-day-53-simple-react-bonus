const nums = [12, 25, 37, 29];
nums.map(num => num * 2);
nums.filter(num => num > 20);

nums.find(num => num > 23);

// const total = nums.reduce((sum,num) => sum + num,0);

const total = nums.reduce((sum, num) => {
    console.log(sum, num);
     return sum + num;
}, 0)

console.log(total);