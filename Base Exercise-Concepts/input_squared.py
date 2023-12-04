# Tale two #s from user input and calculate the result of second number to the power of the first number

# Exponents are depicted as two asterisks ** 
# 4 to power 3 is 4**3

# Python built in function called 'pow' can also produce the power function

power = int(input("Enter your power level: \n"))
base = int(input("Enter your base level: \n"))

print(f"Base level, {base} raised to the power of {power}: \n", base**power )


result = pow(base, power)

print('Your Result is: ', result)