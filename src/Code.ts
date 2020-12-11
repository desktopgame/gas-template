export function doPost(e: any) {
  const props = PropertiesService.getScriptProperties();
  const spreadSheetID = props.getProperty("SPREAD_SHEET_ID");
  const sheetName = props.getProperty("DEBUG_SHEET_NAME");
  appendRow(spreadSheetID, sheetName, "hello,clasp!");
}

function appendRow(spreadsheetId: string, sheetName: string, text: string) {
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  sheet.appendRow([new Date(), text]);
  return text;
}
