'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { saveAs } from 'file-saver';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define interfaces for type safety
interface HistoricalWeatherData {
  date: string;
  temperature: number;
  humidity: number;
  wind_speed: number;
  rain_mm: number;
  weather_description: string;
  water_quality_index?: number; // Assume this is part of the response
}

interface HistoricalWeatherResponse {
  total_count: number;
  historical_data: HistoricalWeatherData[];
}

export default function WeatherHistoryPage() {
  const [historicalWeather, setHistoricalWeather] = useState<HistoricalWeatherData[]>([]);
  const [startDate, setStartDate] = useState<string>('2024-11-18');
  const [endDate, setEndDate] = useState<string>('2024-11-28');
  const [limit, setLimit] = useState<number>(10);
  const [clickCount, setClickCount] = useState<number>(0); // Easter egg click count

  // Fetch historical weather data with the given parameters
  const fetchHistoricalWeather = () => {
    axios
      .get<HistoricalWeatherResponse>('http://127.0.0.1:8000/api/v1/historical_weather_data', {
        params: { start_date: startDate, end_date: endDate, limit: limit },
      })
      .then((response) => {
        setHistoricalWeather(response.data.historical_data);
      })
      .catch((error) => {
        console.error('Error fetching historical weather:', error);
      });
  };

  useEffect(() => {
    fetchHistoricalWeather();
  }, [startDate, endDate, limit]);

  // Show alert if water quality index falls below threshold
  useEffect(() => {
    const lowQuality = historicalWeather.some((record) => record.water_quality_index && record.water_quality_index < 50);
    if (lowQuality) {
      alert("Warning! The fish in Phewa Lake are starting to complain 🐟");
    }
  }, [historicalWeather]);

  // Prepare data for the Line chart
  const chartData = {
    labels: historicalWeather.map((record) => record.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: historicalWeather.map((record) => record.temperature),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Humidity (%)',
        data: historicalWeather.map((record) => record.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Wind Speed (m/s)',
        data: historicalWeather.map((record) => record.wind_speed),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Export data as CSV
  const exportAsCSV = () => {
    const csvData = [
      ['Date', 'Temperature (°C)', 'Humidity (%)', 'Wind Speed (m/s)', 'Rain (mm)', 'Description'],
      ...historicalWeather.map((data) => [
        data.date,
        data.temperature,
        data.humidity,
        data.wind_speed,
        data.rain_mm,
        data.weather_description,
      ]),
    ];

    const csvContent = csvData
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'historical_weather_data.csv');
  };

  // Easter egg: Handle click count on the Pokhara weather panel
  const handlePanelClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        alert('We recommend boating with an umbrella today ☂.');
      }
      return newCount;
    });
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom onClick={handlePanelClick}>
        Historical Weather Data (Line Chart)
      </Typography>

      {/* Filters */}
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={3}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Limit"
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            fullWidth
            InputProps={{ inputProps: { min: 1, max: 100 } }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={fetchHistoricalWeather}>
            Apply Filters
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" onClick={exportAsCSV}>
            Export as CSV
          </Button>
        </Grid>
      </Grid>

      {/* Line Chart */}
      {historicalWeather.length > 0 ? (
        <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Historical Weather Data' } } }} />
      ) : (
        <Typography>Loading historical weather data...</Typography>
      )}
    </Box>
  );
}
