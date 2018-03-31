import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';

import { AppService } from './modules/core/services/app.service';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor(
        // ensure singleton construction on app boot)
        private _appService: AppService,
        // private afAuth: AngularFireAuth,
        private store: Store<any>,
    ) {
    //     this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    //     this.afAuth.authState.subscribe((user) => {
    //       console.log(user);
    //       if (!user) {
    //           return;
    //       }

    //       // this.store.dispatch(new User.SetUserAction({ data: user }));
    //   });
    }
}
