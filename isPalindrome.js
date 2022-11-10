// Write your code below
function isPalindrome(word){
    let b = word.length - 1
    for(let i = 0; i < word.length; i++){
        if(word[i] != word[b--]){
            return false
        }
    }
    return true
}

//console.log(isPalindrome('HannaH'));

function isPalindrome2(word)
{
    for(let i = 0, b = word.length - 1; i <= b; i++, b--)
    {
        if(word[i] !== word[b])
        {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome2('racecart'));