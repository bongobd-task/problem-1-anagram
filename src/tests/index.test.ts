
import {isAnagram} from '../index';

test('isAnagram', () => {
  expect(isAnagram("bleat", "table")).toBe(`Your input string bleat and table are checked and it's anagram`);
});

test('isAnagram', () => {
  expect(isAnagram("eat", "tar")).toBe(`Sorry! your input strings are eat and tar are checked and it's not anagram`);
});