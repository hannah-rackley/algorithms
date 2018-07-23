#Algorithm 1
def find_smallest_pos(test_number):
    number = test_number
    starting_number = 0
    while number != starting_number:
        for i in range(test_number, 1, -1):
            if number % i > 0:
                number += test_number
                break
        
        starting_number += test_number
    return number

print find_smallest_pos(20)

#Algorithm
def largest_palindrome():
    num1 = 99
    num2 = 99
    product = num1 * num2
    string_product = str(product)
    split_string = string_product.split("")
    keep_running = True
    num = -1
    while keep_running:
        product = num1 * num2
        string_product = str(product)
        split_string = string_product.split("")
        num = -1
        for i in range(len(split_string) + 1):
            if split_string[i] != split_string[i+num]:
                if num2 < (num1 - 10):
                    num1 -= 1
                elif num1 < (num2 - 10):
                    num2 -= 1
                else:
                    num2 -= 2
                break
            else:
                num -= 1
    

            

print largest_palindrome()

def bottles_of_beer(number):
     
    while number > 1:
        while number % 7 != 0 and number % 5 != 0:
            print '%i bottles of beer on the wall' % number
            number -= 1
        while number % 7 == 0 and number % 5 == 0:
            print 'miller lite' 
            number -= 1
        while number % 7 == 0:
            print 'miller'
            number -= 1
        while number % 5 == 0:
            print 'lite'
            number -= 1

print bottles_of_beer(99)