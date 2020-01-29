import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppLogFormComponent } from "./components/app-log-form/app-log-form.component";
import { AppLogsComponent } from "./components/app-logs/app-logs.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

import { LogService } from "./services/log.service";
@NgModule({
  declarations: [
    AppComponent,
    AppLogFormComponent,
    AppLogsComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
