import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { id } from "date-fns/locale";


let teeth18 = require("./teeth/fullImage-buccal/buccal-18.png");
let teeth17 = require("./teeth/fullImage-buccal/buccal-17.png");
let teeth16 = require("./teeth/fullImage-buccal/buccal-16.png");
let teeth15 = require("./teeth/fullImage-buccal/buccal-15.png");
let teeth14 = require("./teeth/fullImage-buccal/buccal-14.png");
let teeth13 = require("./teeth/fullImage-buccal/buccal-13.png");
let teeth12 = require("./teeth/fullImage-buccal/buccal-12.png");
let teeth11 = require("./teeth/fullImage-buccal/buccal-11.png");

let teeth28 = require("./teeth/fullImage-buccal/buccal-28.png");
let teeth27 = require("./teeth/fullImage-buccal/buccal-27.png");
let teeth26 = require("./teeth/fullImage-buccal/buccal-26.png");
let teeth25 = require("./teeth/fullImage-buccal/buccal-25.png");
let teeth24 = require("./teeth/fullImage-buccal/buccal-24.png");
let teeth23 = require("./teeth/fullImage-buccal/buccal-23.png");
let teeth22 = require("./teeth/fullImage-buccal/buccal-22.png");
let teeth21 = require("./teeth/fullImage-buccal/buccal-21.png");

let teeth38 = require("./teeth/fullImage-buccal/buccal-38.png");
let teeth37 = require("./teeth/fullImage-buccal/buccal-37.png");
let teeth36 = require("./teeth/fullImage-buccal/buccal-36.png");
let teeth35 = require("./teeth/fullImage-buccal/buccal-35.png");
let teeth34 = require("./teeth/fullImage-buccal/buccal-34.png");
let teeth33 = require("./teeth/fullImage-buccal/buccal-33.png");
let teeth32 = require("./teeth/fullImage-buccal/buccal-32.png");
let teeth31 = require("./teeth/fullImage-buccal/buccal-31.png");

let teeth48 = require("./teeth/fullImage-buccal/buccal-48.png");
let teeth47 = require("./teeth/fullImage-buccal/buccal-47.png");
let teeth46 = require("./teeth/fullImage-buccal/buccal-46.png");
let teeth45 = require("./teeth/fullImage-buccal/buccal-45.png");
let teeth44 = require("./teeth/fullImage-buccal/buccal-44.png");
let teeth43 = require("./teeth/fullImage-buccal/buccal-43.png");
let teeth42 = require("./teeth/fullImage-buccal/buccal-42.png");
let teeth41 = require("./teeth/fullImage-buccal/buccal-41.png");

let incisal18 = require("./teeth/incisors/incisal-18.png");
let incisal17 = require("./teeth/incisors/incisal-17.png");
let incisal16 = require("./teeth/incisors/incisal-16.png");
let incisal15 = require("./teeth/incisors/incisal-15.png");
let incisal14 = require("./teeth/incisors/incisal-14.png");
let incisal13 = require("./teeth/incisors/incisal-13.png");
let incisal12 = require("./teeth/incisors/incisal-12.png");
let incisal11 = require("./teeth/incisors/incisal-11.png");

let incisal28 = require("./teeth/incisors/incisal-28.png");
let incisal27 = require("./teeth/incisors/incisal-27.png");
let incisal26 = require("./teeth/incisors/incisal-26.png");
let incisal25 = require("./teeth/incisors/incisal-25.png");
let incisal24 = require("./teeth/incisors/incisal-24.png");
let incisal23 = require("./teeth/incisors/incisal-23.png");
let incisal22 = require("./teeth/incisors/incisal-22.png");
let incisal21 = require("./teeth/incisors/incisal-21.png");

let incisal38 = require("./teeth/incisors/incisal-38.png");
let incisal37 = require("./teeth/incisors/incisal-37.png");
let incisal36 = require("./teeth/incisors/incisal-36.png");
let incisal35 = require("./teeth/incisors/incisal-35.png");
let incisal34 = require("./teeth/incisors/incisal-34.png");
let incisal33 = require("./teeth/incisors/incisal-33.png");
let incisal32 = require("./teeth/incisors/incisal-32.png");
let incisal31 = require("./teeth/incisors/incisal-31.png");

let incisal48 = require("./teeth/incisors/incisal-48.png");
let incisal47 = require("./teeth/incisors/incisal-47.png");
let incisal46 = require("./teeth/incisors/incisal-46.png");
let incisal45 = require("./teeth/incisors/incisal-45.png");
let incisal44 = require("./teeth/incisors/incisal-44.png");
let incisal43 = require("./teeth/incisors/incisal-43.png");
let incisal42 = require("./teeth/incisors/incisal-42.png");
let incisal41 = require("./teeth/incisors/incisal-41.png");

type teethType = {
    id: string;
};
const Teeth = (id: teethType) => {
    return (
        <Box>
            <img src={`./teeth/fullImage-buccal/buccal-${id}.png`} height="80" width="30" ></img>
        </Box>
    )
};

export const DentalChart = () => {

    const [selectedTeeth, selectTeeth] = useState('');



    return (
        <>
            {console.log(id)}
            <Box sx={{ width: '50%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={0.1}>
                            <Stack direction="column">
                                <Box>
                                    <img src={teeth18} id={"18"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal18} id={"18"} height="40" width="30"></img>
                                </Box>
                                18
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth17} id={"17"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal17} id={"17"} height="40" width="30"></img>
                                </Box>
                                17
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth16} id={"16"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal16} id={"16"} height="40" width="30"></img>
                                </Box>
                                16
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth15} id={"15"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal15} id={"15"} height="40" width="30"></img>
                                </Box>
                                15
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth14} id={"14"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal14} id={"14"} height="40" width="30"></img>
                                </Box>
                                14
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth13} id={"13"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal13} id={"13"} height="40" width="30"></img>
                                </Box>
                                13
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth12} id={"12"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal12} id={"12"} height="40" width="30"></img>
                                </Box>
                                12
                            </Stack>

                            <Stack direction="column">
                                <Box>
                                    <img src={teeth11} id={"11"} height="80" width="30"></img>

                                </Box>

                                <Box>
                                    <img src={incisal11} id={"11"} height="40" width="30"></img>
                                </Box>
                                11
                            </Stack>

                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={0.1}>
                            <Stack>
                                <Box>
                                    <img src={teeth28} id={"28"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal28} id={"28"} height="40" width="30"></img>
                                </Box>
                                28
                            </Stack>
                            <Stack>
                                <Box>
                                    <img src={teeth27} id={"27"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal27} id={"27"} height="40" width="30"></img>
                                </Box>
                                27
                            </Stack>
                            <Stack>
                                <Box>
                                    <img src={teeth26} id={"26"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal26} id={"26"} height="40" width="30"></img>
                                </Box>
                                26
                            </Stack>

                            <Stack>
                                <Box>
                                    <img src={teeth25} id={"25"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal25} id={"25"} height="40" width="30"></img>
                                </Box>
                                25
                            </Stack>

                            <Stack>

                                <Box>
                                    <img src={teeth24} id={"24"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal24} id={"24"} height="40" width="30"></img>
                                </Box>
                                24
                            </Stack>

                            <Stack>                             
                                <Box>
                                    <img src={teeth23} id={"23"} height="80" width="30"></img>

                                </Box>
                                <Box>
                                    <img src={incisal23} id={"23"} height="40" width="30"></img>
                                </Box>
                                23
                            </Stack>

                            <Stack>
                                <Box>
                                    <img src={teeth22} id={"22"} height="80" width="30"></img>
                                </Box>
                                <Box>
                                    <img src={incisal22} id={"22"} height="40" width="30"></img>
                                </Box>
                                22
                            </Stack>

                            <Stack>
                                <Box>
                                    <img src={teeth21} id={"21"} height="80" width="30"></img>
                                </Box>
                                <Box>
                                    <img src={incisal21} id={"21"} height="40" width="30"></img>
                                </Box>
                                21
                            </Stack>

                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={0.1}>
                            <Stack direction="column">
                                48

                                <Box>
                                    <img src={incisal48} id={"48"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth48} id={"48"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                47

                                <Box>
                                    <img src={incisal47} id={"47"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth47} id={"47"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                46

                                <Box>
                                    <img src={incisal46} id={"46"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth46} id={"46"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                45

                                <Box>
                                    <img src={incisal45} id={"45"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth45} id={"45"} height="80" width="30"></img>
                                </Box>



                            </Stack>

                            <Stack direction="column">
                                44


                                <Box>
                                    <img src={incisal44} id={"44"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth44} id={"44"} height="80" width="30"></img>
                                </Box>


                            </Stack>

                            <Stack direction="column">
                                43

                                <Box>
                                    <img src={incisal41} id={"43"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth41} id={"43"} height="80" width="30"></img>
                                </Box>


                            </Stack>

                            <Stack direction="column">
                                42

                                <Box>
                                    <img src={incisal42} id={"42"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth42} id={"42"} height="80" width="30"></img>
                                </Box>



                            </Stack>

                            <Stack direction="column">
                                41

                                <Box>
                                    <img src={incisal41} id={"41"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth41} id={"41"} height="80" width="30"></img>
                                </Box>

                            </Stack>

                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={0.1}>
                            <Stack direction="column">
                                38

                                <Box>
                                    <img src={incisal38} id={"48"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth38} id={"48"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                37

                                <Box>
                                    <img src={incisal37} id={"47"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth37} id={"47"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                36

                                <Box>
                                    <img src={incisal36} id={"46"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth36} id={"46"} height="80" width="30"></img>
                                </Box>



                            </Stack>
                            <Stack direction="column">
                                35

                                <Box>
                                    <img src={incisal35} id={"45"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth35} id={"45"} height="80" width="30"></img>
                                </Box>



                            </Stack>

                            <Stack direction="column">
                                34


                                <Box>
                                    <img src={incisal34} id={"44"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth34} id={"44"} height="80" width="30"></img>
                                </Box>


                            </Stack>

                            <Stack direction="column">
                                33

                                <Box>
                                    <img src={incisal33} id={"43"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth33} id={"43"} height="80" width="30"></img>
                                </Box>


                            </Stack>

                            <Stack direction="column">
                                32

                                <Box>
                                    <img src={incisal32} id={"42"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth32} id={"42"} height="80" width="30"></img>
                                </Box>



                            </Stack>

                            <Stack direction="column">
                                31

                                <Box>
                                    <img src={incisal31} id={"31"} height="40" width="30"></img>
                                </Box>

                                <Box>
                                    <img src={teeth31} id={"31"} height="80" width="30"></img>
                                </Box>

                            </Stack>

                        </Stack>
                    </Grid>


                    <Stack direction="row">
                    </Stack>
                </Grid>
            </Box>



        </>
    );

};

export default DentalChart;