import React from "react";

export const AnimatedMenu = (props) => {
	const [Rotate, setRotate] = React.useState(true);
	const handleClick = (e) => {
		setRotate((prevState) => !prevState);
	};

	return (
		<div style={{marginRight: '5%'}} className='animated-dots'> 
			<div
				onClick={handleClick}
				style={{
					borderRadius: 10,
					marginTop: props.margin,
					marginBottom: props.margin,
					width: props.width,
					height: props.height,
					backgroundColor: "white",
					transition: `all 0.2s cubic-bezier(.12,.96,.23,.97)`,
					transform: Rotate ? "" : `translate(0,${props.margin+props.height}px) rotate(45deg)`,

				}}
			/>
			<div
				onClick={handleClick}
				style={{
					borderRadius: 10,
					marginTop: props.margin,
					marginBottom: props.margin,
					width: props.width,
					height: props.height,
					backgroundColor: "white",
					transition: `all 0.2s cubic-bezier(.12,.96,.23,.97)`,
					opacity: Rotate ? 1 : 0,
				}}
			/>
			<div
				onClick={handleClick}
				style={{
					borderRadius: 10,
					marginTop: props.margin,
					marginBottom: props.margin,
					width: props.width,
					height: props.height,
					backgroundColor: "white",
					transition: `all 0.2s cubic-bezier(.12,.96,.23,.97)`,
					transform: Rotate ? "" : `translate(0,-${props.margin+props.height}px) rotate(-45deg)` ,
				}}
			/>
		</div>
	);
};
