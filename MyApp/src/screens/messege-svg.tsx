import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const MessegeIcon = () => (
    <Svg
        width={57}
        height={57}
        fill="none"
    >
        <G filter="url(#a)">
            <Path
                d="M8.519 28.793c0-10.953 8.88-19.833 19.833-19.833 10.954 0 19.833 8.88 19.833 19.833 0 10.954-8.88 19.834-19.833 19.834-10.954 0-19.833-8.88-19.833-19.834Z"
                fill="#fff"
            />
        </G>
        <Path
            d="M8.76 28.793c0-10.3 8.35-18.65 18.65-18.65h1.884c10.3 0 18.649 8.35 18.649 18.65 0 10.3-8.35 18.65-18.65 18.65H27.41c-10.3 0-18.65-8.35-18.65-18.65Z"
            fill="#F5F7FB"
        />
        <Path
            d="M32.882 22.182a1.592 1.592 0 0 1 1.591 1.592v10.18a.397.397 0 0 1-.68.281l-2.27-2.27a.796.796 0 0 0-.563-.233h-7.628a1.592 1.592 0 0 1-1.591-1.592v-6.366a1.592 1.592 0 0 1 1.591-1.592h9.55Z"
            fill="#1EA6D6"
        />
        <Defs></Defs>
    </Svg>
)

export default MessegeIcon
