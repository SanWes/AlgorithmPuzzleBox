# For a given num, find the sum of every digit

# Pseudo Code
# Break down num into digits by taking out last digit. divide num by 10 and take remainder, which will be last digit.
# After this shorten num by one digit

def get_sum_of_digits(num):
    sum = 0
    while (num > 0):
        last_digit = num % 10
        sum = sum + last_digit
        # set num to be num div by 10 without the remainder
        num = num // 10  #removes last digit
    return sum

user_num = int(input("Entera number: "))
total = get_sum_of_digits(user_num)
print("The total sum of digits is: ", total)

