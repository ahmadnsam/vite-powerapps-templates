import { lockControls, unlockControls } from "../helpers/controls";
import { formatSerialNumber, validateSerialNumber } from "../helpers/text";
import {
  hideControlNotification,
  showControlNotification,
} from "../lib/notification";

export function serialNumberOnChange(context: Xrm.Events.EventContext) {
  let formContext = context.getFormContext();
  const controlName = "crf15_serialnumber";
  const attribute = formContext.getAttribute(controlName);
  if (attribute) {
    let serialValue = attribute.getValue();

    if (!serialValue) return; // Do nothing if the field is empty

    // Format serial number to ensure it has SN prefix
    serialValue = formatSerialNumber(serialValue);

    // Update the field with the formatted serial number
    attribute.setValue(serialValue);

    // Validate the formatted serial number
    if (!validateSerialNumber(serialValue)) {
      showControlNotification(
        formContext,
        controlName,
        "Invalid serial number format. It must start with 'SN' and have at least 3 digits.",
        "ERROR"
      );
    } else {
      hideControlNotification(formContext, controlName);
    }
  }
}
export function statusOnChange(context: Xrm.Events.EventContext) {
  let formContext = context.getFormContext();
  const statusAttribute = formContext.getAttribute("crf15_status");
  if (statusAttribute) {
    const statusValue = statusAttribute.getValue();
    const fieldsToToggle = [
      "crf15_assettype",
      "crf15_serialnumber",
      "crf15_department",
      "crf15_depreciationvalue",
    ];
    if (statusValue === 251860000) {
      //if active
      unlockControls(formContext, fieldsToToggle);
    } else {
      lockControls(formContext, fieldsToToggle);
    }
  }
}
