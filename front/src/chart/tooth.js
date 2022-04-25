import React from "react";


export const Teeth = () => {
    return (
        <svg width="30" height="50" class="molar">
            <polygon id="top" points="0,0 30,0 20,10 10,10" class="piece polygon unmarked" />
            <polygon id="left" points="0,0 10,10 10,20 0,30" class="piece polygon unmarked" />
            <polygon id="bottom" points="0,30 10,20 20,20 30,30" class="piece polygon unmarked" />
            <polygon id="right" points="30,0 20,10 20,20 30,30" class="piece polygon unmarked" />
            <polygon id="center" points="10,10, 20,10 20,20 10,20" class="piece polygon unmarked" />
        </svg>
    )
}