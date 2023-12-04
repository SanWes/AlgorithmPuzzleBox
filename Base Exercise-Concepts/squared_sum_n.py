# Calculate the sum of the square of n numbers 
# Formula: n*(n+1)(2*n+1)/6

def sum_of_square(n):
    sum = n*(n+1)*(2*n+1)/6
    return sum

num = int(input("Enter a number: "))
sum = sum_of_square(num)
print('Your sum of Square is: ', sum)

