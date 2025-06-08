import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function Parametres() {
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			style={styles.parametres}
		>
		<Text style={styles.text}>Paramètres</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
	},
	parametres: {
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
