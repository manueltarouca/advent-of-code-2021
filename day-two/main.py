path = 'inputs.txt'

def read_inputs():
  try:
    file = open(path, 'r')
    return file.read().splitlines()
  except:
    print('No file found.')
    return

def puzzle_one():
  print('Puzzle One')
  inputs = read_inputs()
  commands = []
  hor = 0
  ver = 0
  if inputs:
    for input in inputs:
      commands.append({ 'command': input.split(' ')[0] , 'value': input.split(' ')[1] })
  for command in commands:
    value = int(command['value'])
    if command['command'] == 'up':
      ver -= value
    elif command['command'] == 'down':
      ver += value
    elif command['command'] == 'forward':
      hor += value
    else:
      print('command not expected')
  print(hor*ver)

def puzzle_two():
  print('Puzzle Two')
  inputs = read_inputs()
  commands = []
  hor = 0
  ver = 0
  aim = 0
  depth = 0
  if inputs:
    for input in inputs:
      commands.append({ 'command': input.split(' ')[0] , 'value': input.split(' ')[1] })
  for command in commands:
    value = int(command['value'])
    if command['command'] == 'up':
      ver -= value
      aim -= value
    elif command['command'] == 'down':
      ver += value
      aim += value
    elif command['command'] == 'forward':
      hor += value
      depth = depth + aim*value
    else:
      print('command not expected')
  print(hor*depth)


def main():
  print('Advent of Code 2021 - Day Two')
  puzzle_one()
  puzzle_two()

main()