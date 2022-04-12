"""
You borrowed $5000 for 2 years with 2% interest per year 

Calculate the simple interest to know how much to pay?

Hint: 
    Take the principal amount, duration, and interest rate. 
    Multiply the three together.
    convert the percent to a fraction by dividing it by 100.
"""
principle = int(input("Money you borrowed: "))
interest_rate = float(input("Interest Rate: "))
time = float(input("Overall Duration: "))

simple_interest = principle*time*(interest_rate/100)
print("Simple interst is: ", simple_interest)

def calc_interest(principle, duration, int_rate):
    simple_interest = principle*duration*(int_rate/100)
    return simple_interest

a = calc_interest(5000, 2, 2)

print("The simple interest on the borrowed amount is: ",a)



