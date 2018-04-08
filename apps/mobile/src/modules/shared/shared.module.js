Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// nativescript
const forms_1 = require("nativescript-angular/forms");
const common_1 = require("nativescript-angular/common");
const router_1 = require("nativescript-angular/router");
// libs
const nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
const SHARED_MODULES = [
    common_1.NativeScriptCommonModule,
    forms_1.NativeScriptFormsModule,
    router_1.NativeScriptRouterModule,
    nativescript_ngx_fonticon_1.TNSFontIconModule
];
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            ...SHARED_MODULES
        ],
        exports: [
            ...SHARED_MODULES
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF5QztBQUV6QyxlQUFlO0FBQ2Ysc0RBQXFFO0FBQ3JFLHdEQUF1RTtBQUN2RSx3REFBdUU7QUFFdkUsT0FBTztBQUNQLHlFQUE4RDtBQUU5RCxNQUFNLGNBQWMsR0FBRztJQUNyQixpQ0FBd0I7SUFDeEIsK0JBQXVCO0lBQ3ZCLGlDQUF3QjtJQUN4Qiw2Q0FBaUI7Q0FDbEIsQ0FBQztBQVVGLElBQWEsWUFBWSxHQUF6QjtDQUE2QixDQUFBO0FBQWhCLFlBQVk7SUFSeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsR0FBRyxjQUFjO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxjQUFjO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBSTtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuY29uc3QgU0hBUkVEX01PRFVMRVMgPSBbXG4gIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgVE5TRm9udEljb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5TSEFSRURfTU9EVUxFU1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uU0hBUkVEX01PRFVMRVNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=