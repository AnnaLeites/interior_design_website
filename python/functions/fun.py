from sys import argv

def my_function(kind, text_input):
    cat = "https://www.shutterstock.com/image-vector/cartoon-cute-character-funny-illustration-600nw-2320715743.jpg"
    dog = "https://static.fandomspot.com/images/04/6164/00-featured-chikuwa-yuru-camp-anime.jpg"
    horse = "https://img.freepik.com/premium-vector/horse-clipart-black-outlines-vector-illustration_636653-6.jpg?w=2000"
    animals = [cat,dog,horse]
    return animals



if __name__ == "__main__":
   print(my_function(argv[1][0], argv[1][1]))