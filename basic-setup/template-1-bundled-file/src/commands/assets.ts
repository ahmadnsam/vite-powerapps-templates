export class assetCommands {
  static setUnderMaintenance = (formContext: Xrm.FormContext) => {
    Xrm.Navigation.openConfirmDialog({
      title: "Confirm Maintenance",
      text: "Are you sure you want to set this asset under maintenance?",
      confirmButtonLabel: "Yes, Update",
      cancelButtonLabel: "Cancel",
    }).then((result) => {
      if (result.confirmed) {
        const statusAttribute = formContext.getAttribute("crf15_status");
        if (statusAttribute) {
          statusAttribute.setValue(251860002); //under maintenance
          statusAttribute.fireOnChange(); // Ensure any OnChange logic runs
        }
      }
    });
  };
  static openDetails = () => {
    var pageInput: Xrm.Navigation.PageInputHtmlWebResource = {
      pageType: "webresource",
      webresourceName: "amp_/html/assets",
    };
    var navigationOptions: Xrm.Navigation.NavigationOptions = {
      target: 2,
      width: 500, // value specified in pixel
      height: 400, // value specified in pixel
      position: 2,
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions);
  };
}
