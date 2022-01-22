import { NextPage } from "next"
import { memo } from "react"

type Props = {
  children: string;
  onClick: () => void;
}

const Button: NextPage<Props> = memo((props) => {
  const { children, onClick } = props;

  console.log("カウントあっぷ")

  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
});

export default Button
