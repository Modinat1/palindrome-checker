const input = document.getElementById('input');
const resultDiv = document.getElementById('result');
const btn = document.getElementById('btn');
btn.addEventListener('click', palindromeChecker);

function palindromeChecker(e){
    e.preventDefault();
    const inputValue = document.getElementById('input').value;
    const regEx = /[^A-Za-z0-9]/g;
    const lowRegStr = inputValue.toLowerCase().replace(regEx, "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    if(lowRegStr === reverseStr){
        resultDiv.innerText = 'This is a palindrome';
        }else{
            resultDiv.innerText = 'This is not a palindrome'; 
        }
}
