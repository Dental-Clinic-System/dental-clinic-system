import { useMutation, useQuery } from "@apollo/client";
import { Button, FormControl, Input, InputLabel, NativeSelect } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ADD_PATIENT_HISTORY } from "../graphql";
import { GET_SERVICES } from '../graphql/queries';
import { ChartTable } from "./chart";
import './chart.css';
import { Teeth } from './tooth';


export const Chart = () => {
    const clinicId = window.sessionStorage.getItem("clinicId");
    const location = useLocation()
    const patientId = location.pathname.slice(7)
    const [toothSides, setToothSides] = useState([])
    const [data, setData] = useState({
        clinicId: "625fca30c1cf951c042bd5ec",
        patientId: patientId,
        appointmentId: null,
        serviceId: "",
        toothId: "",
        note: "",
        toReport: "true"
    })

    const { data: services } = useQuery(GET_SERVICES, {
        variables: { clinicId: clinicId },
    });
    const [AddHistory] = useMutation(ADD_PATIENT_HISTORY)

    const polygonsArray = document.getElementsByClassName('tooth')
    const toothSidesArray = document.getElementsByClassName('piece')

    useEffect(() => {
        for (const polygon of polygonsArray) {
            polygon.onclick = event => setData({ ...data, toothId: event.path[1].id })
        }
        for (const ToothSide of toothSidesArray) {
            ToothSide.onclick = event => onPieceClickHandler(event)
        }
    }, [])


    const onPieceClickHandler = async (tooth) => {
        tooth.currentTarget.classList.toggle('unmarked');
        tooth.currentTarget.classList.toggle('marked');
        await setToothSides([])
        for (const side of toothSidesArray) {
            if (side.classList.contains('marked')) {
                await setToothSides((prev) => [...prev, side.id])
            }
        }
    }

    const SaveHistory = () => {
        console.log('here')
        let result = AddHistory({
            variables: {
                ...data,
                toothSides
            }
        })
        console.log(result)
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '50%' }}>
                <ChartTable />
            </div>
            <div >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Teeth />
                    <Input placeholder="note" onChange={(e) => setData({ ...data, note: e.target.value })} value={data.note} />
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            fill
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'fill',
                                id: 'uncontrolled-native',
                            }}
                            value={data.serviceId}
                            onChange={(e) => setData({ ...data, serviceId: e.target.value })}
                        >
                            {
                                services?.getServices?.map((e) => <option value={e._id}>{e.serviceName}</option>)
                            }
                        </NativeSelect>
                    </FormControl>
                    <Button onClick={SaveHistory}>Save</Button>
                </div>
            </div>
        </div>
    )
}