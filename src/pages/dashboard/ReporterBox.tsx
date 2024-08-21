import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function ReporterBox() {
  const items = [
    {
      label: 'مقدار فروش',
      value: '۴۳۲,۰۰۰,۰۰۰ تومان',
      icon: <AttachMoneyIcon />,
      color: '#A7E0F6',
    },
    {
      label: 'تعداد سفارش',
      value: '۲,۱۷۹ سفارش',
      icon: <TrendingUpIcon />,
      color: '#D9CCE3',
    },
    {
      label: 'تعداد محصولات',
      value: '۱۵۷ عدد',
      icon: <InventoryIcon />,
      color: '#F7CED8',
    },
    {
      label: 'تعداد تمام کاربران',
      value: '۱۲,۳۹۶ نفر',
      icon: <PersonIcon />,
      color: '#A7E0F6',
    },
  ];

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#FFFFFF', borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
          backgroundColor: '#D0D0D5',
        },
     }}>
    <Typography variant="h6" sx={{ marginBottom: '16px',  color: '#666666',fontsize: '1.05rem' }}>
      گزارشات سریع
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            flex: '1 1 114px',
            minWidth: '166px',
            margin: '0',
            '&:hover': {
              boxShadow: '3',
              },
          }}
        >
          <Avatar sx={{ bgcolor: item.color, width: 40, height: 40 }}>
            {item.icon}
          </Avatar>
          <Box sx={{ marginLeft: '8px'}}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#666666' }}>
              {item.value}
            </Typography>
            <Typography variant="caption" sx={{ color: '#999999' }}>
              {item.label}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);
}

export default ReporterBox;
