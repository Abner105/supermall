const actions = {

  // 点击添加到购物车操作
  addGoods(content, goods) {
    return new Promise((resolve,reject)=>{
      // 判断购物车中是否存在该商品
      const oldgoods = content.state.cartlist.find(item => item.iid == goods.iid)
      if (oldgoods) {
        resolve('商品数量+1')
        content.commit('addQty',oldgoods)
      } else {
        resolve('添加商品到购物车')
        content.commit('addToCart',goods)
      }
    })
  }
}
export default actions