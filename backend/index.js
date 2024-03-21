const ConversionClient = require('conversiontools');

// API Token from your Profile page at https://conversiontools.io/profile
const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzMzk3NmJlMDMxODQ5NzhiOTJjMTc4ZDg3YzYyOGUxIiwiaWF0IjoxNzEwMDc4MzU4fQ.HkUaJs0lRyrkBqDL0izRQbqO6YdZmoqxik3iucPxmSw';

const convert = async () => {
  const conversionClient = new ConversionClient(apiToken);
  const conversionOptions = {
    url: 'https://en.wikipedia.org/wiki/Main_Page',
    timeout: 4000,
    outputFilename: 'wiki.jpg',
    options: {
      images: 'yes',
      javascript: 'yes',
    },
  };
  try {
    const filename = await conversionClient.run('convert.website_to_jpg', conversionOptions);
    console.log('File downloaded to', filename);
  } catch (err) {
    console.error('Conversion error', err);
  }
};

convert();