// Function to set OnChange event handlers for multiple fields
export function setOnChangeHandlers(
  formContext: Xrm.FormContext,
  handlers: {
    attributeName: string;
    handler: (context: Xrm.Events.EventContext) => void;
  }[]
): void {
  handlers.forEach(({ attributeName, handler }) => {
    const attribute =
      formContext.getAttribute<Xrm.Attributes.Attribute>(attributeName);
    if (attribute) {
      attribute.addOnChange(handler);
    }
  });
}
