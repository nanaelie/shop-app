import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function Categories() {
	const navigation = useNavigation();
	const router = useRouter();
	
	return (
		<ScrollView
			contentContainerStyle={styles.content}
			style={styles.categories}
		>
		<View>
			<Text style={styles.text}>Catégories</Text>
		</View>
		
		<View>
			<TouchableOpacity
				onPress={() => {router.push('/telephones')}}
			><Text>Téléphones</Text></TouchableOpacity>
			<TouchableOpacity
				onPress={() => {navigation.navigate('accessoires')}}
			><Text>Accessoires</Text></TouchableOpacity>
		</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
	},
	categories: {
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
