import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { OpaqueColorValue } from 'react-native';

type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
	'accueil': 'home',
	'categorie': 'category',
	'panier': 'shopping-basket',
	'parametres': 'settings',
	'left': 'arrow-back'
} as IconMapping;

export function IconSymbol({
		name,
		color,
	}: {
		name: IconSymbolName;
		color: string | OpaqueColorValue;
	}) {
		return <MaterialIcons color={color} size={24} name={MAPPING[name]} />;
}
