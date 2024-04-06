import PropTypes from "prop-types";

export function ContainerWrapper(props) {
	return (
		<div className={`max-w-[1216px] m-auto text-white ${props.className}`}>
			{props.children}
		</div>
	);
}

ContainerWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
