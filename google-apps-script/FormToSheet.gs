/**
 * BN & Co Construction — Quote form → Google Sheet
 *
 * Setup:
 * 1. Create a new Google Sheet (e.g. "BN & Co Quote Submissions")
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. Run setupSheet() once (authorize when prompted)
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL into GOOGLE_SHEETS_WEBHOOK_URL (.env.local + Vercel)
 */

var SHEET_NAME = "Submissions";

var HEADERS = [
  "Submitted At",
  "First Name",
  "Last Name",
  "Phone",
  "Email",
  "Project Type",
  "Suburb",
  "Message",
];

/**
 * Run once from the Apps Script editor to create headers.
 */
function setupSheet() {
  var sheet = getOrCreateSheet_();
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: "BN & Co form endpoint is live." });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: "Missing request body" }, 400);
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet_();

    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      formatSydneyTime_(data.submittedAt),
      data.firstName || "",
      data.lastName || "",
      data.phone || "",
      data.email || "",
      data.projectType || "",
      data.suburb || "",
      data.message || "",
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) }, 500);
  }
}

/**
 * Formats a date for the sheet in Australia/Sydney (AEST/AEDT).
 * Example output: 20/05/2026 11:16 pm
 */
function formatSydneyTime_(isoOrDate) {
  var date = isoOrDate ? new Date(isoOrDate) : new Date();
  if (isNaN(date.getTime())) {
    return Utilities.formatDate(new Date(), "Australia/Sydney", "dd/MM/yyyy h:mm a");
  }
  return Utilities.formatDate(date, "Australia/Sydney", "dd/MM/yyyy h:mm a");
}

/**
 * Run once to convert existing ISO timestamps in column A to Sydney time.
 * (Skips row 1 if it is the header.)
 */
function reformatExistingTimestamps() {
  var sheet = getOrCreateSheet_();
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  var values = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (var i = 0; i < values.length; i++) {
    var cell = values[i][0];
    if (cell) {
      values[i][0] = formatSydneyTime_(cell);
    }
  }
  sheet.getRange(2, 1, values.length, 1).setValues(values);
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function jsonResponse_(payload, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
  // statusCode is ignored by ContentService but kept for clarity
  return output;
}
