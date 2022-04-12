# Accept x amount of numbers from user. This will be the length of the list
len = int(input("How many numbers you want to enter?: "))
nums = []

# Run a for loop to collect x amount of numbers and add to the empty list
for i in range(0, len):
    num = int(input("Enter a number: "))
    nums.append(num)

# using the 'sum' function, pass the nums list and set to variable
total = sum(nums)
# calculate the average
avg = total/len

print("Average of numbers entered =  ", round(avg,2))