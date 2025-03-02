// Function to show multiple form controls
export function showControls(
  formContext: Xrm.FormContext,
  controlNames: string[]
): void {
  controlNames.forEach((controlName) => {
    const control =
      formContext.getControl<Xrm.Controls.StandardControl>(controlName);
    if (control) {
      control.setVisible(true);
    }
  });
}

// Function to hide multiple form controls
export function hideControls(
  formContext: Xrm.FormContext,
  controlNames: string[]
): void {
  controlNames.forEach((controlName) => {
    const control =
      formContext.getControl<Xrm.Controls.StandardControl>(controlName);
    if (control) {
      control.setVisible(false);
    }
  });
}

// Function to lock multiple form controls (set to read-only)
export function lockControls(
  formContext: Xrm.FormContext,
  controlNames: string[]
): void {
  controlNames.forEach((controlName) => {
    const control =
      formContext.getControl<Xrm.Controls.StandardControl>(controlName);
    if (control) {
      control.setDisabled(true);
    }
  });
}

// Function to unlock multiple form controls (set to editable)
export function unlockControls(
  formContext: Xrm.FormContext,
  controlNames: string[]
): void {
  controlNames.forEach((controlName) => {
    const control =
      formContext.getControl<Xrm.Controls.StandardControl>(controlName);
    if (control) {
      control.setDisabled(false);
    }
  });
}
