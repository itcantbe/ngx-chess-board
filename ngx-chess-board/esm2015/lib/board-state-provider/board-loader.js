import { Bishop } from '../models/pieces/bishop';
import { Color } from '../models/pieces/color';
import { King } from '../models/pieces/king';
import { Knight } from '../models/pieces/knight';
import { Pawn } from '../models/pieces/pawn';
import { Point } from '../models/pieces/point';
import { Queen } from '../models/pieces/queen';
import { Rook } from '../models/pieces/rook';
import { UnicodeConstants } from '../utils/unicode-constants';
export class BoardLoader {
    constructor(board) {
        this.board = board;
    }
    addPieces() {
        this.board.pieces = [];
        // piony czarne
        for (let i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(1, i), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(0, 0), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(0, 1), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 2), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(0, 3), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(0, 4), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 5), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(0, 6), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(0, 7), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        // piony biale
        for (let i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(6, i), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(7, 0), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(7, 1), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 2), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(7, 3), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(7, 4), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 5), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(7, 6), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(7, 7), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.calculateFEN();
    }
    loadFEN(fen) {
        console.log(fen);
        if (fen) {
            this.board.reverted = false;
            this.board.pieces = [];
            const split = fen.split('/');
            for (let i = 0; i < 8; ++i) {
                let pointer = 0;
                for (let j = 0; j < 8; ++j) {
                    const chunk = split[i].charAt(j);
                    if (chunk.match(/[0-9]/)) {
                        pointer += Number(chunk);
                    }
                    else {
                        switch (chunk) {
                            case 'r':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
                                break;
                            case 'n':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
                                break;
                            case 'b':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
                                break;
                            case 'q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
                                break;
                            case 'k':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
                                break;
                            case 'p': {
                                const pawn = new Pawn(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                            case 'R':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
                                break;
                            case 'N':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
                                break;
                            case 'B':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
                                break;
                            case 'Q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
                                break;
                            case 'K':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
                                break;
                            case 'P': {
                                const pawn = new Pawn(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                        }
                        ++pointer;
                    }
                }
            }
            this.setCurrentPlayer(fen);
            this.setCastles(fen);
            this.setEnPassant(fen);
            this.setFullMoveCount(fen);
        }
        else {
            throw Error('Incorrect FEN provided');
        }
    }
    setBoard(board) {
        this.board = board;
    }
    setCurrentPlayer(fen) {
        if (fen) {
            const split = fen.split(' ');
            this.board.currentWhitePlayer = split[1] === 'w';
        }
    }
    setCastles(fen) {
        if (fen) {
            const split = fen.split(' ');
            const castleChunk = split[2];
            if (!castleChunk.includes('K')) {
                this.setRookAlreadyMoved(Color.WHITE, 7);
            }
            if (!castleChunk.includes('Q')) {
                this.setRookAlreadyMoved(Color.WHITE, 0);
            }
            if (!castleChunk.includes('k')) {
                this.setRookAlreadyMoved(Color.BLACK, 7);
            }
            if (!castleChunk.includes('q')) {
                this.setRookAlreadyMoved(Color.BLACK, 0);
            }
        }
    }
    setFullMoveCount(fen) { }
    setEnPassant(fen) {
        if (fen) {
            const split = fen.split(' ');
            const enPassantPoint = split[3];
            if (enPassantPoint === '-') {
                return;
            }
            // if()
        }
    }
    setRookAlreadyMoved(color, col) {
        const rook = this.board.pieces.find((piece) => piece.color === color && piece instanceof Rook && piece.point.col === col);
        if (rook) {
            rook.isMovedAlready = true;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxNQUFNLE9BQU8sV0FBVztJQUdwQixZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDdkIsZUFBZTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzRztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV4RyxjQUFjO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNHO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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SyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksY0FBYyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsT0FBTzthQUNWO1lBRUQsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLEtBQVksRUFBRSxHQUFXO1FBQ2pELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDL0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUMvRSxDQUFDO1FBRVYsSUFBRyxJQUFJLEVBQUU7WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9iaXNob3AnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvY29sb3InO1xyXG5pbXBvcnQgeyBLaW5nIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9wYXduJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3F1ZWVuJztcclxuaW1wb3J0IHsgUm9vayB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7IFVuaWNvZGVDb25zdGFudHMgfSBmcm9tICcuLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmRMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBib2FyZDogQm9hcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm9hcmQ6IEJvYXJkKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBpZWNlcygpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IFtdO1xyXG4gICAgICAgIC8vIHBpb255IGN6YXJuZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IFBhd24obmV3IFBvaW50KDEsIGkpLCBDb2xvci5CTEFDSywgVW5pY29kZUNvbnN0YW50cy5CTEFDS19QQVdOLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IFJvb2sobmV3IFBvaW50KDAsIDApLCBDb2xvci5CTEFDSywgVW5pY29kZUNvbnN0YW50cy5CTEFDS19ST09LLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgS25pZ2h0KG5ldyBQb2ludCgwLCAxKSwgQ29sb3IuQkxBQ0ssIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfS05JR0hULCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgQmlzaG9wKG5ldyBQb2ludCgwLCAyKSwgQ29sb3IuQkxBQ0ssIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfQklTSE9QLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgUXVlZW4obmV3IFBvaW50KDAsIDMpLCBDb2xvci5CTEFDSywgVW5pY29kZUNvbnN0YW50cy5CTEFDS19RVUVFTiwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEtpbmcobmV3IFBvaW50KDAsIDQpLCBDb2xvci5CTEFDSywgVW5pY29kZUNvbnN0YW50cy5CTEFDS19LSU5HLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgQmlzaG9wKG5ldyBQb2ludCgwLCA1KSwgQ29sb3IuQkxBQ0ssIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfQklTSE9QLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgS25pZ2h0KG5ldyBQb2ludCgwLCA2KSwgQ29sb3IuQkxBQ0ssIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfS05JR0hULCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgUm9vayhuZXcgUG9pbnQoMCwgNyksIENvbG9yLkJMQUNLLCBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1JPT0ssIHRoaXMuYm9hcmQpKTtcclxuXHJcbiAgICAgICAgLy8gcGlvbnkgYmlhbGVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKG5ldyBQYXduKG5ldyBQb2ludCg2LCBpKSwgQ29sb3IuV0hJVEUsIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUEFXTiwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKG5ldyBSb29rKG5ldyBQb2ludCg3LCAwKSwgQ29sb3IuV0hJVEUsIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUk9PSywgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEtuaWdodChuZXcgUG9pbnQoNywgMSksIENvbG9yLldISVRFLCBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tOSUdIVCwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEJpc2hvcChuZXcgUG9pbnQoNywgMiksIENvbG9yLldISVRFLCBVbmljb2RlQ29uc3RhbnRzLldISVRFX0JJU0hPUCwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IFF1ZWVuKG5ldyBQb2ludCg3LCAzKSwgQ29sb3IuV0hJVEUsIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUVVFRU4sIHRoaXMuYm9hcmQpKTtcclxuICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKG5ldyBLaW5nKG5ldyBQb2ludCg3LCA0KSwgQ29sb3IuV0hJVEUsIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfS0lORywgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEJpc2hvcChuZXcgUG9pbnQoNywgNSksIENvbG9yLldISVRFLCBVbmljb2RlQ29uc3RhbnRzLldISVRFX0JJU0hPUCwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEtuaWdodChuZXcgUG9pbnQoNywgNiksIENvbG9yLldISVRFLCBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tOSUdIVCwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IFJvb2sobmV3IFBvaW50KDcsIDcpLCBDb2xvci5XSElURSwgVW5pY29kZUNvbnN0YW50cy5XSElURV9ST09LLCB0aGlzLmJvYXJkKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmQuY2FsY3VsYXRlRkVOKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZFTihmZW46IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZlbik7XHJcbiAgICAgICAgaWYgKGZlbikge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnJldmVydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZmVuLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gc3BsaXRbaV0uY2hhckF0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaHVuay5tYXRjaCgvWzAtOV0vKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyICs9IE51bWJlcihjaHVuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJvb2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoaSwgcG9pbnRlciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvci5CTEFDSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfUk9PSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgS25pZ2h0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0tOSUdIVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJpc2hvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5CTEFDS19CSVNIT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFF1ZWVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1FVRUVOLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBLaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0tJTkcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXduID0gbmV3IFBhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfUEFXTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF3bi5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgJiYgcGF3bi5wb2ludC5yb3cgIT09IDEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXduLmNvbG9yID09PSBDb2xvci5XSElURSAmJiBwYXduLnBvaW50LnJvdyAhPT0gNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF3bi5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gocGF3bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdSJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUm9vayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9ST09LLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdOJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgS25pZ2h0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tOSUdIVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEJpc2hvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9CSVNIT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBRdWVlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9RVUVFTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEtpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoaSwgcG9pbnRlciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvci5XSElURSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfS0lORyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXduID0gbmV3IFBhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUEFXTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF3bi5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgJiYgcGF3bi5wb2ludC5yb3cgIT09IDEpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXduLmNvbG9yID09PSBDb2xvci5XSElURSAmJiBwYXduLnBvaW50LnJvdyAhPT0gNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF3bi5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gocGF3bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKytwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UGxheWVyKGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FzdGxlcyhmZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVuUGFzc2FudChmZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZ1bGxNb3ZlQ291bnQoZmVuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSW5jb3JyZWN0IEZFTiBwcm92aWRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCb2FyZChib2FyZDogQm9hcmQpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDdXJyZW50UGxheWVyKGZlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGZlbikge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IGZlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciA9IHNwbGl0WzFdID09PSAndyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q2FzdGxlcyhmZW46IHN0cmluZykge1xyXG4gICAgICAgIGlmIChmZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBmZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgY29uc3QgY2FzdGxlQ2h1bmsgPSBzcGxpdFsyXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2FzdGxlQ2h1bmsuaW5jbHVkZXMoJ0snKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb29rQWxyZWFkeU1vdmVkKENvbG9yLldISVRFLCA3KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjYXN0bGVDaHVuay5pbmNsdWRlcygnUScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJvb2tBbHJlYWR5TW92ZWQoQ29sb3IuV0hJVEUsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhc3RsZUNodW5rLmluY2x1ZGVzKCdrJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9va0FscmVhZHlNb3ZlZChDb2xvci5CTEFDSywgNyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY2FzdGxlQ2h1bmsuaW5jbHVkZXMoJ3EnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb29rQWxyZWFkeU1vdmVkKENvbG9yLkJMQUNLLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEZ1bGxNb3ZlQ291bnQoZmVuOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRFblBhc3NhbnQoZmVuOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZmVuLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuUGFzc2FudFBvaW50ID0gc3BsaXRbM107XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5QYXNzYW50UG9pbnQgPT09ICctJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Um9va0FscmVhZHlNb3ZlZChjb2xvcjogQ29sb3IsIGNvbDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vayA9IHRoaXMuYm9hcmQucGllY2VzLmZpbmQoXHJcbiAgICAgICAgICAgIChwaWVjZSkgPT4gcGllY2UuY29sb3IgPT09IGNvbG9yICYmIHBpZWNlIGluc3RhbmNlb2YgUm9vayAmJiBwaWVjZS5wb2ludC5jb2wgPT09IGNvbFxyXG4gICAgICAgICkgYXMgUm9vaztcclxuXHJcbiAgICAgICAgaWYocm9vaykge1xyXG4gICAgICAgICAgICByb29rLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19