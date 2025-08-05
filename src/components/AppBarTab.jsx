import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});

const AppBarTab = ({ children, to }) => {
    return (
        <Link to={to} component={Pressable} style={styles.tab} >
            <Text fontWeight="bold" style={{ color: theme.colors.textPrimary }}>
                {children}
            </Text>
        </Link>
    );
}

export default AppBarTab;