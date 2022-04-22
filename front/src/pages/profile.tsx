import { Box } from '@mui/system'
import { Paper, Container } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { info } from './globaldata'
import { useLocation } from 'react-router-dom'
import { SnackBar } from '../components/custom/snackbaralert';
import { FabLoading } from '../components/custom/loaderfab';
import { useState } from 'react';
import { IProfile } from '../interfaces/IProfile';

//STYLES
const styles = {
    mainContainer: {
        display: 'flex', flexDirection: 'column',
    },
    paperContainer: {
        display: 'flex', flexDiretion: 'row', justifyContent: 'space-around',
    },
    descriptionContainer: {
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column',
    },
    avatar: {
        width: '30px', height: '30px', objectFit: 'fill', borderRadius: '50%',
    },
    avatarContainer: {
        width: '30px', height: '30px', 
    },

}

//PAGE CODE
export const ProfilePage = () => {
    //GETTING DATA FROM MOCKDATA
    const avatar = 'https://thumbs.dreamstime.com/b/medical-doctor-profile-icon-stethoscope-sign-editable-vector-eps-symbol-illustration-183153126.jpg'
    const location = useLocation();
    const id: any = location.pathname.split('/')[2];
    const information = {
        _id: info[id - 1]._id,
        username: info[id - 1].username,
        firstname: info[id - 1].firstname,
        lastname: info[id - 1].lastname,
        address: info[id - 1].address,
        email: info[id - 1].email,
        phone: info[id - 1].phone,
        birth: info[id - 1].birth,
        timestamp: {
            mon: info[id - 1].timestamp.mon,
            tue: info[id - 1].timestamp.tue,
            wed: info[id - 1].timestamp.wed,
            thu: info[id - 1].timestamp.thu,
            fri: info[id - 1].timestamp.fri
        },
        role: info[id - 1].role, // ["admin", "superadmin", "worker"],
        clinicId: info[id - 1].clinicId,
        serviceId: info[id - 1].serviceId,
        info: info[id - 1].info
    }
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IProfile>(information);

    //EDIT BUTTON && OPEN SNACKBAR
    const handleClick = () => {
        setOpen(true);
        setEdit(false);
    };
    return (
        <Container component='main' maxWidth='xs' sx={styles.mainContainer}>
            <Paper sx={styles.paperContainer}>
                <Box sx={styles.avatarContainer}>
                    <img src={avatar} alt='avatar' style={styles.avatar}/>
                </Box>
            </Paper>
            {
                edit === false ?
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} onClick={() => setEdit(true)}>
                        <FabLoading loading={loading}>
                            <EditIcon />
                        </FabLoading>
                        <SnackBar children={'Амжилттай хадгалагдлаа！'} isOpen={open} />
                    </Box>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} onClick={() => handleClick()} >
                        <FabLoading loading={loading}>
                            <SaveIcon />
                        </FabLoading>
                    </Box>
            }
        </Container>
    )
}
export default ProfilePage
