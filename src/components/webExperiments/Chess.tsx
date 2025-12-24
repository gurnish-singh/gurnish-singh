import { useState, useEffect } from 'react';
// Main App
import { Button } from '../ui/button';
import { getPawnMoves, getKnightMoves, getRookMoves, getBishopMoves, getQueenMoves, getKingMoves } from './moveHelper';
export default function Chess() {

    const [currentTurn, setTurn] = useState(false);
    const [playingAsBlack, setPlayingAsBlack] = useState(false);
    const [currentlySelected, setCurrentlySelected] = useState({ row: -1, col: -1 });
    const [chessPositions, setChessPositions] = useState(() => {
        const board = Array.from({ length: 8 }, () =>
            Array.from({ length: 8 }, () => ({ piece: '0', isSelected: false, canMoveTo: false, isBlack: false }))
        );
        // Set rooks directly in initial state
        [1, 6].map((k) => {
            for (let i = 0; i < 8; i++) {
                board[k][i].piece = k == 1 ? '♟' : '♙';

            }
        });
        [0, 1].map((k) => {
            for (let i = 0; i < 8; i++) {
                board[k][i].isBlack = true;
            }
        });
        board[0][0].piece = '♜';
        board[7][0].piece = '♖';
        board[0][7].piece = '♜';
        board[7][7].piece = '♖';
        board[0][1].piece = '♞';
        board[7][1].piece = '♘';
        board[0][6].piece = '♞';
        board[7][6].piece = '♘';
        board[0][2].piece = '♝';
        board[7][2].piece = '♗';
        board[0][5].piece = '♝';
        board[7][5].piece = '♗';
        board[0][3].piece = '♛';
        board[7][4].piece = '♔';
        board[0][4].piece = '♚';
        board[7][3].piece = '♕';
        return board;
    });
    useEffect(() => { }, []);
    function reversePositions() {
        setPlayingAsBlack(prev => !prev);
        setChessPositions(prev =>
            prev
                .map(row => [...row].reverse())
                .reverse()
        );
    }
    function handlePieceClick(row: number, col: number) {
        if (currentlySelected.row == -1) {//// selecting a new piece
            if ((chessPositions[row][col].isBlack && !currentTurn) || (!chessPositions[row][col].isBlack && currentTurn)) return;
            if (chessPositions[row][col].piece !== '0') {
                setCurrentlySelected({ row, col });
            }
            setChessPositions((positions) => {
                const piece = positions[row][col].piece;
                let validMoves: [number, number][] = [];
                switch (piece) {
                    case '♙':
                    case '♟':
                        validMoves = getPawnMoves(positions, row, col, playingAsBlack);
                        break;

                    case '♜':
                    case '♖':
                        validMoves = getRookMoves(positions, row, col);
                        break;

                    case '♞':
                    case '♘':
                        validMoves = getKnightMoves(positions, row, col);
                        break;
                    case '♝':
                    case '♗':
                        validMoves = getBishopMoves(positions, row, col);
                        break;

                    case '♛':
                    case '♕':
                        validMoves = getQueenMoves(positions, row, col);
                        break;

                    case '♚':
                    case '♔':
                        validMoves = getKingMoves(positions, row, col);
                        break;
                }
                return positions.map((r, i) =>
                    r.map((cell, j) => ({
                        ...cell,
                        isSelected: i === row && j === col,
                        canMoveTo: validMoves.some(
                            ([mr, mc]) => mr === i && mc === j
                        ),
                    }))
                );
            });
        }
        // if a piece is already selected
        else {
            setChessPositions((positions) => {
                const newPositions = positions.map(row =>
                    row.map(cell => ({ ...cell }))
                );

                if (newPositions[row][col].canMoveTo) {
                    const from = newPositions[currentlySelected.row][currentlySelected.col];
                    const to = newPositions[row][col];

                    to.piece = from.piece;
                    to.isBlack = from.isBlack;

                    from.piece = '0';
                    from.isBlack = false;
                    setTurn(!currentTurn)
                }

                setCurrentlySelected({ row: -1, col: -1 });

                return newPositions.map(r =>
                    r.map(cell => ({
                        ...cell,
                        isSelected: false,
                        canMoveTo: false,
                    }))
                );
            });
        }
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <Button onClick={() => reversePositions()}>
                    {'Play as ' + (playingAsBlack ? ' White' : 'Black')}
                </Button>
                <div style={{ background: 'white', }}>
                    {chessPositions.map((i, _i) => {
                        return (
                            <div style={{ display: 'flex' }}>
                                {i.map((j, _j) => {
                                    return (
                                        <div
                                            className={`${j.isSelected ? 'selected' : ''} ${j.canMoveTo ? 'canMove' : ''}`}
                                            style={{
                                                border: '2px solid black',
                                                width: '30px',
                                                cursor: 'pointer',
                                                height: '30px',
                                                display: ' flex',
                                                justifyContent: 'center',
                                                fontSize: '20px',
                                                background:
                                                    (_j % 2 == (playingAsBlack ? 1 : 0)) == (_i % 2 == 1) ? '#6f4141ff' : '#F5ECE6',
                                            }}
                                            onClick={() => {
                                                handlePieceClick(_i, _j);
                                            }}
                                        >
                                            <p style={{ color: 'black' }}>{j.piece == '0' || j.piece}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
