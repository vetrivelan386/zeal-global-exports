/**
 * Zeal Global Exports — Inquiry Sheet Logger
 *
 * SETUP INSTRUCTIONS (see README.md "Storing Inquiries in Google Sheets" section
 * for the full walkthrough):
 *
 * 1. Create a new Google Sheet. Rename Sheet1's first row with these headers:
 *    Timestamp | Name | Company | Email | Phone | Country | Product | Message
 *
 * 2. In the Sheet, go to Extensions -> Apps Script.
 *
 * 3. Delete any starter code in the editor and paste this entire file instead.
 *
 * 4. Click Deploy -> New deployment -> select type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click Deploy, authorize when prompted, and copy the Web App URL it gives you.
 *
 * 5. Paste that URL into your .env.local as GOOGLE_SHEET_WEBHOOK_URL.
 *
 * That's it — every inquiry submitted on the website will now also appear as a
 * new row in this sheet.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.country || "",
      data.product || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
