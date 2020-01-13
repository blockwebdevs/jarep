import menu from './menu'
import products from './products'
export default class JaService {
    getMenuList(lang) {
        let body = menu[lang]
        return body
    }
    getProductsSlideHome(lang) {
        let body = products.productsSlideHome[lang]
        return body
    }
    getProductsCategory(lang, category) {
        let body = products.product[lang][category].slice(0, 3)
        return body
    }
    getOneProduct(lang, id) {
        let array = products.oneProduct[lang];
        let body = null
        array.map(item => {
            if(item.id === id) {
                body = item
            }  
        })
        return body
    }
}