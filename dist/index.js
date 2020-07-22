"use strict";
/*
 * @param str1:string;
 * @param str2:string;
 * isAnagram(str1,str2)
 * @return string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnagram = void 0;
exports.isAnagram = function (str1, str2) {
    console.log("Hello sir! your first input string is :=> " + str1);
    console.log("Hello sir! your second input string is :=> " + str2);
    var step1 = str1.split("").sort().join("").toLowerCase();
    var step2 = str2.split("").sort().join("").toLowerCase();
    if (step1 === step2)
        return "Your input string " + str1 + " and " + str2 + " are checked and it's anagram";
    return "Sorry! your input strings are " + str1 + " and " + str2 + " are checked and it's not anagram";
};
console.log(exports.isAnagram("table", "bleat"));
console.log(exports.isAnagram("eat", "tar"));
