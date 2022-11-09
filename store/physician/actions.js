export default {
    async getPhysician({ commit }) {
        await this.$axios.$get("blog/getallphysician").then(res => {
            commit("setItems", res.Retval)
        })
    }
}