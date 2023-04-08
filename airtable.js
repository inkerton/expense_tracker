const Airtable = require('airtable');

// Replace the placeholders with your own values
const base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('YOUR_BASE_ID');
const tableName = 'id';

// Add an event listener to the form submit button
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission

  // Get the form data
  const formData = new FormData(event.target);

  // Convert the form data to a JavaScript object
  const data = Object.fromEntries(formData.entries());

  // Insert the data into the table
  base(tableName).create(data, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Record created:', record.getId());
  });
});
