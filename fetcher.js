const request = require('request');
const fs      = require('fs');

const url      = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log('error:', error);
    }
    
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${filePath}`);
  });
});