const {object,string} = require('yup');
const countryEnums = ['Canada', 'United States', 'Germany', 'Norway'];
const yearEnums = ['2012', '2016', '2020', '2024'];
const medalNames = ['GOLD', 'SILVER', 'BRONZE'];
const sportsNames = ['Wrestling','Rugby','Tennis','Karate'];
export const medalRequestSchema = object({
  body: object({
    country: string().oneOf(countryEnums).required(),
    sports: string().oneOf(sportsNames).required(),
    year: string().oneOf(yearEnums).required(),
    medal: string().oneOf(medalNames).required(),
  }),
});
