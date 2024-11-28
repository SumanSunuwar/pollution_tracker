'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, Stack, Button } from '@mui/material';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { styled } from '@mui/material/styles';

// Chart.js Imports
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

// Styled component for uniform styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  cursor: 'pointer',  // Make the panel clickable for the Easter egg
}));

export default function DashboardPage() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [historicalWeather, setHistoricalWeather] = useState([]);
  const [livePollution, setLivePollution] = useState(null);
  const [historicalPollution, setHistoricalPollution] = useState([]);
  const [clickCount, setClickCount] = useState(0);  // For Easter egg

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await axios.get('http://127.0.0.1:8000/api/v1/weather');
        setCurrentWeather(weatherResponse.data);

        const historicalWeatherResponse = await axios.get('http://127.0.0.1:8000/api/v1/historical_weather_data', { params: { limit: 10 } });
        setHistoricalWeather(historicalWeatherResponse.data.historical_data);

        const livePollutionResponse = await axios.get('http://127.0.0.1:8000/api/v1/live_pollution_data');
        setLivePollution(livePollutionResponse.data);

        const historicalPollutionResponse = await axios.get('http://127.0.0.1:8000/api/v1/historical_pollution_data', { params: { limit: 10 } });
        setHistoricalPollution(historicalPollutionResponse.data.historical_data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Data preparation for charts
  const weatherTempData = historicalWeather.map((record) => record.temperature);
  const pollutionAqiData = historicalPollution.map((record) => record.air_quality_index);
  const labels = historicalWeather.map((record) => record.date);

  // Combined chart data for temperature and pollution AQI
  const combinedChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherTempData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Air Quality Index',
        data: pollutionAqiData,
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.1,
      },
    ],
  };

  // Handle Pokhara weather panel click for Easter egg
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  // Check if water quality index is below healthy threshold
  const waterQualityAlert = livePollution?.water_quality_index < 50; // Healthy threshold for WQI

  return (
    <Box padding={3}>
      {/* Current Weather and Live Pollution */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item onClick={handleClick}>
            <Typography variant="h6">Pokhara Current Weather</Typography>
            {currentWeather ? (
              <div>
                <Typography>Temperature: {currentWeather?.temperature}°C</Typography>
                <Typography>Weather: {currentWeather?.weather_description}</Typography>
              </div>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6">Live Pollution Indices</Typography>
            {livePollution ? (
              <div>
                <Typography>AQI: {livePollution.air_quality_index} | WQI: {livePollution.water_quality_index}</Typography>
                <Typography>Temperature: {livePollution.temperature}°C</Typography>
              </div>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Item>
        </Grid>
      </Grid>

      {/* Water Quality Alert */}
      {waterQualityAlert && (
        <Box marginTop={2} padding={2} backgroundColor="lightcoral" borderRadius={1}>
          <Typography color="white" variant="h6" align="center">
            Warning! The fish in Phewa Lake are starting to complain 🐟
          </Typography>
        </Box>
      )}

      {/* Easter Egg message */}
      {clickCount >= 3 && (
        <Box marginTop={2} padding={2} backgroundColor="lightblue" borderRadius={1}>
          <Typography variant="h6" align="center">
            We recommend boating with an umbrella today ☂.
          </Typography>
        </Box>
      )}

      {/* Historical Data Charts */}
      <Grid container spacing={2} marginTop={4}>
        {/* Combined Correlation Chart */}
        <Grid item xs={12}>
          <Item>
            <Typography variant="h5" gutterBottom>
              Historical Data: Temperature & AQI Correlation
            </Typography>
            <Line data={combinedChartData} />
          </Item>
        </Grid>
      </Grid>

      {/* Additional Charts (BarChart, ScatterChart, Gauge) */}
      <Grid container spacing={2} marginTop={4}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h5" gutterBottom>
              Bar Chart Example
            </Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Item>
        </Grid>

        {/* Scatter Chart */}
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h5" gutterBottom>
              Scatter Chart Example
            </Typography>
            <ScatterChart
              width={600}
              height={300}
              series={[
                {
                  label: 'Series A',
                  data: [
                    { x: 329.39, y: 443.28 },
                    { x: 96.94, y: 110.5 },
                    { x: 336.35, y: 175.23 },
                    { x: 159.44, y: 195.97 },
                    { x: 188.86, y: 351.77 },
                  ],
                },
                {
                  label: 'Series B',
                  data: [
                    { x: 329.39, y: 153.9 },
                    { x: 96.94, y: 217.8 },
                    { x: 336.35, y: 286.32 },
                    { x: 159.44, y: 325.12 },
                    { x: 188.86, y: 144.58 },
                  ],
                },
              ]}
            />
          </Item>
        </Grid>

        {/* Gauge Chart */}
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h5" gutterBottom>
              Gauge Chart Example
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
              <Gauge width={100} height={100} value={60} />
              <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
