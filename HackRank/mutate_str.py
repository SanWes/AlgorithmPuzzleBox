def mutate_string(string, position, character):
    
    # slice then join approach 
    string = string[:position] + character + string[position+1:]
    
    # s[:pos] = string from index 0 to pos
    # s[pos+1:] = string from index pos+1 to last index
    
    return string

    #  abrackadabra -- failed attempt need to add + 1 for after added char

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)