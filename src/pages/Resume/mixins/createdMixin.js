export default {
    created () {
        if (this.setSectionConfProvide instanceof Function && this.conf) {
            this.setSectionConfProvide(this.conf)
        }
    }
}
