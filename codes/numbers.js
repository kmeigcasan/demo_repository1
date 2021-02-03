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
}
module.exports = Numbers;