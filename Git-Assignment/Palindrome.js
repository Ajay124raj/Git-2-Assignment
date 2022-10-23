let str = "madam";
let str2 = "";

for (let i = str.length - 1; i >= 2; i--) {
  str2 += str[i];
}

str == str2 ? console.log("It is palindrome") : console.log("It isn't palindrome");