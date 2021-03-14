export class CoordsProvider {
    constructor() {
        this.defaultXCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.defaultYCoords = [8, 7, 6, 5, 4, 3, 2, 1];
        this.currentXCoords = [...this.defaultXCoords];
        this.currentYCoords = [...this.defaultYCoords];
    }
    get xCoords() {
        return this.currentXCoords;
    }
    get yCoords() {
        return this.currentYCoords;
    }
    reverse() {
        this.currentXCoords = this.currentXCoords.reverse();
        this.currentYCoords = this.currentYCoords.reverse();
    }
    reset() {
        this.init();
    }
    init() {
        this.currentXCoords = [...this.defaultXCoords];
        this.currentYCoords = [...this.defaultYCoords];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb29yZHMvY29vcmRzLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ3FCLG1CQUFjLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFcEUsbUJBQWMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RCxtQkFBYyxHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsbUJBQWMsR0FBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBdUJoRSxDQUFDO0lBckJHLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sSUFBSTtRQUNSLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdFhDb29yZHM6IHN0cmluZ1tdID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRZQ29vcmRzOiBudW1iZXJbXSA9IFs4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRYQ29vcmRzOiBzdHJpbmdbXSA9IFsuLi50aGlzLmRlZmF1bHRYQ29vcmRzXTtcclxuICAgIHByaXZhdGUgY3VycmVudFlDb29yZHM6IG51bWJlcltdID0gWy4uLnRoaXMuZGVmYXVsdFlDb29yZHNdO1xyXG5cclxuICAgIGdldCB4Q29vcmRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFlDb29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gdGhpcy5jdXJyZW50WENvb3Jkcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WUNvb3JkcyA9IHRoaXMuY3VycmVudFlDb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRYQ29vcmRzID0gWy4uLnRoaXMuZGVmYXVsdFhDb29yZHNdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFlDb29yZHMgPSBbLi4udGhpcy5kZWZhdWx0WUNvb3Jkc107XHJcbiAgICB9XHJcbn1cclxuIl19