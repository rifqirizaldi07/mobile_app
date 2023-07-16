import { View, Text, StyleSheet } from "react-native";
import React from "react";

function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>React Native</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center"
	},
	text: {
		fontSize: 20,
		alignSelf: "center",
		fontWeight: "500"
	}
});

export default App;
