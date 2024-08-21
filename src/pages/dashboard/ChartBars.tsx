import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material'

export default function BasicBars() {
  return (
    <Box sx={{ padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
          backgroundColor: '#D0D0D5',
        },
        width: '100%',
      }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666'}}>
      <Typography>نمودار فروش</Typography>
      <Typography>۳۴۱۰۰۰ تومان</Typography>
    </Box>

    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    </Box>
  );
}
