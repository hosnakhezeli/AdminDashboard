import React from 'react';
import { Box,Typography } from '@mui/material';


function AdvBox() {
  
  return (
    <Box sx={{ padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#D0D0D5',
        },
        display: 'flex',
        minHeight: '127px',
        justifyContent: 'space-between',
        width: '100%',
    }}
    >
    <Typography sx={{ marginBottom: '16px',  color: '#666666' }}>
      پرفروش ترین محصول
    </Typography>
    <Typography>103.700.000 تومان</Typography>
    </Box>
  );
};

export default AdvBox;
