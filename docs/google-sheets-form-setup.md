# Quote form → Google Sheets

Contact form submissions are sent to your site API (`/api/quote`), which forwards them to a Google Apps Script web app that appends a row to your spreadsheet.

## 1. Create the spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like **BN & Co Quote Submissions**.

## 2. Add the Apps Script

1. In the spreadsheet: **Extensions → Apps Script**.
2. Delete any default code in `Code.gs`.
3. Copy the full contents of `google-apps-script/FormToSheet.gs` from this repo into `Code.gs`.
4. Click **Save** (name the project e.g. "BN Co Form Handler").

## 3. Initialise the sheet (once)

1. In the Apps Script editor, select the function **`setupSheet`** in the toolbar dropdown.
2. Click **Run**.
3. Approve permissions when Google asks (this lets the script write to *this* spreadsheet only).
4. Switch back to the spreadsheet tab. You should see a **Submissions** sheet with column headers.

## 4. Deploy as a web app

1. In Apps Script: **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → **Web app**.
3. Settings:
   - **Description:** Quote form v1
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorise if prompted.
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/...../exec`).

## 5. Configure the website

### Local development

Edit `.env.local` in the project root:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the dev server (`npm run dev`).

### Production (Vercel)

1. Project → **Settings → Environment Variables**.
2. Add:
   - **Name:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** the same Web app URL from step 4
3. Redeploy the site.

## 6. Test

1. Open the site and submit the quote form (homepage or `/contact`).
2. Check the **Submissions** sheet for a new row.

You can also test the endpoint directly:

```bash
curl -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","phone":"0400000000","email":"test@example.com","projectType":"Renovation","suburb":"Chatswood","message":"Test row","submittedAt":"2026-05-20T12:00:00.000Z"}'
```

## Timestamps (Sydney time)

New submissions are saved in **Australia/Sydney** as readable text, e.g. `20/05/2026 11:16 pm`.

To fix rows that still show UTC ISO strings (like `2026-05-20T13:16:58.292Z`):

1. Paste the updated `FormToSheet.gs` into Apps Script and save.
2. Select **`reformatExistingTimestamps`** in the function dropdown and click **Run** once.
3. Redeploy the web app (new version) so future submissions use the new format.

## Updating the script later

If you change `FormToSheet.gs`:

1. Save in Apps Script.
2. **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy.**

The Web app URL stays the same; you do not need to change `.env` unless you create a brand-new deployment.

## Troubleshooting

| Issue | Fix |
|--------|-----|
| Form shows error on submit | Confirm `GOOGLE_SHEETS_WEBHOOK_URL` is set on Vercel and redeployed. |
| Sheet stays empty | Re-run `setupSheet`, redeploy web app with **Anyone** access. |
| 403 / permission errors | Deployment must be **Execute as: Me** and **Anyone** can access. |
| Old n8n webhook still in env | Remove `NEXT_PUBLIC_FORM_WEBHOOK` or leave unset; the API route uses Google Sheets only. |

## Column layout

| Column | Form field |
|--------|------------|
| Submitted At | Auto (ISO timestamp) |
| First Name | Required |
| Last Name | Optional |
| Phone | Required |
| Email | Required |
| Project Type | Required |
| Suburb | Optional |
| Message | Optional |
