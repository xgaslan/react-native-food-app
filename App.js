// React Native
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

// Assets
import Colors from "./assets/colors/Colors";
import Icon from "react-native-vector-icons/Ionicons";

Icon.loadFont();

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Görkem Aslan</Text>
			<Icon name="ios-person" size={30} color="#4F8EF7" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 40,
		color: Colors.secondary,
	},
});
