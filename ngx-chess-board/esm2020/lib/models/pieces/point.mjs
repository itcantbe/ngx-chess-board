export class Point {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    isEqual(that) {
        return that && this.row === that.row && this.col === that.col;
    }
    hasCoordsEqual(row, col) {
        return row && col && this.row === row && this.col === col;
    }
    isInRange() {
        return this.row >= 0 && this.row <= 7 && this.col >= 0 && this.col <= 7;
    }
    clone() {
        return new Point(this.row, this.col);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjL2xpYi9tb2RlbHMvcGllY2VzL3BvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxLQUFLO0lBSWQsWUFBWSxHQUFXLEVBQUUsR0FBVztRQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBVztRQUNmLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUNuQyxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7SUFDOUQsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9pbnQge1xuICAgIHJvdzogbnVtYmVyO1xuICAgIGNvbDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Iocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNvbCA9IGNvbDtcbiAgICB9XG5cbiAgICBpc0VxdWFsKHRoYXQ6IFBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGF0ICYmIHRoaXMucm93ID09PSB0aGF0LnJvdyAmJiB0aGlzLmNvbCA9PT0gdGhhdC5jb2w7XG4gICAgfVxuXG4gICAgaGFzQ29vcmRzRXF1YWwocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiByb3cgJiYgY29sICYmIHRoaXMucm93ID09PSByb3cgJiYgdGhpcy5jb2wgPT09IGNvbDtcbiAgICB9XG5cbiAgICBpc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdyA+PSAwICYmIHRoaXMucm93IDw9IDcgJiYgdGhpcy5jb2wgPj0gMCAmJiB0aGlzLmNvbCA8PSA3O1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucm93LCB0aGlzLmNvbCk7XG4gICAgfVxufVxuIl19