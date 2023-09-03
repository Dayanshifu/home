const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('q', 'Hello, world!');
encodedParams.set('target', 'es');
encodedParams.set('source', 'en');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '3ada4e03fdmsh850814412feadbap132e87jsn506755e664bc',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}