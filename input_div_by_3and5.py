# for a given number find all numbers smaller than the num.numbers should be divisible by 3 and 5

# Solution 1 
def divisible_by_3and5(num):
    result = []
    for i in range(num):
        if i%3==0 and i%5 ==0:
            result.append(i)
    return result

num = int(input("Enter your number: "))
result = divisible_by_3and5(num)
print(result)


# Solution 2
num2 = int(input("Enter your number: "))

result2 =[]
i = 1 

while i <= num2:
    if i%3==0 and i%5==0:
        result2.append(i)
    i=i+1

print(result2)

