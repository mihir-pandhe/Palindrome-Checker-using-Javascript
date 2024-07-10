document.getElementById('textInput').addEventListener('input', checkPalindrome);

function checkPalindrome() {
    const textInput = document.getElementById('textInput').value;
    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    const isPalindrome = cleanedText === reversedText;

    document.getElementById('result').textContent = isPalindrome ? 'The text is a palindrome.' : 'The text is not a palindrome.';
}
