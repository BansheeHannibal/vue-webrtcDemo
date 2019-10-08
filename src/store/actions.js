export default {

    // ensure data for rendering given list type
    /**
     * 第一个参数是一个store实例
     * 第二个参数是payload数据
     */
    FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
        console.log(commit, dispatch, state, type)
    },
}
