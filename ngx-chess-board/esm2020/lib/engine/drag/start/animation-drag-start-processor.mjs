export class AnimationDragStartProcessor {
    dragStarted(event) {
        const style = event.source.getRootElement().style;
        style.zIndex = '1000';
        style.position = 'absolute';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLWRyYWctc3RhcnQtcHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy9saWIvZW5naW5lL2RyYWcvc3RhcnQvYW5pbWF0aW9uLWRyYWctc3RhcnQtcHJvY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBTywyQkFBMkI7SUFFcEMsV0FBVyxDQUFDLEtBQW1CO1FBQzNCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2xELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RyYWdTdGFydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBEcmFnU3RhcnRQcm9jZXNzb3IgfSBmcm9tICcuL2RyYWctc3RhcnQtcHJvY2Vzc29yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25EcmFnU3RhcnRQcm9jZXNzb3IgaW1wbGVtZW50cyBEcmFnU3RhcnRQcm9jZXNzb3Ige1xyXG5cclxuICAgIGRyYWdTdGFydGVkKGV2ZW50OiBDZGtEcmFnU3RhcnQpIHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGV2ZW50LnNvdXJjZS5nZXRSb290RWxlbWVudCgpLnN0eWxlO1xyXG4gICAgICAgIHN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==