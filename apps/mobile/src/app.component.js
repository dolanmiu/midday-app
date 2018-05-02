Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const store_1 = require("@ngrx/store");
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
const app_service_1 = require("./modules/core/services/app.service");
let AppComponent = class AppComponent {
    constructor(
        // ensure singleton construction on app boot)
        _appService, 
        // private afAuth: AngularFireAuth,
        store) {
        //     this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        this._appService = _appService;
        this.store = store;
        //     this.afAuth.authState.subscribe((user) => {
        //       console.log(user);
        //       if (!user) {
        //           return;
        //       }
        //       // this.store.dispatch(new User.SetUserAction({ data: user }));
        //   });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'ns-app',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        store_1.Store])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUEwQztBQUMxQyx1Q0FBbUM7QUFDbkMsdURBQXVEO0FBQ3ZELHdDQUF3QztBQUV4QyxxRUFBaUU7QUFNakUsSUFBYSxZQUFZLEdBQXpCO0lBQ0k7UUFDSSw2Q0FBNkM7UUFDckMsV0FBdUI7UUFDL0IsbUNBQW1DO1FBQzNCLEtBQWlCO1FBRTdCLDZFQUE2RTtRQUpqRSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUV2QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBSTdCLGtEQUFrRDtRQUNsRCwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixVQUFVO1FBRVYsd0VBQXdFO1FBQ3hFLFFBQVE7SUFDUixDQUFDO0NBQ0osQ0FBQTtBQWxCWSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBSTJCLHdCQUFVO1FBRWhCLGFBQUs7R0FMZixZQUFZLENBa0J4QjtBQWxCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSdcbi8vIGltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ2FuZ3VsYXJmaXJlMi9hdXRoJztcbi8vIGltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcblxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2FwcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLy8gZW5zdXJlIHNpbmdsZXRvbiBjb25zdHJ1Y3Rpb24gb24gYXBwIGJvb3QpXG4gICAgICAgIHByaXZhdGUgX2FwcFNlcnZpY2U6IEFwcFNlcnZpY2UsXG4gICAgICAgIC8vIHByaXZhdGUgYWZBdXRoOiBBbmd1bGFyRmlyZUF1dGgsXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgKSB7XG4gICAgLy8gICAgIHRoaXMuYWZBdXRoLmF1dGguc2V0UGVyc2lzdGVuY2UoZmlyZWJhc2UuYXV0aC5BdXRoLlBlcnNpc3RlbmNlLkxPQ0FMKTtcblxuICAgIC8vICAgICB0aGlzLmFmQXV0aC5hdXRoU3RhdGUuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgLy8gICAgICAgaWYgKCF1c2VyKSB7XG4gICAgLy8gICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICB9XG5cbiAgICAvLyAgICAgICAvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyLlNldFVzZXJBY3Rpb24oeyBkYXRhOiB1c2VyIH0pKTtcbiAgICAvLyAgIH0pO1xuICAgIH1cbn1cbiJdfQ==