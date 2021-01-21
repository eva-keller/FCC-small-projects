/*- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
You will probably want to use regular expressions. This will allow you to convert the words easily.
*/

/*start at beginning and get longest match of everything not a vowel (consonants)
if regex pattern found, it saves the match; else, it returns null
if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
if regex pattern not found (starts with vowels), it just adds “way” to the ending*/

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

  
  function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      pigLatin = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
  }
  
  // test here
  translatePigLatin("consonant");

  /*
    Make an empty string to hold your Pig Latin word.
    Assign your appropriate regular expression to a variable.
    If the first character is a vowel, just add way to end of string and return it.
    If the first character is not a vowel:
        Find number of consonants before first vowel with help of indexOf(), match() and regex.
        Start Pig Latin string with first vowel till the end.
        Add letters before first vowel to end of string.
        substr() is used for string manipulation here.
        Add ay to end of string and return it.
*/
