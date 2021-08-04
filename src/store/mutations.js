export default {
    THEME_CHANGE (state, theme) {
        state.theme = theme
        localStorage.setItem('theme', theme)
    }
}
