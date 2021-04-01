import { Bishop } from '../models/pieces/bishop';
import { Color } from '../models/pieces/color';
import { Knight } from '../models/pieces/knight';
import { Queen } from '../models/pieces/queen';
import { Rook } from '../models/pieces/rook';
import { UnicodeConstants } from '../utils/unicode-constants';
export class PiecePromotionResolver {
    static resolvePromotionChoice(board, piece, index) {
        const isWhite = piece.color === Color.WHITE;
        switch (index) {
            case 1:
                board.pieces.push(new Queen(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_QUEEN
                    : UnicodeConstants.BLACK_QUEEN, board));
                break;
            case 2:
                board.pieces.push(new Rook(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_ROOK
                    : UnicodeConstants.BLACK_ROOK, board));
                break;
            case 3:
                board.pieces.push(new Bishop(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_BISHOP
                    : UnicodeConstants.BLACK_BISHOP, board));
                break;
            case 4:
                board.pieces.push(new Knight(piece.point, piece.color, isWhite
                    ? UnicodeConstants.WHITE_KNIGHT
                    : UnicodeConstants.BLACK_KNIGHT, board));
                break;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9waWVjZS1wcm9tb3Rpb24vcGllY2UtcHJvbW90aW9uLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUUvQixNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBWSxFQUFFLEtBQVksRUFBRSxLQUFhO1FBQ25FLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFDRixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDYixJQUFJLEtBQUssQ0FDTCxLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxLQUFLLEVBQ1gsT0FBTztvQkFDSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsV0FBVztvQkFDOUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFDbEMsS0FBSyxDQUNSLENBQ0osQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLElBQUksSUFBSSxDQUNKLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLEtBQUssRUFDWCxPQUFPO29CQUNILENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO29CQUM3QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUNqQyxLQUFLLENBQ1IsQ0FDSixDQUFDO2dCQUNGLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2IsSUFBSSxNQUFNLENBQ04sS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsS0FBSyxFQUNYLE9BQU87b0JBQ0gsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7b0JBQy9CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQ25DLEtBQUssQ0FDUixDQUNKLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDYixJQUFJLE1BQU0sQ0FDTixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxLQUFLLEVBQ1gsT0FBTztvQkFDSCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtvQkFDL0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFDbkMsS0FBSyxDQUNSLENBQ0osQ0FBQztnQkFDRixNQUFNO1NBQ2I7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4uL21vZGVscy9ib2FyZCc7XHJcbmltcG9ydCB7IEJpc2hvcCB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcGllY2UnO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcXVlZW4nO1xyXG5pbXBvcnQgeyBSb29rIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9yb29rJztcclxuaW1wb3J0IHsgVW5pY29kZUNvbnN0YW50cyB9IGZyb20gJy4uL3V0aWxzL3VuaWNvZGUtY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaWVjZVByb21vdGlvblJlc29sdmVyIHtcclxuXHJcbiAgICBzdGF0aWMgcmVzb2x2ZVByb21vdGlvbkNob2ljZShib2FyZDogQm9hcmQsIHBpZWNlOiBQaWVjZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGlzV2hpdGUgPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUXVlZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX1FVRUVOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfUVVFRU4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9vayhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UucG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1doaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUk9PS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1JPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQmlzaG9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gVW5pY29kZUNvbnN0YW50cy5XSElURV9CSVNIT1BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogVW5pY29kZUNvbnN0YW50cy5CTEFDS19CSVNIT1AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBib2FyZC5waWVjZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgS25pZ2h0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZS5wb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2UuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gVW5pY29kZUNvbnN0YW50cy5XSElURV9LTklHSFRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogVW5pY29kZUNvbnN0YW50cy5CTEFDS19LTklHSFQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19