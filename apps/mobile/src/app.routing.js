Object.defineProperty(exports, "__esModule", { value: true });
// angular
const core_1 = require("@angular/core");
// nativescript
const router_1 = require("nativescript-angular/router");
// app
const shared_module_1 = require("./modules/shared/shared.module");
const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'items',
        loadChildren: './modules/items/items.module#ItemsModule',
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, router_1.NativeScriptRouterModule.forRoot(routes)],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHdDQUF5QztBQUd6QyxlQUFlO0FBQ2Ysd0RBQXVFO0FBRXZFLE1BQU07QUFDTixrRUFBOEQ7QUFFOUQsTUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO0tBQ3BCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSwwQ0FBMEM7S0FDM0Q7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLDBDQUEwQztLQUMzRDtDQUNKLENBQUM7QUFLRixJQUFhLGdCQUFnQixHQUE3QjtDQUFnQyxDQUFBO0FBQW5CLGdCQUFnQjtJQUg1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwRSxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuLy8gYXBwXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICByZWRpcmVjdFRvOiAnL2xvZ2luJyxcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICdpdGVtcycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJy4vbW9kdWxlcy9pdGVtcy9pdGVtcy5tb2R1bGUjSXRlbXNNb2R1bGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL21vZHVsZXMvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlJyxcbiAgICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIl19