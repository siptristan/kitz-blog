export default {
    async pagingData({ commit }, items) {
        let data = []
        let val = []
        for (let i = 0; i < items.response.lstEntity.length; i++) {
            val.push(items.response.lstEntity[i])
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
            if (i == items.response.lstEntity.length - 1 && i != 0 && val.length > 0) {
                data.push({ page: index + 1, value: val })
            val = []
            }
        }
        commit(items.mutate, data)
    },
    async getPhysician({commit}, i) {
        await this.$axios.$get(`https://kitzdev.ottimo.one/api/blog/getallphysician/page=${i}`, { progress: true }).then(res => {
            commit("setItems", res.lstEntity)
        })
    },
    async getDetailPhysician({commit}, data) {
        await this.$axios.$get(`https://kitzdev.ottimo.one/api/blog/getblogphysician/${data.PhysicianID}`).then(res => {
            this.$router.replace({ path: "/physician/detail" })
            commit("setDetail", data)
            commit("setBlogs", res.Retval)
        })
    }
}