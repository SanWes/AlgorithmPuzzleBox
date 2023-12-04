"""
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description
    rotLeft has the following parameter(s):

        int a[n]: the array to rotate
        int d: the number of rotations
Returns
    int a'[n]: the rotated array
    Input Format

The first line contains two space-separated integers  and , the size of  and the number of left rotations.
The second line contains  space-separated integers, each an .
"""

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'rotLeft' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER d
#

def rotLeft(a, d):
    # rotate array a to the left by d amount
    
    # save array from index 0 til index d in var 
    res = a[0:d]
    # loop through remaining index and 
    for i in range(len(a)-d):
        a[i] = a[i+d]
    a[-d:] = res
    
    # print(a[d:])
    # print(a[:d])
    return a
    # return (a[d:]+a[:d])  # One Line Solution 
            
    # print(a)
    # return a
    
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    d = int(first_multiple_input[1])

    a = list(map(int, input().rstrip().split()))

    result = rotLeft(a, d)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
