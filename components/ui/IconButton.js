import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({ name, color, size, onPress }) {
    return (<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.container}>
        <MaterialCommunityIcons style={styles.icon} name={name} color={color} size={size} />
    </Pressable>)
}

export default IconButton

const styles = StyleSheet.create({
    icon: {
        padding: 10
    },
    container: {
        opacity: 0.7
    }
})