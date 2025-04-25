import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import MeditationProgress from '../components/MeditationProgress';
import HabitTracker from '../components/HabitTracker';
import DailyQuote from '../components/DailyQuote';

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <DailyQuote />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <MeditationProgress completed={2} total={5} />
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <HabitTracker completed={3} total={7} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
