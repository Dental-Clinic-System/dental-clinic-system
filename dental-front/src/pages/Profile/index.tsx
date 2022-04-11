import { Box, flexbox } from '@mui/system'

import React from 'react'
const flex = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: '20px'
}

const ProfilePage = () => {
  const mockdata = {
    username: "Sonor",
    address: "UB, BZD, 13 khoroo, 18 khoroolol, 68 Apt",
    firstname: "Mungunsukh",
    lastname: "Sonor",
    email: "sonor@gmail.com",
    phone: "99119911",
    birth: "2005.11.04",
    timestamp: {
      mon: "9:00 - 17:00",
      tue: "9:00 - 17:00",
      wed: "9:00 - 17:00",
      thu: "9:00 - 17:00",
      fri: "9:00 - 17:00"
    },
    role: "worker", // ["admin", "superadmin", "worker"]
    clinicId: "62384439c08d86a577ca37d4",
    serviceId: "622dbd4af7b28facf9bad4d5",
    profileImage: "https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-stethoscope-sign-editable-vector-eps-symbol-illustration-183153126.jpg"
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: "row"
    }} >
      <Box sx={flex}>
        <Box>
          <img src={mockdata.profileImage} style={{
            width: "300px",
            height: "300px",
            objectFit: "fill",
            borderRadius: "50%"
          }} />
        </Box>
        <Box>
          <h1>{mockdata.lastname} {mockdata.firstname}</h1>
          <h3>{mockdata.address}</h3>
          <h3>email: {mockdata.email}</h3>
          <h3>phone: {mockdata.phone}</h3>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'center' }} >
        <h1>Work Schedule</h1>
        <Box>
          <h3>Mon: </h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </Box>
      </Box>
    </Box>
  )
}
export default ProfilePage