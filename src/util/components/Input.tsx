import type { InputProps } from "../props/Input.props"

function Input(props: InputProps) {
	return (
		<input
			className="border border-slate-300 rounded-md outline-slate-400 px-4 py-2"
			{...props}
		>
		</input>
	)
}

export default Input
