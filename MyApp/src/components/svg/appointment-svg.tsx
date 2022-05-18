import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const AppointmentSvg: React.FC<any> = ({ color = '#181725' }) => {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.864 3.09a2.318 2.318 0 00-2.319 2.32v7.726a2.318 2.318 0 002.319 2.319h9.272a2.318 2.318 0 002.319-2.319V5.41a2.318 2.318 0 00-2.319-2.318H3.864zM0 5.41a3.864 3.864 0 013.864-3.865h9.272A3.864 3.864 0 0117 5.41v7.727A3.864 3.864 0 0113.136 17H3.864A3.864 3.864 0 010 13.136V5.41z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.41 0c.426 0 .772.346.772.773v3.09a.773.773 0 01-1.546 0V.774c0-.427.346-.773.773-.773zM11.59 0c.428 0 .774.346.774.773v3.09a.773.773 0 11-1.546 0V.774c0-.427.346-.773.773-.773zM0 6.955c0-.427.346-.773.773-.773h15.454a.773.773 0 010 1.545H.773A.773.773 0 010 6.955z"
        fill={color}
      />
    </Svg>
  )
}