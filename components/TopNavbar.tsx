import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface TopNavbarProps {
	navigateTo?: string;
	icon?: string;
	title: string;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ navigateTo, icon, title}) => {
	const navigation = useNavigation();

	return (
		<View style={styles.headerNav}>
			{ icon ? (
				<TouchableOpacity 
					onPress={() => navigation.navigate(`/${navigateTo}`)}
					style={styles.headerNav.icon}>
				<IconSymbol name="left" size={24} color="#5c4430" />
			</TouchableOpacity>) : (<></>) }
			<Text style={styles.headerNav.text}>{title}</Text>
		</View>
	);
}

export default TopNavbar;

const styles = StyleSheet.create({
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
		},
	},
});


