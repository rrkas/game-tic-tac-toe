import os
import sys
# import curses


def clear_screen():
    os.system("clear" if os.name == "posix" else "cls")


class Bcolors:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKCYAN = "\033[96m"
    OKGREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


def draw_matrix(m: list):
    def _(cell):
        char = {
            -1: " ",
            0: "◯",
            1: "╳",
        }[cell["value"]]

        if cell["selected"]:
            char = f"{Bcolors.UNDERLINE}{Bcolors.UNDERLINE}{char}{Bcolors.ENDC}"

        return char

    row = m[0]
    print(f" {_(row[0])} ║ {_(row[1])} ║ {_(row[2])} ")
    print(f"═══╬═══╬═══")
    row = m[1]
    print(f" {_(row[0])} ║ {_(row[1])} ║ {_(row[2])} ")
    print(f"═══╬═══╬═══")
    row = m[2]
    print(f" {_(row[0])} ║ {_(row[1])} ║ {_(row[2])} ")


def handle_input(m: list):
    # stdscr = curses.initscr()
    # curses.noecho()
    pass


if __name__ == "__main__":
    matrix = [
        [
            dict(selected=True, value=0),
            dict(selected=False, value=-1),
            dict(selected=False, value=0),
        ],
        [
            dict(selected=False, value=-1),
            dict(selected=False, value=-1),
            dict(selected=False, value=1),
        ],
        [
            dict(selected=False, value=-1),
            dict(selected=False, value=-1),
            dict(selected=False, value=-1),
        ],
    ]
    winner = None

    while not winner:
        clear_screen()
        draw_matrix(matrix)
        key = sys.stdin.read(1)

        break
