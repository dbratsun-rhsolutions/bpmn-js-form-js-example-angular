import { BrowserModule } from "@angular/platform-browser";
import { DiagramComponent } from "./diagram/diagram.component";

import { FormComponent } from "./form/form.component";
import { FormPlaygroundComponent } from "./form/form-playground.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    FormComponent,
    FormPlaygroundComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
