"""

There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac
n = 10

The substring we consider is 'abcacabcac', the first 10 characters of the infinite string. There are 4 occurrences of 'a' in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, s.
The second line contains an integer, n.
"""

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'repeatedString' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. STRING s
#  2. LONG_INTEGER n
#

def repeatedString(s, n):
    
    str_len = len(s)
    
    # Counting 'a' in given string
    count = 0
    i = 0
    while i < str_len:
        if s[i] == 'a':
            count += 1
        i+=1
    
    # the amount of times string repeats in n characters 
    rep_times = n // str_len
    
    # length of string remaining after n reps
    str_left = n - (str_len * rep_times)
    # str_left = 10 - (4 * 2)
    # str_left = 2
    
    # count remaining reps
    extra = 0
    j = 0
    while j < str_left:
        if s[j] == 'a':
            extra += 1
        j+=1
    
    total_count = (rep_times * count) + extra
    
    return total_count
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input().strip())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()
