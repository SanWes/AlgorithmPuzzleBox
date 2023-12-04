'''
Given the names and grades for each student in a class of  students, store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

Note: If there are multiple students with the second lowest grade, order their names alphabetically and print each name on a new line.
'''


if __name__ == '__main__':
    
    n = int(input())
    results = []
    grades = []
    
    for _ in range(n):
        name = input()
        score = float(input())
        
        results.append([name, score])
        grades.append(score) # to calculate 2nd lowest x[1]
        
        
    # print(results)
#     print(grades)
    
    grades = sorted(set(grades)) #sorted unique values 
    # print(grades)
    
    
    second_lowest_grade = grades[1] #the second element in unique sorted list is the second lowest grade value
    # print(second_lowest_grade)
    
    second_lowest_names = []
    
    for val in results:
        if second_lowest_grade == val[1]: #val[1] is looking at the score of the student
            second_lowest_names.append(val[0]) #add the student name to the 2nd lowest list

    # print(second_lowest_names) #unsorted names 
    second_lowest_names.sort()
    # print(second_lowest_names) #sorted names
    for nm in second_lowest_names:
        print(nm)
    # sort the resulting names in alphabetical order and print
    