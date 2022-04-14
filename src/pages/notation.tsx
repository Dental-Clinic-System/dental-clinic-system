import React from "react";
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

type dentalClasses = {
    section: number;
    permanent: boolean;
};
export const DentalNotation = () => {

    return (
        <>
            <Box sx={{ width: '50%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <Box>18</Box>
                            <Box>17</Box>
                            <Box>16</Box>
                            <Box>15</Box>
                            <Box>14</Box>
                            <Box>13</Box>
                            <Box>12</Box>
                            <Box>11</Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={2}>
                            <Box>28</Box>
                            <Box>27</Box>
                            <Box>26</Box>
                            <Box>25</Box>
                            <Box>24</Box>
                            <Box>23</Box>
                            <Box>22</Box>
                            <Box>21</Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <Box>38</Box>
                            <Box>37</Box>
                            <Box>36</Box>
                            <Box>35</Box>
                            <Box>34</Box>
                            <Box>33</Box>
                            <Box>32</Box>
                            <Box>31</Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={2}>
                            <Box>48</Box>
                            <Box>47</Box>
                            <Box>46</Box>
                            <Box>45</Box>
                            <Box>44</Box>
                            <Box>43</Box>
                            <Box>42</Box>
                            <Box>41</Box>
                        </Stack>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ width: '50%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <Box>15</Box>
                            <Box>14</Box>
                            <Box>13</Box>
                            <Box>12</Box>
                            <Box>11</Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={2}>
                            <Box>25</Box>
                            <Box>24</Box>
                            <Box>23</Box>
                            <Box>22</Box>
                            <Box>21</Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2}>
                            <Box>35</Box>
                            <Box>34</Box>
                            <Box>33</Box>
                            <Box>32</Box>
                            <Box>31</Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack direction="row-reverse" spacing={2}>
                            <Box>45</Box>
                            <Box>44</Box>
                            <Box>43</Box>
                            <Box>42</Box>
                            <Box>41</Box>
                        </Stack>
                    </Grid>

                </Grid>
            </Box>
        </>
    );

};
