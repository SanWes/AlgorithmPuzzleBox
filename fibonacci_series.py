# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

# Two characteristics for Fibonacci Series 
#  First and second element will be 0 and 1 
#  All other elements will be the sum of the previous 2 elements 
#  ex. third element is sum of second and first. The fifth element is sum of the fourth and third ... 

#  Challenge: Create a function that will take a number as input. Then create a list which will contain a fibonacci series

# Pseudo Code 

#  Create a list with the fist two elements of the series. 
#  Run a loop to append elemts to the list by adding the last two elements of the list 
# for loop or while loop
# probably while loop 


def fibonacci (num):
    fibo = [0,1]
    i = 2
    # variable i = starting point. 
    # starts at 2 because the first 2 elements are fixed, therefore it needs to start on the 3rd element (position 2)

    while i <= num:
        next_fibo = fibo[i-1] + fibo[i-2]
        # the next value shall be the addition of one element behind current position i plus two elements behind
        fibo.append(next_fibo)
        i += 1
        # increment our loop and check if the while condition is valid 
    return fibo


print(fibonacci(3)) # output = [0, 1, 1, 2]
print(fibonacci(9)) # output = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

