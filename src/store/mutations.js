export default {
    /**
     * 第一个参数是store实例的state属性
     * 第二个参数是payload数据
     */
    SET_ACTIVE_TYPE: (state, { type }) => {
        console.log(state, type)
    },
}
