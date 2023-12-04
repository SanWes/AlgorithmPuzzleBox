# Count Vowels 
# Create a function that will analyze a sentence and determine how many vowels are present

# Pseudo Code 
# Create a list of the 5 vowels a, e, i, o, u 
# Create an count that will increase with each vowels present 
# Create a function that will accept parameter of a sentence and loop through this input to count the amount of vowels

# Keep in mind that user input may have upper and lower case vowels 
# .upper() /  .lower() will convert input to the respective case

vowels = ["a", "e", "i", "o", "u"]
# vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] # - use this list if you do not want to use .upper() or .lower()


def check_vowels(sentence): 
    count_vowels = 0
    for v in sentence:
        if v.lower() in vowels:
            count_vowels += 1
    return count_vowels
        
a = "well hello there " # output = 5 
b = "SI ESTA TRABAJANDO" # output = 7
c = "JuST tO bE surE LEts do AnOther onE" # output = 12


av = check_vowels(a)
print(av)
bv = check_vowels(b)
print(bv)
cv = check_vowels(c)
print(cv)


# if char == ' ':
#     count += 1
    
# count += 1