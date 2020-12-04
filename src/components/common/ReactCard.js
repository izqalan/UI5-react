import React from 'react';
import { Card, Text } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

const ReactCard = () => {
	return (
		<div>
			<Card heading="card">
				<Text style={spacing.sapUiContentPadding} >Welcome to React.js baby!</Text>
			</Card>
		</div>
	)
}

export default ReactCard;
