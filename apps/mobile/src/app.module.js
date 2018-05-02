Object.defineProperty(exports, "__esModule", { value: true });
// angular
const core_1 = require("@angular/core");
const store_1 = require("@ngrx/store");
// nativescript
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const http_client_1 = require("nativescript-angular/http-client");
// app
const core_module_1 = require("./modules/core/core.module");
const shared_module_1 = require("./modules/shared/shared.module");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
let AppModule = 
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_client_1.NativeScriptHttpClientModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
            app_routing_1.AppRoutingModule,
            store_1.StoreModule.forRoot({}),
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVix3Q0FBMkQ7QUFDM0QsdUNBQTBDO0FBRTFDLGVBQWU7QUFDZixrRkFBOEU7QUFDOUUsa0VBQWdGO0FBRWhGLE1BQU07QUFDTiw0REFBd0Q7QUFDeEQsa0VBQThEO0FBQzlELCtDQUFpRDtBQUNqRCxtREFBK0M7QUFrQi9DLElBQWEsU0FBUztBQUh0Qjs7RUFFRTtBQUNGO0NBQXlCLENBQUE7QUFBWixTQUFTO0lBaEJyQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsMENBQTRCO1lBQzVCLHdCQUFVO1lBQ1YsNEJBQVk7WUFDWiw4QkFBZ0I7WUFDaEIsbUJBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzlCLENBQUM7SUFDRjs7TUFFRTtHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBuYXRpdmVzY3JpcHRcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50JztcblxuLy8gYXBwXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUvY29yZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIENvcmVNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgU3RvcmVNb2R1bGUuZm9yUm9vdCh7fSksXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19