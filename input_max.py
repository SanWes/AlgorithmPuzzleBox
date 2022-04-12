# Find largest of three nums

n1 = int(input("First number: "))
n2 = int(input("Second number: "))
n3 = int(input("Third number: "))

largest = n1

if (n2 >= n1) and (n2 >= n3):
    largest = n2
elif (n3 >= n1) and (n3 >= n2):
    largest = n3
else:
    largest = n1
    
# simple solution
largest = max(n1,n2,n3)


print("Largest number entered is: ", largest)


