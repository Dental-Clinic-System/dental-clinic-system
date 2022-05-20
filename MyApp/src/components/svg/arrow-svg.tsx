import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowSvg = () => {
  return (
    <Svg
      width={14}
      height={19}
      viewBox="0 0 14 19"
      fill="none"
    >
      <Path
        d="M1.002 8.496H12.55c.862 0 1.32-1.02.747-1.665L7.523.336a.998.998 0 00-1.494 0L.254 6.831c-.573.645-.115 1.665.748 1.665zm5.026 10.16a.999.999 0 001.494 0l5.773-6.496c.574-.644.116-1.664-.747-1.664H1.002c-.862 0-1.32 1.02-.747 1.665l5.773 6.494z"
        fill="#1EA6D6"
      />
    </Svg>
  )
}
