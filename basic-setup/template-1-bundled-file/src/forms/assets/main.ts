import { setOnChangeHandlers } from "../../helpers/handlers";
import { serialNumberOnChange, statusOnChange } from "../../services/assets";

export class assetsForm {
  static onload = (context: Xrm.Events.EventContext) => {
    let formContext = context.getFormContext();
    setOnChangeHandlers(formContext, [
      { attributeName: "crf15_serialnumber", handler: serialNumberOnChange },
      { attributeName: "crf15_status", handler: statusOnChange },
    ]);
  };
}
