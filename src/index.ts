/*
 * @param str1:string;
 * @param str2:string;
 * isAnagram(str1,str2)
 * @return string
 */

export const isAnagram = (str1: string, str2: string): string => {
  console.log(`Hello sir! your first input string is :=> ${str1}`);

  console.log(`Hello sir! your second input string is :=> ${str2}`);

  const step1 = str1.split("").sort().join("").toLowerCase();

  const step2 = str2.split("").sort().join("").toLowerCase();

  if (step1 === step2)
    return `Your input string ${str1} and ${str2} are checked and it's anagram`;

  return `Sorry! your input strings are ${str1} and ${str2} are checked and it's not anagram`;
};

//Here is example:-
console.log(isAnagram("table", "bleat"));
console.log(isAnagram("eat", "tar"));
