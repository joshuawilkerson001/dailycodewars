//Palindrome strings
//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
//Implement a function that checks if something is a palindrome.




function isPalindrome(line) {
  if(typeof line == "number"){
    let n = line.toString().split("").reverse().join("")
      if(n == line){
      return true
      } else {
      return false
      }
  } else {
    let reverse = line.split("").reverse().join("")
      if(reverse == line){
      return true
      } else {
      return false
      }
  }
}




describe("Palindrome", function() {
    it("should identifies that a string is palindrome", function() {
        Test.assertEquals(isPalindrome("anna"), true);
    });

    it("should identifies that a string is not palindrome", function() {
        Test.assertEquals(isPalindrome("walter"), false);
    });

    it("should identifies that a number is palindrome", function() {
        Test.assertEquals(isPalindrome(12321), true);
    });

    it("should identifies that a number is not palindrome", function() {
        Test.assertEquals(isPalindrome(123456), false);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome("."), true);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome(".!!."), true);
    });
});
