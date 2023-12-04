# Writer a function that will remove duplicate entries from a list 

# Pseudo code
# 1 
# Make an empty list that will add items only if it is not present already

def remove_duplicate(items):
    unique = []
    for i in items:
        if i not in unique:
            unique.append(i)
    return unique

numbers = [22,11,3,1,4,5,5,2,2,11,66,89]
names = ["Groj", "Jora", "RevTa", "RevTa" ]

a = remove_duplicate(numbers)
print(a)
b = remove_duplicate(names)
print(b)