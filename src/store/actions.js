const actions = {
  // 点击添加到购物车操作
  addGoods(content, goods) {
    // 判断购物车中是否存在该商品
    const oldgoods = content.state.cartlist.find(item => item.iid == goods.iid)
    if (oldgoods) {
      content.commit('addQty',oldgoods)
    } else {
      content.commit('addToCart',goods)
    }
  }
}
export default actions