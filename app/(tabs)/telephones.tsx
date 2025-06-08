import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TopNavbar from '@/components/TopNavbar';

export default function Details() {
	const navigation = useNavigation();
	
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			style={styles.details}>
			<TopNavbar navigateTo="categories" icon="left" title="Téléphones" />
		
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
	},
	headerNav: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
		justifyContent: 'center',
		paddingHorizontal: 20,
		icon: {
			position: 'absolute',
			left: 20,
		},
		text: {
			fontSize: 28,
			fontWeight: 500,
			color: '#5c4430',
			textAlign: 'center',
		}
	}
});


