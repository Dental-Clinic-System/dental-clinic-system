import React, { useEffect, useState } from "react";
import { ChartTable } from "./chart";
import './chart.css';

export const Chart = () => {
    const [tooths, setTooths] = useState([])

    console.log(tooths)
    const addTooth = (params) => {

    }
    const removeTooth = (id) => {
        
    }
    useEffect(() => {
        const polygonsArray = document.querySelectorAll('polygon');
        for (const polygon of polygonsArray) {
            polygon.onclick = event => onToothClickHandler(event)
        }
    }, [])

    const onToothClickHandler = (event) => {
        event.currentTarget.classList.toggle('unmarked');
        event.currentTarget.classList.toggle('marked');
        let element = event.path[0]
        element.classList.forEach(e => {
            console.log(e)
            if (e == 'marked') {
                // setTooths([...tooths,
                // {
                //     toothId: event.path[1].id,
                //     id: event.path[0].id,
                //     note: ''
                // }
                // ])
                setTooths(oldArray => [...oldArray,
                {
                    toothId: event.path[1].id,
                    id: event.path[0].id,
                    note: ''
                }]);
                return true
            } else {
                
                return false
            }
        });
    }

    return (
        <div>
            <ChartTable />
            {
                tooths?.map((e, index) => <div>{e.toothId} {e.id}</div>)
            }
        </div>
    )
}