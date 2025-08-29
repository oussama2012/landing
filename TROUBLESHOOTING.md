# Google Apps Script Troubleshooting Guide

## Most Common Issues & Solutions

### 1. Script Not Executing (No data in sheet, no logs)
**Problem:** Script URL is wrong or deployment failed
**Solution:**
- Go to Google Apps Script → Deploy → Manage deployments
- Click Edit (pencil icon) → New version → Deploy
- Copy the NEW deployment URL
- Update your HTML forms with the new URL

### 2. Script Executes But No Data Appears
**Problem:** Sheet ID is wrong or permissions issue
**Solution:**
- Check your Google Sheet URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
- Copy the SHEET_ID from the URL
- Update line 47 in your Google Apps Script: `const SHEET_ID = 'YOUR_ACTUAL_SHEET_ID';`

### 3. Permission Denied Errors
**Problem:** Script doesn't have permission to access the sheet
**Solution:**
- Make sure the Google Sheet is owned by the same Google account as the script
- In Google Apps Script, click "Run" button once to authorize permissions
- Check execution logs for permission errors

### 4. CORS Errors (Cross-Origin Request Blocked)
**Problem:** Browser blocking the request
**Solution:**
- Make sure deployment is set to "Anyone" can access
- Use POST method, not GET for form submissions
- Add proper headers in the script response

## Quick Test Steps

1. **Test Script URL:** Open this URL in browser:
   `https://script.google.com/macros/s/AKfycbweQQw9MBHxqpiOFIyQWdLf6Ga1GWyGIG3Z6VURc9VZWpKWiyxb9id2oZnAZalsjEEX/exec?test=true`
   
   Should return: "Success" or similar response

2. **Check Execution Logs:**
   - Google Apps Script → Executions (left sidebar)
   - Look for recent executions after form submissions
   - Click on executions to see detailed logs and errors

3. **Verify Sheet Access:**
   - Open your Google Sheet
   - Make sure it's accessible and not restricted
   - Check if headers appear in row 1 after first submission

## Current Configuration
- Script URL: `https://script.google.com/macros/s/AKfycbweQQw9MBHxqpiOFIyQWdLf6Ga1GWyGIG3Z6VURc9VZWpKWiyxb9id2oZnAZalsjEEX/exec`
- Sheet ID: `1RLd7LbjH5yoj1JaWUa7hipULaVSpHuuLCkNTmtXzdMM`

## If Still Not Working
1. Create a NEW Google Apps Script project
2. Create a NEW Google Sheet
3. Use the updated script code with logging
4. Deploy with "Anyone" access
5. Test with the debug-test.html page
