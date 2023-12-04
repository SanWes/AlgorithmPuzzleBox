# Writer a function that will not allow duplicate entries into a list 

# Pseudo code
# 1 
# Make an empty list that will add items only if it is not present already

champion = []

def new_champ(name):
    if name not in champion:
        champion.append(name)
    else:
        print("Champion entered Arena already")
    return champion

a = "Gladi"
b = "Jora"
c = "RevTa"
d = "RevTa"

# champion.extend([a,b,c,d])
# print(champion)

new_champ(a)
new_champ(b)
new_champ(c)
new_champ(c)
new_champ(a)
print(champion)