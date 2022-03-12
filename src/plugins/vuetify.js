import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify,{
    options: {
        customProperties: true
    }
})

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1565C0',
                onPrimary: '#FFFFFF',
                secondary: '#9C27B0',
                onSecondary: '#000000',
                warning: '#ED6C02',
                error: '#D32F2F',
                info: '#0288D1',
                success: '#4CAF50',
                background: "#FFFFFF"
            },
            dark: {
                primary: '#90CAF9',
                onPrimary: '#000000',
                secondary: '#CE93D8',
                onSecondary: '#000000',
                warning: '#FFA726',
                error: '#F44336',
                info: '#29B6F6',
                success: '#81C784',
                background: "#121212"
            }
        }
    }
})