def print_matrix(row, col):
    print_string = ''
    n = 1
    if row == 1:
        if col == 1:
            print_string += '..+\n'
            print_string += '..|\n'
            print_string += '+-+\n'
        print_string += '..+'
        for i in range(col - 1):
            print_string += '-+'
        print_string += '\n'    
        print_string += '..|'
        for i in range(col - 1):
            print_string += '.|'
        print_string += '\n'            
        print_string += '+-+'
        for i in range(col - 1):
            print_string += '-+'
        print_string += '\n'
        return print_string
    else:
        # print_string += '..+\n'
        # print_string += '..|\n'
        # print_string += '+-+\n'
        for j in range(row - 1):
            print_string += '|.|'
            for i in range(col - 1):
                print_string += '.|'
            print_string += '\n'            
            print_string += '+-+'
            for i in range(col - 1):
                print_string += '-+'
            print_string += '\n'
        return print_string

print(print_matrix(2,2))        

# ..+-+-+-+
# ..|.|.|.|
# +-+-+-+-+
# |.|.|.|.|
# +-+-+-+-+
# |.|.|.|.|
# +-+-+-+-+