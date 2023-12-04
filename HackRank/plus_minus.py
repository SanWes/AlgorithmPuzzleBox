"""
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

"""

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # initialize the length of array
    n = len(arr)
    # initialize counters
    pos, neg, zero = 0, 0, 0
    
    # loop through range of elements in arr to count pos, neg, zero
    for e in range(n):
        if arr[e] > 0:
            pos += 1
        elif arr[e] < 0:
            neg += 1
        else: zero += 1
    # print(pos, neg, zero) 
     
    # display fractions by div each var by n. 
    
    # Percision formatting => 
        # (round(a,2))
        # ("{0:.2f}".format(a))

    pos_ratio = ("{0:.6f}".format(pos/n))
    print(pos_ratio)
    neg_ratio = ("{0:.6f}".format(neg/n))
    print(neg_ratio)
    zero_ratio = ("{0:.6f}".format(zero/n))
    print(zero_ratio)
    
    
    return (pos_ratio, neg_ratio, zero_ratio)
    

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
