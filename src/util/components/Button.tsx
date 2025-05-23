import type { IButtonProps } from "../props/Button.props"

function Button(props: IButtonProps) {
  const { children, onClick } = props
  return (
    <button
      className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
