# require "pry"

def fibonacci(num)
  return 0 if num == 0
  # binding.pry
  fib_arr = [0, 1]
  counter = num - 1

  counter.times do |index|
    new_fib_num = fib_arr[-1] + fib_arr[-2]
    fib_arr.push new_fib_num
  end
  fib_arr[-1]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
