
export const isInsideBoard = (r: number, c: number) =>
    r >= 0 && r < 8 && c >= 0 && c < 8;

export function getPawnMoves(
    board: any[][],
    row: number,
    col: number,
    playingAsBlack: boolean,
) {
    const moves: [number, number][] = [];
    const direction = playingAsBlack ? (board[row][col].isBlack ? -1 : +1) : (board[row][col].isBlack ? +1 : -1);
    const startRow = playingAsBlack ? (board[row][col].isBlack ? 6 : +1) : (board[row][col].isBlack ? +1 : 6);
    // Forward 1
    if (isInsideBoard(row + direction, col) &&
        board[row + direction][col].piece === '0') {
        moves.push([row + direction, col]);

        // Forward 2 (only from start)
        if (row === startRow &&
            board[row + 2 * direction][col].piece === '0') {
            moves.push([row + 2 * direction, col]);
        }
    }
    // Capture diagonally
    for (const dc of [-1, 1]) {
        const r = row + direction;
        const c = col + dc;
        if (
            isInsideBoard(r, c) &&
            board[r][c].piece !== '0'
            && board[r][c].isBlack !== board[row][col].isBlack
        ) {
            moves.push([r, c]);
        }
    }
    return moves;
}
export function getRookMoves(board: any[][], row: number, col: number) {
    const moves: [number, number][] = [];
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    for (const [dr, dc] of directions) {
        let r = row + dr;
        let c = col + dc;

        while (isInsideBoard(r, c)) {
            if (board[r][c].piece === '0') {
                moves.push([r, c]);
            } else {
                if (board[r][c].isBlack !== board[row][col].isBlack) {
                    console.log(board[r][c].isBlack, board[row][col].isBlack)
                    moves.push([r, c]); // capture
                }
                break;
            }
            r += dr;
            c += dc;
        }
    }

    return moves;
}
export function getKnightMoves(board: any[][], row: number, col: number) {
    const moves: [number, number][] = [];
    const jumps = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2],
    ];

    for (const [dr, dc] of jumps) {
        const r = row + dr;
        const c = col + dc;
        console.log(r, c)
        if (isInsideBoard(r, c) && (board[r][c].isBlack !== board[row][col].isBlack || board[r][c].piece == '0')) {
            moves.push([r, c]);
        }
    }
    return moves;
}
export function getBishopMoves(board: any[][], row: number, col: number) {
    const moves: [number, number][] = [];
    const directions = [
        [1, 1], [1, -1],
        [-1, 1], [-1, -1],
    ];

    for (const [dr, dc] of directions) {
        let r = row + dr;
        let c = col + dc;

        while (isInsideBoard(r, c)) {
            if (board[r][c].piece === '0') {
                moves.push([r, c]);
            } else {
                if (board[r][c].isBlack !== board[row][col].isBlack)
                    moves.push([r, c]); // capture
                break;
            }
            r += dr;
            c += dc;
        }
    }

    return moves;
}
export function getKingMoves(board: any[][], row: number, col: number) {
    const moves: [number, number][] = [];
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1],
    ];

    for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;

        if (isInsideBoard(r, c) && board[r][c].isBlack !== board[row][col].isBlack) {
            moves.push([r, c]);
        }
    }

    return moves;
}
export function getQueenMoves(board: any[][], row: number, col: number) {
    return [
        ...getRookMoves(board, row, col),
        ...getBishopMoves(board, row, col),
    ];
}



