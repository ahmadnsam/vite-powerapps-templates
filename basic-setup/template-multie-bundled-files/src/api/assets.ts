export class assetsApi {
  static getAssets = async (id: string) => {
    await Xrm.WebApi.retrieveMultipleRecords(
      "amp_assets",
      `?$filter=amp_id eq '${id}'`
    );
  };
}
