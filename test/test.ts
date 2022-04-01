const axios = require('axios')

export const Test = async () => {

    const ADDCLINIC = `
    mutation AddClinic {
      addClinic(
        clinic_name: "TEST hospital"
        phone: "99999999"
        email: "test@hospital123123231.com"
        official_address: { city: "Test city", district: "test dist", sub_district: "test subdist", full_address: "test fulladdress" }
      ) {
        _id
        clinic_name
        operation_name
        operation_date
        contact_number
        clinic_web
        email
        official_address {
          city
          district
          sub_district
          full_address
        }
        status
        clinic_admin {
          admin_number
          admin_email
          admin_name
          position
        }
        workhours
        phone
      }
    }
    `;

    const data = await axios.post("http://localhost:4000", { query: ADDCLINIC }, {
        headers: {
        'Content-Type': 'application/json'
        }
    })
    console.log('a: ', data?.data)
    return data.data
}

Test()