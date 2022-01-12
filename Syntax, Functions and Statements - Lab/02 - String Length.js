function solution(str1, str2, str3) {
    let firstLength = str1.length;
    let secondLength = str2.length;
    let thirdLength = str3.length;
    let sum = (firstLength + secondLength + thirdLength);
    let average = sum / 3;
    
    console.log(sum);
    console.log(average.toFixed(0));
}
