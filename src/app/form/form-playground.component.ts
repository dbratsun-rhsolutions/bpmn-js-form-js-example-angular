/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Playground } from "@bpmn-io/form-js-playground";
// import { CustomFormFields } from "./render";

const schema = {
  type: "default",
  // schemaVersion: 4,
  // exporter: {
  //   name: "form-js",
  //   version: "0.1.0",
  // },
  components: [
    {
      key: "creditor",
      label: "Creditor",
      type: "textfield",
      validate: {
        required: true,
      },
    },
  ],
};

const data = {
  key: "creditor",
  label: "Creditor",
  type: "textfield",
  validate: {
    required: true,
  },
};

@Component({
  selector: "app-form-playground",
  template: ` <div #ref class="form-container"></div> `,
  styles: [
    `
      .form-container {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class FormPlaygroundComponent implements AfterContentInit {
  private formPlayground: Playground;
  @ViewChild("ref", { static: true }) private el: ElementRef;

  ngAfterContentInit(): void {
    this.formPlayground = new Playground({
      container: this.el.nativeElement,
      schema,
      data,
    });
  }
}
