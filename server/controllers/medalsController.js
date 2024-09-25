const axios = require('axios');
require('dotenv').config();
const { QB_QUERY_URL,QB_REALM, QB_TOKEN, QB_MEDALS_TABLE_ID,QB_UPSERT_URL } = process.env;
const columnNames = {
  '3': 'Record ID#',
  '6': 'medal_type',
  '7': 'country',
  '8': 'sport_name',
  '9': 'year'
};

const _generateQueryBody = async () => {
  const data = JSON.stringify({
    'from': QB_MEDALS_TABLE_ID,
    'select': [6,7,8,9],
    'sortBy': [],
    'groupBy': [],
    'options': {
      'skip': 0,
      'top': 0,
      'compareWithAppLocalTime': false
    }
  });
  return data;
};

const _generateUpsertBody = async (country, sport, medal, year) => {
  const data = JSON.stringify({
    'to': QB_MEDALS_TABLE_ID,
    'data': [
      {
        '6': {
          'value': medal
        },
        '7': {
          'value': country
        },
        '8': {
          'value': sport
        },
        '9': {
          'value': year
        }
      }
    ],
    'fieldsToReturn': []
  });
  return data;
};
const _sendQBRequest = async (url, method = 'GET', body) => {

  const config = {
    method: method,
    url: url,
    headers: {
      'Authorization': QB_TOKEN,
      'QB-Realm-Hostname': QB_REALM,
      'Content-Type': 'application/json'
    },

  };
  if (body) {
    config.data = body;
  }

  const { data } = await axios.request(config);
  return data;
};

const getMedals = async (req, res) => {
  const body = await _generateQueryBody();
  const responseData = await _sendQBRequest(QB_QUERY_URL,'POST',body);
  const response = {
    totalRecords: responseData?.metadata?.totalRecords,
    skip: responseData?.metadata?.skip,
    rows: responseData?.data?.map((item) => {
      const medalInfo = {};
      const columnKeys = Object.keys(columnNames);

      columnKeys.forEach((key) => {
        if (item[key]) {
          medalInfo[columnNames[key]] = item[key].value;
        }
      });
      return(medalInfo);
    })
  };
  res.json(response);
};

const saveMedal = async (req, res) => {
  const { country, sport, medal, year } = req.body;

  const body = await _generateUpsertBody(country,sport,medal,year);
  const responseData = await _sendQBRequest(QB_UPSERT_URL, 'POST', body);
  res.json({recordsProcessed:responseData?.metadata?.totalNumberOfRecordsProcessed});
};

module.exports = {
  saveMedal,getMedals
};

