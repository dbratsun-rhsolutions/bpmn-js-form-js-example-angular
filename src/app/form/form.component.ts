/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormEditor } from "@bpmn-io/form-js";
// import "./../utils/custom-component/render.js";

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
  selector: "app-form",
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
export class FormComponent implements AfterContentInit {
  private formEditor: FormEditor;
  @ViewChild("ref", { static: true }) private el: ElementRef;

  ngAfterContentInit(): void {
    // const { Errors, FormContext, Numberfield, Description, Label } =
    //   window["formJs"];

    console.log(window["formJs"]);
    const { renderExtensions, propertiesPanelExtensions } = window as any;
    this.formEditor = new FormEditor({
      container: this.el.nativeElement,
      additionalModules: [renderExtensions, propertiesPanelExtensions],
    });
    this.formEditor.importSchema(schema);
  }
}
