import { View, Text, StyleSheet, Button } from 'react-native'

export const Contacts = ({ navigation }) => {
    return <View style={styles.container}>
        <Text> Soy los cambios del Estudiante 2, creditos a su autor original!: E2</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('HomeNav');
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
