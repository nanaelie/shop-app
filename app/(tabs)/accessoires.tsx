import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import TopNavbar from '@/components/TopNavbar';

export default function Accessoires() {
	
	return (
		<ScrollView contentContainerStyle={styles.content} style={styles.details}>
			<TopNavbar navigateTo="categories" icon="left" title="Accessoires" />
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
