import React, { useEffect, useState } from 'react';

import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import TrophyChart from "../Components/TrophyChart";
import { API_SERVER } from "../Constants/ApiConstants";
const MedalTracker = () => {
  const [country, setCountry] = useState('');
  const [sport, setSport] = useState('');
  const [medal, setMedal] = useState('');
  const [year, setYear] = useState('');
  const [medalsData, setMedalsData] = useState('')

const uniqueCountries = [...new Set(medalsData?.rows?.map(row => row.country))];
const countMedalsByType = (medalType) => {
  return uniqueCountries.map(country => ({
      country,
      count: medalsData.rows.filter(row =>
          row.country === country && row.medal_type.toLowerCase() === medalType.toLowerCase()
      ).length
  }))
  .map(item => item.count === 0 ? null : item.count);
};
const series = [
    {
        name: 'Bronze',
        data: countMedalsByType('Bronze'),
        color: '#DAA520'
    },
    {
        name: 'Gold',
        data: countMedalsByType('Gold'),
        color: 'yellow'
    },
    {
        name: 'Silver',
        data: countMedalsByType('Silver'),
        color: 'grey'
    }
];

const countries = uniqueCountries;

console.log("Series:", series);
console.log("Countries:", countries);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleMedalChange = (event) => {
    setMedal(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };



  const handleSubmit = async (country,sport,medal,year) => {
    try {
        const response = await fetch(`${API_SERVER.URL}/medals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country,
                sport,
                medal,
                year
            })
        });

        const result = await response.json();
        if (response.ok) {
          console.log('Saved Data:', result);
          await getMedalRecords()
        } else {
            console.error(`Failed to save data`);
        }
    } catch (error) {
        console.error(error);
    }
};

const getMedalRecords = async () => {
  try {
    const response = await fetch(`${API_SERVER.URL}/medals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setMedalsData(data);
  } catch (err) {
    console.log("error:", err);
  }
};

  useEffect(() => {
    getMedalRecords()
  },[])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '34%',
        margin: '0 auto'
      }}
      >
      <h3> Select the fields</h3>
          <FormControl fullWidth>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          value={country}
          onChange={handleCountryChange}
          label="Country"
        >
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="United States">United States</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="Norway">Norway</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="sport-label">Sport</InputLabel>
        <Select
          labelId="sport-label"
          value={sport}
          onChange={handleSportChange}
          label="Sport"
        >
          <MenuItem value="Wrestling">Wrestling</MenuItem>
          <MenuItem value="Rugby">Rugby</MenuItem>
          <MenuItem value="Tennis">Tennis</MenuItem>
          <MenuItem value="Karate">Karate</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="medal-label">Medal</InputLabel>
        <Select
          labelId="medal-label"
          value={medal}
          onChange={handleMedalChange}
          label="Medal"
        >
          <MenuItem value="Gold">Gold</MenuItem>
          <MenuItem value="Silver">Silver</MenuItem>
          <MenuItem value="Bronze">Bronze</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="year-label">Year</InputLabel>
        <Select
          labelId="year-label"
          value={year}
          onChange={handleYearChange}
          label="Year"
        >
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2012">2012</MenuItem>
        </Select>
          </FormControl>
          <Button
        variant="contained"
        color="primary"
        onClick={()=>handleSubmit(country,sport,medal,year)}
        sx={{ marginTop: 2 }}
      >
        Submit
        </Button>
        {medalsData && <TrophyChart countries={countries} series={series} ></TrophyChart>}
      </Box>


  );
};

export default MedalTracker;

