import { Bishop } from '../../../../../models/pieces/bishop';
import { Color } from '../../../../../models/pieces/color';
import { King } from '../../../../../models/pieces/king';
import { Knight } from '../../../../../models/pieces/knight';
import { Pawn } from '../../../../../models/pieces/pawn';
import { Point } from '../../../../../models/pieces/point';
import { Queen } from '../../../../../models/pieces/queen';
import { Rook } from '../../../../../models/pieces/rook';
import { UnicodeConstants } from '../../../../../utils/unicode-constants';
export class DefaultFenProcessor {
    process(notation, engineFacade) {
        let fen = notation;
        if (notation) {
            engineFacade.board.reverted = false;
            engineFacade.board.pieces = [];
            const split = fen.split('/');
            for (let i = 0; i < 8; ++i) {
                let pointer = 0;
                for (let j = 0; j < split[i].split(' ')[0].length; ++j) {
                    const chunk = split[i].charAt(j);
                    if (chunk.match(/[0-9]/)) {
                        pointer += Number(chunk);
                    }
                    else {
                        switch (chunk) {
                            case 'r':
                                engineFacade.board.pieces.push(new Rook(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_ROOK, engineFacade.board));
                                break;
                            case 'n':
                                engineFacade.board.pieces.push(new Knight(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, engineFacade.board));
                                break;
                            case 'b':
                                engineFacade.board.pieces.push(new Bishop(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_BISHOP, engineFacade.board));
                                break;
                            case 'q':
                                engineFacade.board.pieces.push(new Queen(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_QUEEN, engineFacade.board));
                                break;
                            case 'k':
                                engineFacade.board.pieces.push(new King(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KING, engineFacade.board));
                                break;
                            case 'p': {
                                const pawn = new Pawn(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_PAWN, engineFacade.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                engineFacade.board.pieces.push(pawn);
                                break;
                            }
                            case 'R':
                                engineFacade.board.pieces.push(new Rook(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_ROOK, engineFacade.board));
                                break;
                            case 'N':
                                engineFacade.board.pieces.push(new Knight(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, engineFacade.board));
                                break;
                            case 'B':
                                engineFacade.board.pieces.push(new Bishop(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_BISHOP, engineFacade.board));
                                break;
                            case 'Q':
                                engineFacade.board.pieces.push(new Queen(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_QUEEN, engineFacade.board));
                                break;
                            case 'K':
                                engineFacade.board.pieces.push(new King(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KING, engineFacade.board));
                                break;
                            case 'P': {
                                const pawn = new Pawn(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_PAWN, engineFacade.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) ||
                                    (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                engineFacade.board.pieces.push(pawn);
                                break;
                            }
                        }
                        ++pointer;
                    }
                }
            }
            this.setCurrentPlayer(engineFacade.board, fen);
            this.setCastles(engineFacade.board, fen);
            this.setEnPassant(fen);
            this.setFullMoveCount(fen);
            engineFacade.board.fen = fen;
        }
        else {
            throw Error('Incorrect FEN provided');
        }
    }
    setCurrentPlayer(board, fen) {
        if (fen) {
            const split = fen.split(' ');
            board.currentWhitePlayer = split[1] === 'w';
        }
    }
    setCastles(board, fen) {
        if (fen) {
            const split = fen.split(' ');
            const castleChunk = split[2];
            if (!castleChunk.includes('K')) {
                this.setRookAlreadyMoved(board, Color.WHITE, 7);
            }
            if (!castleChunk.includes('Q')) {
                this.setRookAlreadyMoved(board, Color.WHITE, 0);
            }
            if (!castleChunk.includes('k')) {
                this.setRookAlreadyMoved(board, Color.BLACK, 7);
            }
            if (!castleChunk.includes('q')) {
                this.setRookAlreadyMoved(board, Color.BLACK, 0);
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
    setRookAlreadyMoved(board, color, col) {
        const rook = board.pieces.find((piece) => piece.color === color && piece instanceof Rook && piece.point.col === col);
        if (rook) {
            rook.isMovedAlready = true;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mZW4tcHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy9saWIvZW5naW5lL2JvYXJkLXN0YXRlLXByb3ZpZGVyL2JvYXJkLWxvYWRlci9ub3RhdGlvbi1wcm9jZXNzb3JzL2Zlbi1sb2FkZXIvZGVmYXVsdC1mZW4tcHJvY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJMUUsTUFBTSxPQUFPLG1CQUFtQjtJQUVyQixPQUFPLENBQUMsUUFBZ0IsRUFBRSxZQUFrQztRQUMvRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxRQUFRLEVBQUU7WUFDVixZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDcEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQy9CLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7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QUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuRDtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7U0FDSjtJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFXLElBQUcsQ0FBQztJQUVoQyxZQUFZLENBQUMsR0FBVztRQUM1QixJQUFJLEdBQUcsRUFBRTtZQUNMLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksY0FBYyxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsT0FBTzthQUNWO1lBRUQsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLEtBQVksRUFBRSxLQUFZLEVBQUUsR0FBVztRQUMvRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDMUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUMvRSxDQUFDO1FBRVYsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL2JvYXJkJztcclxuaW1wb3J0IHsgQmlzaG9wIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL3BpZWNlcy9iaXNob3AnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9waWVjZXMvY29sb3InO1xyXG5pbXBvcnQgeyBLaW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL3BpZWNlcy9wYXduJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHsgUXVlZW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMvcGllY2VzL3F1ZWVuJztcclxuaW1wb3J0IHsgUm9vayB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7IFVuaWNvZGVDb25zdGFudHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91bmljb2RlLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWJzdHJhY3QtZW5naW5lLWZhY2FkZSc7XHJcbmltcG9ydCB7IE5vdGF0aW9uUHJvY2Vzc29yIH0gZnJvbSAnLi4vbm90YXRpb24tcHJvY2Vzc29yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmVuUHJvY2Vzc29yIGltcGxlbWVudHMgTm90YXRpb25Qcm9jZXNzb3Ige1xyXG5cclxuICAgIHB1YmxpYyBwcm9jZXNzKG5vdGF0aW9uOiBzdHJpbmcsIGVuZ2luZUZhY2FkZTogQWJzdHJhY3RFbmdpbmVGYWNhZGUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmVuID0gbm90YXRpb247XHJcbiAgICAgICAgaWYgKG5vdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZC5yZXZlcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmQucGllY2VzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZmVuLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNwbGl0W2ldLnNwbGl0KCcgJylbMF0ubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IHNwbGl0W2ldLmNoYXJBdChqKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmsubWF0Y2goL1swLTldLykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlciArPSBOdW1iZXIoY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJvb2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUG9pbnQoaSwgcG9pbnRlciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvci5CTEFDSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfUk9PSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEtuaWdodChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5CTEFDS19LTklHSFQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQmlzaG9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0JJU0hPUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFF1ZWVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1FVRUVOLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgS2luZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLkJMQUNLLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5CTEFDS19LSU5HLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXduID0gbmV3IFBhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuQkxBQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfUEFXTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXduLmNvbG9yID09PSBDb2xvci5CTEFDSyAmJiBwYXduLnBvaW50LnJvdyAhPT0gMSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhd24uY29sb3IgPT09IENvbG9yLldISVRFICYmIHBhd24ucG9pbnQucm93ICE9PSA2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXduLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKHBhd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUm9vayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9ST09LLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ04nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEtuaWdodChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9LTklHSFQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQmlzaG9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLldISVRFX0JJU0hPUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdRJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBRdWVlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yLldISVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pY29kZUNvbnN0YW50cy5XSElURV9RVUVFTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZUZhY2FkZS5ib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdLJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmQucGllY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBLaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvaW50KGksIHBvaW50ZXIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmljb2RlQ29uc3RhbnRzLldISVRFX0tJTkcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXduID0gbmV3IFBhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQb2ludChpLCBwb2ludGVyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3IuV0hJVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUEFXTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXduLmNvbG9yID09PSBDb2xvci5CTEFDSyAmJiBwYXduLnBvaW50LnJvdyAhPT0gMSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhd24uY29sb3IgPT09IENvbG9yLldISVRFICYmIHBhd24ucG9pbnQucm93ICE9PSA2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXduLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lRmFjYWRlLmJvYXJkLnBpZWNlcy5wdXNoKHBhd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsrcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBsYXllcihlbmdpbmVGYWNhZGUuYm9hcmQsIGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FzdGxlcyhlbmdpbmVGYWNhZGUuYm9hcmQsIGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RW5QYXNzYW50KGZlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnVsbE1vdmVDb3VudChmZW4pO1xyXG4gICAgICAgICAgICBlbmdpbmVGYWNhZGUuYm9hcmQuZmVuID0gZmVuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbmNvcnJlY3QgRkVOIHByb3ZpZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEN1cnJlbnRQbGF5ZXIoYm9hcmQ6IEJvYXJkLCBmZW46IHN0cmluZykge1xyXG4gICAgICAgIGlmIChmZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBmZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgYm9hcmQuY3VycmVudFdoaXRlUGxheWVyID0gc3BsaXRbMV0gPT09ICd3JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDYXN0bGVzKGJvYXJkOiBCb2FyZCwgZmVuOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gZmVuLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhc3RsZUNodW5rID0gc3BsaXRbMl07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhc3RsZUNodW5rLmluY2x1ZGVzKCdLJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9va0FscmVhZHlNb3ZlZChib2FyZCwgQ29sb3IuV0hJVEUsIDcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhc3RsZUNodW5rLmluY2x1ZGVzKCdRJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9va0FscmVhZHlNb3ZlZChib2FyZCwgQ29sb3IuV0hJVEUsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhc3RsZUNodW5rLmluY2x1ZGVzKCdrJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9va0FscmVhZHlNb3ZlZChib2FyZCwgQ29sb3IuQkxBQ0ssIDcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhc3RsZUNodW5rLmluY2x1ZGVzKCdxJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9va0FscmVhZHlNb3ZlZChib2FyZCwgQ29sb3IuQkxBQ0ssIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RnVsbE1vdmVDb3VudChmZW46IHN0cmluZykge31cclxuXHJcbiAgICBwcml2YXRlIHNldEVuUGFzc2FudChmZW46IHN0cmluZykge1xyXG4gICAgICAgIGlmIChmZW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBmZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgY29uc3QgZW5QYXNzYW50UG9pbnQgPSBzcGxpdFszXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlblBhc3NhbnRQb2ludCA9PT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRSb29rQWxyZWFkeU1vdmVkKGJvYXJkOiBCb2FyZCwgY29sb3I6IENvbG9yLCBjb2w6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJvb2sgPSBib2FyZC5waWVjZXMuZmluZChcclxuICAgICAgICAgICAgKHBpZWNlKSA9PiBwaWVjZS5jb2xvciA9PT0gY29sb3IgJiYgcGllY2UgaW5zdGFuY2VvZiBSb29rICYmIHBpZWNlLnBvaW50LmNvbCA9PT0gY29sXHJcbiAgICAgICAgKSBhcyBSb29rO1xyXG5cclxuICAgICAgICBpZiAocm9vaykge1xyXG4gICAgICAgICAgICByb29rLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==