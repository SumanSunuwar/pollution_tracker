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
interface HistoricalPollutionData {
  date: string;
  air_quality_index: number;
  water_quality_index: number;
  temperature: number;
}

interface HistoricalPollutionResponse {
  total_count: number;
  historical_data: HistoricalPollutionData[];
}

interface LivePollutionData {
  pm2_5: number;
  pm10: number;
  no2: number;
  so2: number;
  co: number;
  air_quality_index: number;
}

interface WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;
}

export default function PollutionHistoryPage() {
  const [historicalPollution, setHistoricalPollution] = useState<HistoricalPollutionData[]>([]);
  const [livePollution, setLivePollution] = useState<LivePollutionData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [startDate, setStartDate] = useState<string>('2024-11-18');
  const [endDate, setEndDate] = useState<string>('2024-11-28');
  const [limit, setLimit] = useState<number>(10);

  // Fetch historical pollution data with the given parameters
  const fetchHistoricalPollution = () => {
    axios
      .get<HistoricalPollutionResponse>('http://127.0.0.1:8000/api/v1/historical_pollution_data', {
        params: { start_date: startDate, end_date: endDate, limit: limit },
      })
      .then((response) => {
        setHistoricalPollution(response.data.historical_data);
      })
      .catch((error) => {
        console.error('Error fetching historical pollution:', error);
      });
  };

  // Fetch live pollution data from the API
  const fetchLivePollutionData = () => {
    axios
      .get<LivePollutionData>('http://127.0.0.1:8000/api/v1/live_pollution_data')
      .then((response) => {
        setLivePollution(response.data);
      })
      .catch((error) => {
        console.error('Error fetching live pollution data:', error);
      });
  };

  // Fetch live weather data
  const fetchWeatherData = () => {
    axios
      .get<WeatherData>('http://127.0.0.1:8000/api/v1/weather_data')
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  // Call APIs when the component mounts
  useEffect(() => {
    fetchHistoricalPollution();
    fetchLivePollutionData();
    fetchWeatherData();
  }, [startDate, endDate, limit]);

  // Prepare data for the Line chart
  const chartData = {
    labels: historicalPollution.map((record) => record.date),
    datasets: [
      {
        label: 'Air Quality Index',
        data: historicalPollution.map((record) => record.air_quality_index),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Water Quality Index',
        data: historicalPollution.map((record) => record.water_quality_index),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Temperature (°C)',
        data: historicalPollution.map((record) => record.temperature),
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
      ['Date', 'Air Quality Index', 'Water Quality Index', 'Temperature (°C)'],
      ...historicalPollution.map((data) => [
        data.date,
        data.air_quality_index,
        data.water_quality_index,
        data.temperature,
      ]),
    ];

    const csvContent = csvData
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'historical_pollution_data.csv');
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Historical Pollution Data (Line Chart)
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
          <Button variant="contained" color="primary" onClick={fetchHistoricalPollution}>
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
      {historicalPollution.length > 0 ? (
        <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Historical Pollution Data' } } }} />
      ) : (
        <Typography>Loading historical pollution data...</Typography>
      )}

      {/* Live Pollution Data */}
      {livePollution && (
        <Box marginTop={3}>
          <Typography variant="h6">Live Pollution Data</Typography>
          <Typography>PM2.5: {livePollution.pm2_5} µg/m³</Typography>
          <Typography>PM10: {livePollution.pm10} µg/m³</Typography>
          <Typography>NO2: {livePollution.no2} ppb</Typography>
          <Typography>SO2: {livePollution.so2} ppb</Typography>
          <Typography>CO: {livePollution.co} ppb</Typography>
          <Typography>Air Quality Index: {livePollution.air_quality_index}</Typography>
        </Box>
      )}

      {/* Weather Data */}
      {weatherData && (
        <Box marginTop={3}>
          <Typography variant="h6">Live Weather Data</Typography>
          <Typography>Temperature: {weatherData.temperature} °C</Typography>
          <Typography>Humidity: {weatherData.humidity} %</Typography>
          <Typography>Pressure: {weatherData.pressure} hPa</Typography>
        </Box>
      )}
    </Box>
  );
}
