

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
        width: '20%',
        textAlign: 'center',
        ...style
      }}
    >
      {children}
    </td>
  );
};
const Th = ({
  children,
  style
}: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <th
      style={{
        border: '1px solid black',
        fontSize: 14,
        fontWeight: '600',
        ...style
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
          // height: 842,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          padding: 25
        }}
        id="healthDepart"
      >
        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
          Амбулаторын үзлэг / Насны бүлэг
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
            <Th></Th>
            <Th>Оношилгоо эмчилгээ</Th>
            <Th>Гажиг засал</Th>
            <Th>Согог засал</Th>
            <Th>Мэс засал</Th>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Үзлэгийн тоо бүгд</Td>
            <Td>15</Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>2</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Эрэгтэй</Td>
            <Td>7</Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>2</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Эмэгтэй</Td>
            <Td>8</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Ам Булаторын үзлэгийн тоо</Td>
            <Td>15</Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>2</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Анх</Td>
            <Td>14</Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>1</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>Давтан</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>1</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>1 хүртэлх: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>1 хүртэлх: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>1-4: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>1-4: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>5-9: Эрэгтэй</Td>
            <Td>2</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>5-9: Эмэгтэй</Td>
            <Td>2</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>10-14: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>10-14: Эмэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>15-19: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>15-19: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>20-24: Эрэгтэй</Td>
            <Td>2</Td>
            <Td>0</Td>
            <Td>1</Td>
            <Td>1</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>20-24: Эмэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>25-29: Эрэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>25-29: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>30-34: Эрэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>1</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>30-34: Эмэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>35-39: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>35-39: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>40-44: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>40-44: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>45-49: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>45-49: Эмэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>50-54: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>50-54: Эмэгтэй</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>55-59: Эрэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>55-59: Эмэгтэй</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
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

