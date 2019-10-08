// getters.js 相当于state的computed 是各个组件中共有的对state的操作的提取
// 第一个参数表示store实例的state属性
// 第二个参数表示当前getters的上下文
export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds(state) {
        const { activeType, itemsPerPage, lists } = state

        if (!activeType) {
            return []
        }

        const page = Number(state.route.params.page) || 1
        const start = (page - 1) * itemsPerPage
        const end = page * itemsPerPage

        return lists[activeType].slice(start, end)
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems(state, getters) {
        return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
}
