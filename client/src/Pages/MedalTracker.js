import React, { useEffect, useState } from 'react';

import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import TrophyChart from "../Components/TrophyChart";
import { API_SERVER } from "../Constants/ApiConstants";
const MedalTracker = () => {
  const [country, setCountry] = useState('');
  const [sport, setSport] = useState('');
  const [medal, setMedal] = useState('');
  const [year, setYear] = useState('');
  const[medalsData,setMedalsData] = useState('')
  const countries = ['Canada', 'Germany', 'Norway', 'United States']
  const types = [{
        name: 'Bronze',
        data: [2,5,7,9],
        color: '#DAA520'
    }, {
        name: 'Gold',
        data: [2,8,9,0],
        color: 'yellow'
    }, {
        name: 'Silver',
        data: [0,1,2,3],
        color: 'grey'
    }]

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
      }).then((res)=>res.json())
    console.log("response", response)
    setMedalsData(response)
    } catch(err) {
      console.log("error:", err)
    }
  }
  useEffect(() => {
    getMedalRecords()
  },[])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '80%',
        margin: '0 auto'
      }}
      >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '50%',
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
        {medalsData && <TrophyChart countries={countries} series={types} ></TrophyChart>}
      </Box>

    </Box>
  );
};

export default MedalTracker;

