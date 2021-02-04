class Numbers {
    getEven(str) {
        let array = str.split(",");
        let even = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        console.log(`Here are the even numbers: ${even.join()}`);
        return even;
    }

    getOdd(str){
        let array = str.split(",");
        let odd = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%1==0){
                odd.push(array[i]);
            }
        }
        console.log(`Here are the odd numbers: ${odd.join()}`);
        return odd;
    }

    getDivisibleBy3(str){
        let array = str.split(",");
        let divisible = [];
        for(let i=0; i<array.length; i++){
            if(array[i]%3==0){
                divisible.push(array[i]);
            }
        }
        console.log(`Here are the divisible by 3 numbers: ${divisible.join()}`);
        return divisible;
    }
    
}
module.exports = Numbers;