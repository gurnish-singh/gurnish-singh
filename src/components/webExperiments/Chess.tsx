import { useState, useEffect } from 'react';
// Main App
import { Button } from '../ui/button';
import { getPawnMoves, getKnightMoves, getRookMoves, getBishopMoves, getQueenMoves, getKingMoves } from './moveHelper';
export default function Chess() {

    const [currentTurn, setTurn] = useState(false);
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
        board[4][5].piece = '♗';
        board[0][3].piece = '♛';
        board[7][4].piece = '♔';
        board[0][4].piece = '♚';
        board[7][3].piece = '♕';
        return board;
    });
    useEffect(() => { }, []);
    function reversePositions() {
        setTurn((turn) => !turn);
        setChessPositions((prev) => {
            prev.map((row) => [...row.reverse()]);
            return [...prev].reverse();
        });
    }
    function handlePieceClick(row: number, col: number) {
        setChessPositions((positions) => {
            const piece = positions[row][col].piece;
            let validMoves: [number, number][] = [];
            switch (piece) {
                case '♙':
                case '♟':
                    validMoves = getPawnMoves(positions, row, col, currentTurn);
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
                    {'Play as ' + (currentTurn ? ' White' : 'Black')}
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
                                                    (_j % 2 == 1) == (_i % 2 == 1) ? '#C7E0C1' : '#F5ECE6',
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
