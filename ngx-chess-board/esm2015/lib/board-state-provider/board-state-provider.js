import { BehaviorSubject } from 'rxjs';
export class BoardStateProvider {
    constructor() {
        this.statesSubject$ = new BehaviorSubject([]);
    }
    get states() {
        return this.statesSubject$.value;
    }
    set states(states) {
        this.statesSubject$.next(states);
    }
    addMove(state) {
        this.states = [...this.states, state];
    }
    getStates() {
        return this.states;
    }
    pop() {
        const lastState = this.getLastState();
        this.states = this.states.filter((state) => state !== lastState);
        return lastState;
    }
    isEmpty() {
        return this.states.length === 0;
    }
    clear() {
        this.states = [];
    }
    getLastState() {
        return this.states[this.getLastStateIndex()];
    }
    getLastStateIndex() {
        return this.states.length - 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtc3RhdGUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS29tcHV0ZXIvRGVza3RvcC9Ob3d5IGZvbGRlci9jaGVzcy1ib2FyZC9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjLyIsInNvdXJjZXMiOlsibGliL2JvYXJkLXN0YXRlLXByb3ZpZGVyL2JvYXJkLXN0YXRlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNJLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWUsRUFBRSxDQUFDLENBQUM7SUF1QzNELENBQUM7SUFyQ0csSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBb0I7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxHQUFHO1FBQ0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQztRQUNqRSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJvYXJkU3RhdGUgfSBmcm9tICcuL2JvYXJkLXN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZFN0YXRlUHJvdmlkZXIge1xyXG4gICAgc3RhdGVzU3ViamVjdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJvYXJkU3RhdGVbXT4oW10pO1xyXG5cclxuICAgIGdldCBzdGF0ZXMoKTogQm9hcmRTdGF0ZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXNTdWJqZWN0JC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGVzKHN0YXRlczogQm9hcmRTdGF0ZVtdKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXNTdWJqZWN0JC5uZXh0KHN0YXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTW92ZShzdGF0ZTogQm9hcmRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gWy4uLnRoaXMuc3RhdGVzLCBzdGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVzKCk6IEJvYXJkU3RhdGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpOiBCb2FyZFN0YXRlIHtcclxuICAgICAgICBjb25zdCBsYXN0U3RhdGUgPSB0aGlzLmdldExhc3RTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5zdGF0ZXMuZmlsdGVyKChzdGF0ZSkgPT4gc3RhdGUgIT09IGxhc3RTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlcy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuZ2V0TGFzdFN0YXRlSW5kZXgoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFN0YXRlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iXX0=