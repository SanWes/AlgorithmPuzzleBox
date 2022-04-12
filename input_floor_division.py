# return the integer part of a division operation 
# ex 17/5 = 3.4   --> integer part is 3
# Using two division symbols is an easy way to get this result:  17//5 = 3
# similarly to get the remainder and ditch integer use: 17%5 = 2
import math

num1 = int(input("Enter numerator: "))
num2 = int(input("Enter denominator: "))

int_res = int(num1/num2)
int_res2 = (num1//num2)

int_res3 = math.floor(num1/num2)

rem_res = num1%num2

print("The integer of quotient resulted to: ",int_res)
print("The remainder of quotient resulted to: ", rem_res)