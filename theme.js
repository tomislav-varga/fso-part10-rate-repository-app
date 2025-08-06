import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#ffffff',
        textSecondary: '#e1e4e8',
        primary: '#0366d6',
    },
    appBar: {
        background: '#24292e',

    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;