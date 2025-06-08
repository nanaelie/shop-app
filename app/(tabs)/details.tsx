import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useEffect } from 'react';

export default function Details() {
	useEffect(() => {
		navigation.setOptions({title: "Tecno Spark 10C"});
	},[]);
	
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			style={styles.details}
		>
		<Text style={styles.text}>Détails</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
	},
	details: {
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
