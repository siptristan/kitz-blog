export default {
    async pagingData({ commit }, items) {
        let data = []
        let val = []
        for (let i = 0; i < items.response.Retval.length; i++) {
            val.push(items.response.Retval[i])
            let index = data.length
            if (index == 0) {
            index = 1
            }
            if( val.length == items.range ) {
            if (data.length > 0) {
                data.push({ page: data.length + 1, value: val })
            } else {
                data.push({ page: index, value: val })
            }
            val = []
            }
            if (i == items.response.Retval.length - 1 && i != 0 && val.length > 0) {
                data.push({ page: index + 1, value: val })
            val = []
            }
        }
        commit(items.mutate, data)
    },
    async getPhysician({ dispatch }) {
        await this.$axios.$get("blog/getallphysician").then(res => {
            dispatch("pagingData", { response: res, mutate: "setItems", range: 10 })
            // commit("setItems", res.Retval)
        })
    }
}