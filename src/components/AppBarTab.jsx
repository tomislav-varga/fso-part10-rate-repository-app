import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBar.background,
        padding: 12,
    },
    text: {
        color: theme.appBar.textPrimary,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
    },
});

const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {}}>
                <Text fontWeight="bold">Repositories</Text>
            </Pressable>
        </View>
    );
}

export default AppBarTab;