import React, { useEffect, useState } from "react";
import { ChartTable } from "./chart";
import { Teeth } from './teeth'
import './chart.css';
import { FormControl, InputLabel, NativeSelect, Input } from '@mui/material'



export const Chart = () => {
    const [selectedTooth, selectTooth] = useState({})
    const [selectedPiece, SelectPiece] = useState('')
    const [pieces, setPieces] = useState({
        top: {
            fill: '',
            note: ''
        },
        left: {
            fill: '',
            note: ''
        },
        right: {
            fill: '',
            note: ''
        },
        center: {
            fill: '',
            note: ''
        },
        bottom: {
            fill: '',
            note: ''
        },
    })
    console.log(selectedPiece, pieces)
    useEffect(() => {
        const polygonsArray = document.getElementsByClassName('tooth')
        for (const polygon of polygonsArray) {
            polygon.onclick = event => onToothClickHandler(event)
        }
        const ToothPieces = document.getElementsByClassName('piece')
        for (const ToothPiece of ToothPieces) {
            ToothPiece.onclick = event => onPieceClickHandler(event)
        }
    }, [])

    const onToothClickHandler = (tooth) => {
        setSelectedPiece('note', '')
        setPieces({
            top: {
                fill: '',
                note: ''
            },
            left: {
                fill: '',
                note: ''
            },
            right: {
                fill: '',
                note: ''
            },
            center: {
                fill: '',
                note: ''
            },
            bottom: {
                fill: '',
                note: ''
            },
        })
        let element = tooth.path[1]
        selectTooth({ toothId: element.id });
    }

    const onPieceClickHandler = (piece) => {
        piece.currentTarget.classList.toggle('unmarked');
        piece.currentTarget.classList.toggle('marked');
        SelectPiece(piece.path[0].id)
    }

    const setSelectedPiece = (type, params) => {
        setPieces({
            ...pieces,
            [`${selectedPiece}`]: {
                ...pieces?.[`${selectedPiece}`],
                [`${type}`]: params
            }
        })
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '50%' }}>
                <ChartTable />
            </div>
            <div >
                {
                    selectedTooth ?
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {selectedTooth.toothId}
                            <Teeth />
                            <Input disabled={!selectedPiece} placeholder="note" onChange={(e) => setSelectedPiece('note', e.target.value)} value={pieces?.[`${selectedPiece}`]?.note} />
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    fill
                                </InputLabel>
                                <NativeSelect
                                    // defaultValue={}
                                    inputProps={{
                                        name: 'fill',
                                        id: 'uncontrolled-native',
                                    }}
                                    value={pieces?.[`${selectedPiece}`]?.fill}
                                    onChange={(e) => setSelectedPiece('fill', e.target.value)}
                                >
                                    <option value={'ceramic'}>ceramic</option>
                                    <option value={'gold'}>gold</option>
                                    <option value={'glass ionomer'}>glass ionomer</option>
                                    <option value={'composite'}>composite</option>
                                </NativeSelect>
                            </FormControl>
                        </div>
                        :
                        <div> select your tooth </div>
                }
            </div>
        </div>
    )
}


// option #1: selected teeth oorchlogdoh uyd draft hiigdsen note iig save hiij bolno // ingevel olon shudnii note zereg bichij bolno
// array.foreach(mutaion )

// option #2: daraagiin shudee songohod omno n drart hiisnee clear hiih // submit darah uyd neg l shudnii note save hiine
// one mutation

// 