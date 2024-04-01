/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Forms from "@bpmn-io/form-js";
import * as PropertiesPanel from "@bpmn-io/properties-panel";
import { html, useContext } from "diagram-js/lib/ui";

init();

function init() {
  (window as any)["formJs"] = { ...Forms };
  (window as any)["htmPreact"] = { html, useContext };
  (window as any)["propertiesPanel"] = { ...PropertiesPanel };
}
