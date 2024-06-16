import { RotatingLines } from "react-loader-spinner";

export function Loader() {
  return (
    <RotatingLines
      strokeColor="orange"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  )
}
