export class DefaultDragEndProcessor {
    dragEnded(event) {
        event.source.reset();
        event.source.element.nativeElement.style.zIndex = '0';
        event.source.element.nativeElement.style.pointerEvents = 'auto';
        event.source.element.nativeElement.style.touchAction = 'auto';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1kcmFnLWVuZC1wcm9jZXNzb3IuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvS29tcHV0ZXIvRGVza3RvcC9Ob3d5IGZvbGRlci9jaGVzcy1ib2FyZC9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjLyIsInNvdXJjZXMiOlsibGliL2VuZ2luZS9kcmFnL2VuZC9kZWZhdWx0LWRyYWctZW5kLXByb2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sdUJBQXVCO0lBRWhDLFNBQVMsQ0FBQyxLQUFpQjtRQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0RCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDaEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQ2xFLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RyYWdFbmQsIENka0RyYWdTdGFydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBEcmFnRW5kUHJvY2Vzc29yIH0gZnJvbSAnLi9kcmFnLWVuZC1wcm9jZXNzb3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHREcmFnRW5kUHJvY2Vzc29yIGltcGxlbWVudHMgRHJhZ0VuZFByb2Nlc3NvciB7XHJcblxyXG4gICAgZHJhZ0VuZGVkKGV2ZW50OiBDZGtEcmFnRW5kKSB7XHJcbiAgICAgICAgZXZlbnQuc291cmNlLnJlc2V0KCk7XHJcbiAgICAgICAgZXZlbnQuc291cmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMCc7XHJcbiAgICAgICAgZXZlbnQuc291cmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG91Y2hBY3Rpb24gPSAnYXV0byc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==