// Google Apps Script for Google Sheets Integration
// Instructions:
// 1. Go to script.google.com
// 2. Create a new project
// 3. Replace the default code with this script
// 4. Save and deploy as web app
// 5. Copy the web app URL and replace 'YOUR_GOOGLE_SCRIPT_URL_HERE' in script.js

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    // Log the incoming request for debugging
    console.log('Request received:', JSON.stringify(e));
    
    let data;
    
    // Handle both form data and JSON data
    if (e.postData) {
      if (e.postData.type === 'application/x-www-form-urlencoded') {
        // Handle form submission
        data = e.parameter;
        console.log('Form data received:', JSON.stringify(data));
      } else {
        // Handle JSON submission
        data = JSON.parse(e.postData.contents);
        console.log('JSON data received:', JSON.stringify(data));
      }
    } else {
      // Handle GET request parameters
      data = e.parameter;
      console.log('GET parameters received:', JSON.stringify(data));
    }
    
    // Log all received data for debugging
    console.log('All received data keys:', Object.keys(data));
    console.log('Data values:', data);
    
    // Validate required fields
    if (!data.name || !data.phone || !data.product) {
      console.log('Missing fields - name:', data.name, 'phone:', data.phone, 'product:', data.product);
      throw new Error('Missing required fields: name, phone, or product');
    }
    
    // Open your Google Sheet (replace with your sheet ID)
    const SHEET_ID = '1RLd7LbjH5yoj1JaWUa7hipULaVSpHuuLCkNTmtXzdMM'; // Get this from your Google Sheet URL
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([
        ['التاريخ والوقت', 'المنتج', 'الاسم', 'رقم الهاتف', 'العنوان', 'المدينة', 'الكمية', 'ملاحظات']
      ]);
      
      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setBackground('#4CAF50');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // Prepare the data row
    const timestamp = data.timestamp || new Date().toLocaleString('en-US');
    const product = data.product || '';
    const name = data.name || '';
    const phone = data.phone || '';
    const address = data.address || '';
    const city = data.city || '';
    const quantity = data.quantity || '1';
    const notes = data.notes || '';
    
    // Add the new row
    const newRow = [timestamp, product, name, phone, address, city, quantity, notes];
    sheet.appendRow(newRow);
    
    console.log('Data successfully added to sheet:', newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'تم إرسال الطلب بنجاح',
        data: {
          timestamp: timestamp,
          product: product,
          name: name,
          phone: phone
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing request:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'حدث خطأ في إرسال الطلب'
      }))
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
        quantity: '1',
        notes: 'طلب عاجل',
        timestamp: new Date().toLocaleString('ar-EG')
      })
    }
  };
  
  console.log(doPost(testData));
}
