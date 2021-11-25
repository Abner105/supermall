import {request} from './request'
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = [columns[0],columns[1],services[0].name]
    this.services = services.slice(1)
    this.lowPrice = itemInfo.lowPrice
  }
}
export class Shop{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = (shopInfo.cSells/10000).toFixed(1)
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}
export class GoodsParam{
  constructor(info,rule){
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
  }
}