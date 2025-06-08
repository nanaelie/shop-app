import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function HomeScreen() {
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			style={styles.homeScreen}
		>
			<Text style={styles.text}>Accueil</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
	},
	homeScreen: {
		width: '100%',
		minHeight: '100vh',
		paddingTop: 70,
		paddingBottom: 15,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	
	text: {
		fontSize: 28,
		fontWeight: 900,
		color: '#5c4430',
	}
});
