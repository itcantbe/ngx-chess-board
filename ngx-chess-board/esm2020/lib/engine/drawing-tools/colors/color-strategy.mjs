import { DefaultColorProcessor } from './default-color-processor';
export class ColorStrategy {
    constructor() {
        this.colorProcessor = new DefaultColorProcessor();
    }
    resolve(ctrl, shift, alt) {
        return this.colorProcessor.resolve(ctrl, shift, alt);
    }
    setColorProcessor(colorProcessor) {
        this.colorProcessor = colorProcessor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2hlc3MtYm9hcmQvc3JjL2xpYi9lbmdpbmUvZHJhd2luZy10b29scy9jb2xvcnMvY29sb3Itc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsTUFBTSxPQUFPLGFBQWE7SUFJdEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVMsRUFBRSxLQUFVLEVBQUUsR0FBUTtRQUNuQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGlCQUFpQixDQUFDLGNBQThCO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yUHJvY2Vzc29yIH0gZnJvbSAnLi9jb2xvci1wcm9jZXNzb3InO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29sb3JQcm9jZXNzb3IgfSBmcm9tICcuL2RlZmF1bHQtY29sb3ItcHJvY2Vzc29yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclN0cmF0ZWd5IHtcclxuXHJcbiAgICBjb2xvclByb2Nlc3NvcjogQ29sb3JQcm9jZXNzb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvclByb2Nlc3NvciA9IG5ldyBEZWZhdWx0Q29sb3JQcm9jZXNzb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKGN0cmw6IGFueSwgc2hpZnQ6IGFueSwgYWx0OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclByb2Nlc3Nvci5yZXNvbHZlKGN0cmwsIHNoaWZ0LCBhbHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9yUHJvY2Vzc29yKGNvbG9yUHJvY2Vzc29yOiBDb2xvclByb2Nlc3Nvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3JQcm9jZXNzb3IgPSBjb2xvclByb2Nlc3NvcjtcclxuICAgIH1cclxuXHJcbn1cclxuIl19