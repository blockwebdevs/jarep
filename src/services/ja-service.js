
import products from './products'
import user from './user'


export default class JaService {
    _db = "japroject-28dec";
    _url = `https://${this._db}.firebaseio.com/`

    async getResource(url)  {
        const res = await fetch(url)
        if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    async getNavItems (langue) {
        const res = await this.getResource(`${this._url}nav-items/${langue}.json`)
        return res;
    }

    
    async getProductsSlideHome() {
        const res = await this.getResource(`${this._url}home-page/productsSlideHome.json`)

        return res
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
    login(login, password){
        let body = null
        user.login.find(item => {
            if(item.login === login && item.password === password) {
                body = item.id
            }
        })
        return body
    }
    getUser(id){
        let body = user.logged[id]
        return body
    }
}