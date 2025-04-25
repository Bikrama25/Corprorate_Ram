import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const MeditationProgress = ({ completed, total }) => {
  const progress = (completed / total) * 100;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Meditation Progress
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ height: 10, mb: 2 }}
      />
      <Typography>
        {completed} of {total} sessions completed today
      </Typography>
    </Box>
  );
};

export default MeditationProgress;
