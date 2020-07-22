"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('isAnagram', function () {
    expect(index_1.isAnagram("bleat", "table")).toBe("Your input string bleat and table are checked and it's anagram");
});
test('isAnagram', function () {
    expect(index_1.isAnagram("eat", "tar")).toBe("Sorry! your input strings are eat and tar are checked and it's not anagram");
});
