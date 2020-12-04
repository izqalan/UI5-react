import React from 'react';
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

const ReactCard = (props) => {
	const {
		avatar,
		children,
		handleClick,
		header,
	} = props;
	return (
		<div>
			<Card 
				avatar={avatar}
				heading={header}
				style={{ width: "500px", padding: "10px" }}
				headerInteractive
				onHeaderClick={handleClick}
			>
				<Text style={spacing.sapUiContentPadding} >We are on React.js baby!</Text>
				{children}
			</Card>
		</div>
	)
}

export default ReactCard;
