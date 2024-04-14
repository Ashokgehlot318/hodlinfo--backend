const Data = require("../model/data.model");
const axios = require('axios');

exports.newData = async (req,res,next) =>{
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const tickers = response.data;
        const top10 = Object.values(tickers)
          .sort((a, b) => b.baseVolume - a.baseVolume)
          .slice(0, 10);

          // console.log(top10);
          const existingData = await Data.find({}); // Check if data is present
          if(existingData.length > 0) {
              await Data.deleteMany({}); // If data is present, delete it
          }
        await Data.insertMany(top10); // inserting new data

        console.log('Data stored successfully');
       
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
}