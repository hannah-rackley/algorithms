#First algorithm problem. Find the sum of all numbers divisible by 3 or 5 below a specified number.
def sum_of_multiples(number):
    sum = 0
    for i in range(0, number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum

print sum_of_multiples(1000)


#Second algorithm problem. Find the sum of all even values in the Fibonacci sequence(not exceeding 4 million).
def find_Fibonacci_Sum(number):
    current = 2
    first = 1
    second = 2
    total = 2
    while current < number:
        current = first + second
        first = second
        second = current
        if current % 2 == 0:
            total += current
    return total

print find_Fibonacci_Sum(4000000)

#Third algorithm problem. Find the largest prime factor of a given number.

def prime_factors(number):
    current = number
    factor = 2
    keep_looping = True

    while keep_looping:
        while current % factor > 0:
            factor += 1
        if current == factor:
            keep_looping = False
        current /= factor
    return factor

print prime_factors(600851475143)
print prime_factors(13195)
print prime_factors(45)

# def primes(number):
#     remainder = number
#     factor = 2

#     while remainder !=1:
#         if remainder % factor == 0:
#             remainder /= factor
#         else:
#             factor += 1
#     return factor
