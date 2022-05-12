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
        ...style
      }}
    >
      {children}
    </td>
  );
};
const Th = ({ children }: { children?: ReactNode }) => {
  return (
    <th style={{ border: '1px solid black', fontSize: 14, fontWeight: '600' }}>
      {children}
    </th>
  );
};

export const FinanceReport = () => {
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
        id="finance"
      >
        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
          САНХҮҮГИЙН БАЙДЛЫН ТАЙЛАН
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
            <Th>Мөрийн дугаар</Th>
            <Th>БАЛАНСЫН ЗҮЙЛ</Th>
            <Th>ЭХНИЙ ҮЛДЭГДЭЛ</Th>
            <Th>СҮҮЛИЙН ҮЛДЭГДЭЛ</Th>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td></Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>Хөрөнгө</Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>1</Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>
              Эргэлтийн Хөрөнгө
            </Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>223,574.00</Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>603,074.00</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>2</Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>
              Үндсэн Хөрөнгө
            </Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>
              6,554,709.00
            </Td>
            <Td style={{ fontSize: '12px', fontWeight: '600' }}>
              8,262,003.00
            </Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>2.1</Td>
            <Td>Биет Хөрөнгө</Td>
            <Td>6,554,709.00</Td>
            <Td>8,262,003.00</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>2.1.1</Td>
            <Td>Машин, тоног төхөөрөмж</Td>
            <Td>4,000,709.00</Td>
            <Td>6,262,003.00</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td>2.1.2</Td>
            <Td>Тавилга, аж ахуйн эд хогшил</Td>
            <Td>2,000,000.00</Td>
            <Td>2,000,000.00</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}></Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              Эргэлтийн Бус Хөрөнгө
            </Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>654,709.00</Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>762,003.00</Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}></Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              Нийт Хөрөнгө
            </Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              7,209,418.00
            </Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              11.209.418.00
            </Td>
          </tr>
          <tr style={{ border: '1px solid black' }}>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}></Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              Богино Хугацаат Өр Төлбөрийн Дүн
            </Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              2,215,432.00
            </Td>
            <Td style={{ fontSize: '13px', fontWeight: '600' }}>
              1,102,432.00
            </Td>
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
