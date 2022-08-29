import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PiecePromotionModalComponent {
    constructor() {
        this.color = 'white';
        this.opened = false;
    }
    open(closeCallback) {
        this.opened = true;
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    }
    changeSelection(index) {
        this.modal.nativeElement.style.display = 'none';
        this.opened = false;
        this.onCloseCallback(index);
    }
    getPieceIcon(piece) {
        let coloredPiece = '';
        switch (piece.toLowerCase()) {
            case 'queen':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteQueenUrl : this.pieceIconInput.blackQueenUrl;
                break;
            case 'rook':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteRookUrl : this.pieceIconInput.blackRookUrl;
                break;
            case 'bishop':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteBishopUrl : this.pieceIconInput.blackBishopUrl;
                break;
            case 'knight':
                coloredPiece = this.color === 'white' ? this.pieceIconInput.whiteKnightUrl : this.pieceIconInput.blackKnightUrl;
                break;
        }
        return coloredPiece;
    }
}
PiecePromotionModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: PiecePromotionModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PiecePromotionModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: PiecePromotionModalComponent, selector: "app-piece-promotion-modal", inputs: { pieceIconInput: "pieceIconInput", color: "color" }, viewQueries: [{ propertyName: "modal", first: true, predicate: ["myModal"], descendants: true }], ngImport: i0, template: "<div #myModal class=\"container\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"content\">\r\n            <div class=\"piece-wrapper\" *ngIf=\"pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">\r\n                    <img [src]=\"getPieceIcon('queen')\" alt=\"Queen\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">\r\n                    <img [src]=\"getPieceIcon('rook')\" alt=\"Rook\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">\r\n                    <img [src]=\"getPieceIcon('bishop')\" alt=\"Bishop\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">\r\n                    <img [src]=\"getPieceIcon('knight')\" alt=\"Knight\">\r\n                </div>\r\n            </div>\r\n            <div class=\"piece-wrapper\" *ngIf=\"!pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">&#x265B;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">&#x265C;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">&#x265D;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">&#x265E;</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".container{display:none;position:absolute;z-index:9999;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:#0006}.wrapper{position:relative;height:100%;width:100%}.content{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block;text-align:center}.piece img{max-width:100%}.piece:hover{background-color:#ccc;border-radius:5px}.piece-wrapper{height:80%;width:100%}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00B919;border-radius:4px;box-sizing:border-box}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: PiecePromotionModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-piece-promotion-modal', template: "<div #myModal class=\"container\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"content\">\r\n            <div class=\"piece-wrapper\" *ngIf=\"pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">\r\n                    <img [src]=\"getPieceIcon('queen')\" alt=\"Queen\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">\r\n                    <img [src]=\"getPieceIcon('rook')\" alt=\"Rook\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">\r\n                    <img [src]=\"getPieceIcon('bishop')\" alt=\"Bishop\">\r\n                </div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">\r\n                    <img [src]=\"getPieceIcon('knight')\" alt=\"Knight\">\r\n                </div>\r\n            </div>\r\n            <div class=\"piece-wrapper\" *ngIf=\"!pieceIconInput\">\r\n                <div class=\"piece\" (click)=\"changeSelection(1)\">&#x265B;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(2)\">&#x265C;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(3)\">&#x265D;</div>\r\n                <div class=\"piece\" (click)=\"changeSelection(4)\">&#x265E;</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".container{display:none;position:absolute;z-index:9999;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:#0006}.wrapper{position:relative;height:100%;width:100%}.content{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block;text-align:center}.piece img{max-width:100%}.piece:hover{background-color:#ccc;border-radius:5px}.piece-wrapper{height:80%;width:100%}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00B919;border-radius:4px;box-sizing:border-box}\n"] }]
        }], propDecorators: { modal: [{
                type: ViewChild,
                args: ['myModal', { static: false }]
            }], pieceIconInput: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL3BpZWNlLXByb21vdGlvbi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGVzcy1ib2FyZC9zcmMvbGliL3BpZWNlLXByb21vdGlvbi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUXhFLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFhSSxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBRWhCLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FrQ2xCO0lBL0JHLElBQUksQ0FBQyxhQUFzQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNyRCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3pCLEtBQUssT0FBTztnQkFDUixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztnQkFDOUcsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztnQkFDNUcsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDaEgsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztnQkFDaEgsTUFBTTtTQUNiO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQzs7eUhBM0NRLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLGlPQ1J6QywyMUNBMEJBOzJGRGxCYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0ksMkJBQTJCOzhCQU1FLEtBQUs7c0JBQTNDLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztnQkFHckMsY0FBYztzQkFEYixLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaWVjZUljb25JbnB1dCB9IGZyb20gJy4uLy4uL3V0aWxzL2lucHV0cy9waWVjZS1pY29uLWlucHV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcGllY2UtcHJvbW90aW9uLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ215TW9kYWwnLCB7c3RhdGljOiBmYWxzZX0pIG1vZGFsOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwaWVjZUljb25JbnB1dDogUGllY2VJY29uSW5wdXQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNvbG9yID0gJ3doaXRlJztcclxuXHJcbiAgICBvcGVuZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb25DbG9zZUNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgICBvcGVuKGNsb3NlQ2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gY2xvc2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2VsZWN0aW9uKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2soaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlSWNvbihwaWVjZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY29sb3JlZFBpZWNlID0gJyc7XHJcbiAgICAgICAgc3dpdGNoIChwaWVjZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3F1ZWVuJzpcclxuICAgICAgICAgICAgICAgIGNvbG9yZWRQaWVjZSA9IHRoaXMuY29sb3IgPT09ICd3aGl0ZScgPyB0aGlzLnBpZWNlSWNvbklucHV0LndoaXRlUXVlZW5VcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrUXVlZW5Vcmw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncm9vayc6XHJcbiAgICAgICAgICAgICAgICBjb2xvcmVkUGllY2UgPSB0aGlzLmNvbG9yID09PSAnd2hpdGUnID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZVJvb2tVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrUm9va1VybDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdiaXNob3AnOlxyXG4gICAgICAgICAgICAgICAgY29sb3JlZFBpZWNlID0gdGhpcy5jb2xvciA9PT0gJ3doaXRlJyA/IHRoaXMucGllY2VJY29uSW5wdXQud2hpdGVCaXNob3BVcmwgOiB0aGlzLnBpZWNlSWNvbklucHV0LmJsYWNrQmlzaG9wVXJsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2tuaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjb2xvcmVkUGllY2UgPSB0aGlzLmNvbG9yID09PSAnd2hpdGUnID8gdGhpcy5waWVjZUljb25JbnB1dC53aGl0ZUtuaWdodFVybCA6IHRoaXMucGllY2VJY29uSW5wdXQuYmxhY2tLbmlnaHRVcmw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcmVkUGllY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiAjbXlNb2RhbCBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2Utd3JhcHBlclwiICpuZ0lmPVwicGllY2VJY29uSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oMSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0UGllY2VJY29uKCdxdWVlbicpXCIgYWx0PVwiUXVlZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRQaWVjZUljb24oJ3Jvb2snKVwiIGFsdD1cIlJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJnZXRQaWVjZUljb24oJ2Jpc2hvcCcpXCIgYWx0PVwiQmlzaG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oNClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZ2V0UGllY2VJY29uKCdrbmlnaHQnKVwiIGFsdD1cIktuaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2Utd3JhcHBlclwiICpuZ0lmPVwiIXBpZWNlSWNvbklucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2VcIiAoY2xpY2spPVwiY2hhbmdlU2VsZWN0aW9uKDEpXCI+JiN4MjY1Qjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZVwiIChjbGljayk9XCJjaGFuZ2VTZWxlY3Rpb24oMilcIj4mI3gyNjVDOzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlXCIgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGlvbigzKVwiPiYjeDI2NUQ7PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGllY2VcIiAoY2xpY2spPVwiY2hhbmdlU2VsZWN0aW9uKDQpXCI+JiN4MjY1RTs8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==