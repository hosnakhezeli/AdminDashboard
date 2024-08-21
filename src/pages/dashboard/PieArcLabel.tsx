import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box, Typography } from '@mui/material';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 345,
  height: 269,
};

export default function PieArcLabel() {
  return (
    <Box sx={{ padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
          backgroundColor: '#D0D0D5',
        },
      }}>
      <Box><Typography sx={{color: '#666666'}}>نمودار فروش دسته بندی ها</Typography></Box>
      <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
    </Box>
  );
}
