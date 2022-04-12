"""
Take money borrowed, interest and duration to calculate compound interest rate 

ci formula: 
    A  = P (1+ r/100)^t
        P = principal amount
        r = interest rate in percentage
        t = time
"""

def compound_interst(principal, rate, time):
    
    interest  = principal*((1+ rate/100)**time)
    return interest


answer = compound_interst(5000, 2, 2)
print(answer)