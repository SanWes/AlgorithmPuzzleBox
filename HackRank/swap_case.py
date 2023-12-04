"""
You are given a string and your task is to swap cases. In other words, convert all lowercase letters to uppercase letters and vice versa.

For Example:

Www.HackerRank.com → wWW.hACKERrANK.COM
Pythonist 2 → pYTHONIST 2  

Function Description

swap_case has the following parameters:

string s: the string to modify
Returns

string: the modified string
"""



def swap_case(s):

    swapped = ""
    
    for l in s:
        
        if l == l.lower():
            l = l.upper()
            swapped += l
        elif l == l.upper():
            l = l.lower()
            swapped += l
        else: swapped += l
    return swapped
 