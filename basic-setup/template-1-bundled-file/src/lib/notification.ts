// Function to show a form notification
export function showNotification(
  formContext: Xrm.FormContext,
  message: string,
  type: Xrm.FormNotificationLevel,
  uniqueId: string = "globalNotification",
  duration: number | null = null
): void {
  // Clear any existing notification with the same ID
  formContext.ui.clearFormNotification(uniqueId);

  // Set the new form notification
  formContext.ui.setFormNotification(message, type, uniqueId);

  // If a duration is specified, automatically remove the notification
  if (duration) {
    setTimeout(() => {
      formContext.ui.clearFormNotification(uniqueId);
    }, duration);
  }
}

// Function to hide a specific notification
export function hideNotification(
  formContext: Xrm.FormContext,
  uniqueId: string = "globalNotification"
): void {
  formContext.ui.clearFormNotification(uniqueId);
}

// Function to show a control-specific notification
export function showControlNotification(
  formContext: Xrm.FormContext,
  controlName: string,
  message: string,
  type: Xrm.Controls.NotificationLevel,
  actions?: Xrm.Controls.ControlNotificationAction
): void {
  const control: Xrm.Controls.StandardControl | null =
    formContext.getControl(controlName);
  if (control) {
    control.addNotification({
      messages: [message],
      notificationLevel: type,
      uniqueId: `not_${controlName}`,
      actions: actions ? [actions] : undefined,
    });
  }
}

// Function to remove a control-specific notification
export function hideControlNotification(
  formContext: Xrm.FormContext,
  controlName: string
): void {
  const control: Xrm.Controls.StandardControl | null =
    formContext.getControl(controlName);
  if (control) {
    control.clearNotification(`not_${controlName}`);
  }
}
