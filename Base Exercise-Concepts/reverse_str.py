"""
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string:

"sredoC dna dlroW olleH"

"""


def FirstReverse(s):

  # establish empty string to append reversed letters
  rev_s = ""

  # loop through string, add each element into fresh string
  for x in s:
    rev_s = x + rev_s # reversed
    # rev_s += x  # normal 

  return rev_s

# keep this function call here 
print(FirstReverse(input()))