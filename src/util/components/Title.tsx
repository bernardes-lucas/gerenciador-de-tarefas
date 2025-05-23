import type { ITitleProps } from "../props/Title.props";

function Title(props: ITitleProps) {
	const { children } = props
	return (
		<h1 className="text-3xl text-white font-bold text-center">
			{children}
		</h1>
	)
}

export default Title;
