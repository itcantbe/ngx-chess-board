import { Piece } from "../models/pieces/piece";

export class HistoryMove {
    move: string;
    piece: Piece;
    color: string;
    x: boolean;
    check: boolean;
    stalemate: boolean;
    premove: boolean;
    mate: boolean;

    constructor(move: string, piece: Piece, color: string, captured: boolean, premove: boolean) {
        this.move = move;
        this.piece = piece;
        this.color = color;
        this.x = captured;
        this.premove = premove
    }

    setGameStates(check: boolean, stalemate: boolean, mate: boolean): void {
        this.check = check;
        this.stalemate = stalemate;
        this.mate = mate;
    }

}
