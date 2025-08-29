// Google Apps Script for Google Sheets Integration
// Instructions:
// 1. Go to script.google.com
// 2. Create a new project
// 3. Replace the default code with this script
// 4. Save and deploy as web app
// 5. Copy the web app URL and replace 'YOUR_GOOGLE_SCRIPT_URL_HERE' in script.js

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet (replace with your sheet ID)
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Get this from your Google Sheet URL
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['التاريخ والوقت', 'المنتج', 'الاسم', 'رقم الهاتف', 'العنوان', 'المدينة']
      ]);
      
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground('#3AA6FF');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Add the new order data
    sheet.appendRow([
      data.timestamp,
      data.product,
      data.name,
      data.phone,
      data.address,
      data.city
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 6);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Order saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        product: 'أسود كلاسيكي',
        name: 'أحمد محمد',
        phone: '0612345678',
        address: 'شارع الحسن الثاني، رقم 123',
        city: 'الدار البيضاء',
        timestamp: new Date().toLocaleString('ar-EG')
      })
    }
  };
  
  console.log(doPost(testData));
}
