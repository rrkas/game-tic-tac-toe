import curses
import random


def print_board(stdscr, board, cursor_x, cursor_y):
    stdscr.clear()

    curses.start_color()
    curses.init_pair(1, curses.COLOR_BLACK, curses.COLOR_YELLOW)

    for row in range(len(board)):
        for col in range(len(board[row])):
            if cursor_x == col and cursor_y == row:
                stdscr.addstr(
                    row*2,
                    col*2,
                    board[row][col],
                    curses.color_pair(1),
                )
            else:
                stdscr.addstr(
                    row*2,
                    col*2,
                    board[row][col] if board[row][col] != " " else "_",
                )

            if col != len(board[row]) - 1:
                stdscr.addstr(
                    row*2,
                    (col*2)+1,
                    "║",
                )

    stdscr.refresh()


def check_winner(board, player):
    for row in board:
        if all(cell == player for cell in row):
            return True

    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    if all(board[i][i] == player for i in range(3)) or all(
        board[i][2 - i] == player for i in range(3)
    ):
        return True

    return False


def is_draw(board):
    return all(cell != " " for row in board for cell in row)

def computer_move(board, computer_player):
    # Simple random move for the computer
    empty_cells = [(i, j) for i in range(3) for j in range(3) if board[i][j] == " "]
    if empty_cells:
        row, col = random.choice(empty_cells)
        board[row][col] = computer_player
        

def main(stdscr):
    board = [[" " for _ in range(3)] for _ in range(3)]
    cursor_x, cursor_y = 0, 0
    current_player = "X"
    computer_player = "O"

    stdscr.clear()
    stdscr.refresh()

    while True:
        if current_player == computer_player:
            computer_move(board, computer_player)
        else:
            print_board(stdscr, board, cursor_x, cursor_y)
            key = stdscr.getch()

            if key == curses.KEY_ENTER or key == 10:
                if board[cursor_y][cursor_x] == " ":
                    board[cursor_y][cursor_x] = current_player
            else:
                if key == curses.KEY_RIGHT and cursor_x < 2:
                    cursor_x += 1
                elif key == curses.KEY_LEFT and cursor_x > 0:
                    cursor_x -= 1
                elif key == curses.KEY_DOWN and cursor_y < 2:
                    cursor_y += 1
                elif key == curses.KEY_UP and cursor_y > 0:
                    cursor_y -= 1
                
                continue

        if check_winner(board, current_player):
            print_board(stdscr, board, cursor_x, cursor_y)
            stdscr.addstr(
                14, 0, f"Player {current_player} wins!", curses.A_BOLD
            )
            stdscr.refresh()
            stdscr.getch()
            break
        elif is_draw(board):
            print_board(stdscr, board, cursor_x, cursor_y)
            stdscr.addstr(14, 0, "It's a draw!", curses.A_BOLD)
            stdscr.refresh()
            stdscr.getch()
            break

        current_player = "O" if current_player == "X" else "X"


if __name__ == "__main__":
    curses.wrapper(main)
