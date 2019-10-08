export default function errHandle(code, options) {
    switch(code){
    // 未登录
    case 401:
        this.$message('未登录')
        break
    default: this.$message('操作失败')
    }
}
