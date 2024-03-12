import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { FormEditor } from "@bpmn-io/form-js";

const schema = {
  type: "default",
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
  private formJS: FormEditor; // = new FormEditor();
  @ViewChild("ref", { static: true }) private el: ElementRef;

  ngAfterContentInit(): void {
    this.formJS = new FormEditor({ container: this.el.nativeElement });
    this.formJS.importSchema(schema);
  }
}
