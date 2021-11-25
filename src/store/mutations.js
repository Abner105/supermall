const mutations = {
  // 加数量
  addQty(state,oldgoods){
    oldgoods.qty+=1
  },
  // 加商品到购物车
  addToCart(state,goods){
    goods.qty = 1
    state.cartlist.push(goods)
  }
}
export default mutations