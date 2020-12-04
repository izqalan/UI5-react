import React from 'react';
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

const ReactCard = () => {
	const handleHeaderClick = () => {
		alert("header clicked");
	}
	return (
		<div>
			<Card heading="card"
				style={{ width: "300px" }}
				headerInteractive
				onHeaderClick={handleHeaderClick}
			>
				<Text style={spacing.sapUiContentPadding} >We are on React.js baby!</Text>
			</Card>
		</div>
	)
}

export default ReactCard;
