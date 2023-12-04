"""
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

caesarCipher has the following parameter(s):
    string s: cleartext
    int k: the alphabet rotation factor
Returns
    string: the encrypted string

Input Format

The first line contains the integer, n, the length of the unencrypted string.
The second line contains the unencrypted string, s.
The third line contains k, the number of letters to rotate the alphabet by.
"""

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'caesarCipher' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#

def caesarCipher(s, k):
    # ascii values for chars
    temp = []
    
    for char in s:
        temp.append(ord(char))
    
    #  main logic - shift 
    
    for i in range(n):
        # uppercase ascii range - 65 - 90 
        if 65 <= temp[i] <= 90:
            # add and subtracting 65 and %26 to keep the range
            # 
            temp[i] = (65 + (temp[i]-65+k)%26)
            # example: temp[i] = a  --> ascii val is 65 
            # 65 + (65 - 65 + 3)%26
            # 65 + (0 + 3) % 26  
            # 65 + 3 = 68 will be ascii val for shifted letter 68 = d
        # lowercase ascii range - 97- 122 
        elif 97 <= temp[i] <= 122:
            temp[i] = (97 + (temp[i]-97+k)%26)
    
            
    return "".join(map(chr,temp))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    s = input()

    k = int(input().strip())

    result = caesarCipher(s, k)

    fptr.write(result + '\n')

    fptr.close()
