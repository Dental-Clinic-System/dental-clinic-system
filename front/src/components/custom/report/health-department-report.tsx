import { ReactNode, CSSProperties } from 'react';
import { Typography } from '@material-ui/core';
import { Box, Container } from '@mui/material';

const Td = ({
  children,
  style
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <td
      style={{
        border: '1px solid black',
        fontSize: '12px',
        fontWeight: '500',
        width: '50%',
        ...style
      }}
    >
      {children}
    </td>
  );
};
const Th = ({ children }: { children?: ReactNode }) => {
  return (
    <th
      style={{
        border: '1px solid black',
        fontSize: 14,
        fontWeight: '600'
      }}
    >
      {children}
    </th>
  );
};

export const HealthDepartReport = () => {
  return (
    <Container maxWidth="lg">
      <Box
        style={{
          width: 595,
          height: 842,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          padding: 25
        }}
        id="healthDepart"
      >
        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
          НИЙСЛЭЛИЙН ЭРҮҮЛ МЭНДИЙН ГАЗАРТ
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%" mt={5}>
          <Typography
            style={{
              width: 200,
              borderBottom: '1px solid black',
              textAlign: 'center'
            }}
            variant="overline"
          >
            "Chandmani" ХК
          </Typography>
          <Typography variant="h6">2014 оны 12 сарын 31 өдөр</Typography>
        </Box>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: 50,
            border: '1px solid black'
          }}
        >
          <tr style={{ border: '1px solid black' }}>
            <Th>Нэр</Th>
            <Th>Тоо</Th>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>0-5 нас</Td>
            <Td>120</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>6-12 нас</Td>
            <Td>100</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>13-18 нас</Td>
            <Td>32</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>18-29 нас</Td>
            <Td>89</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>30-44 нас</Td>
            <Td>208</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>45-64 нас</Td>
            <Td>243</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>65-81 нас</Td>
            <Td>176</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Анх удаа үйлчлүүлсэн</Td>
            <Td>125</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Дахин үйлчлүүлсэн</Td>
            <Td>453</Td>
          </tr>
        </table>
        <table style={{ marginTop: '20px', fontSize: '12px' }}>
          <tr>
            <td>Ерөнхий менежер</td>
            <td>_ _ _ _ _ _ _ _ _</td>
          </tr>
          <tr>
            <td>Нягтлан бодогч</td>
            <td>_ _ _ _ _ _ _ _ _</td>
          </tr>
          <tr>
            <td>Баталгаажуулагч</td>
            <td>_ _ _ _ _ _ _ _ _</td>
          </tr>
        </table>
      </Box>
    </Container>
  );
};
