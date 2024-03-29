import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const HomeSvg: React.FC<any> = ({ color = '#181725' }) => {
  return (
    <Svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
    >
      <Path
        d="M7.303.428a1.889 1.889 0 012.394 0l6.588 5.37A1.955 1.955 0 0117 7.315v9.743C17 18.13 16.144 19 15.088 19h-2.55c-1.057 0-1.913-.87-1.913-1.943v-4.682a.642.642 0 00-.637-.647H7.013a.643.643 0 00-.638.647v4.682c0 1.074-.856 1.944-1.912 1.944h-2.55C.857 19 0 18.13 0 17.057V7.314A1.955 1.955 0 01.716 5.8L7.303.428zm1.596 1.01a.63.63 0 00-.798 0l-6.588 5.37a.652.652 0 00-.238.506v9.743c0 .358.285.648.638.648h2.55c.351 0 .637-.29.637-.648v-4.682c0-1.073.857-1.943 1.913-1.943h2.975c1.056 0 1.912.87 1.912 1.943v4.682c0 .358.285.648.637.648h2.55c.353 0 .638-.29.638-.648V7.314a.65.65 0 00-.239-.505L8.9 1.438z"
        fill={color}
      />
    </Svg>
  )
}