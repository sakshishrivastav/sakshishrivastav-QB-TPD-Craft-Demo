import yup from 'yup';

const countries = ['Canada', 'United States', 'Germany', 'Norway'];
const sports = ['Wrestling', 'Rugby', 'Tennis', 'Karate'];
const medals = ['Gold', 'Silver', 'Bronze'];
const year = ['2012', '2016', '2020', '2024'];

const postModel = yup.object({
    body: yup.object({
        country: yup.string().oneOf(countries).required(),
        sport: yup.string().oneOf(sports).required(),
        medal: yup.string().oneOf(medals).required(),
        year: yup.string().oneOf(year).required(),
    }),
});

export default postModel;

