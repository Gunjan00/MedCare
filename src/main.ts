// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

const firebase = require("nativescript-plugin-firebase/app");

firebase.initializeApp({}).then((instance) => {
          console.log("[*] Firebase was successfully initialised");
     }, (error) => {
     console.log("[*] Huston we've an initialization  error: " + error);
      });

platformNativeScriptDynamic().bootstrapModule(AppModule);
