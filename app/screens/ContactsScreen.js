import { View, Text, StyleSheet, Button } from 'react-native'

export const Contacts = ({ navigation }) => {
    return <View style={styles.container}>
        <Text> Soy los cambios del Estudiante DOS 2. Hola ya me infiltré soy el desarrollador UNO</Text>
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
