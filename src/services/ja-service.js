
import products from './products'
import user from './user'


export default class JaService {
    _db = "japroject-28dec";
    _url = `https://${this._db}.firebaseio.com/`;
    _apiKey = 'AIzaSyCXqZjWEtNyhgMUarFrFnU12nxAR1Qx4gY'

    async getResource(url)  {
        const res = await fetch(url)
        if(!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }

    async getNavItems (langue="en") {
        const res = await this.getResource(`${this._url}nav-items/${langue}.json`)
        return res;
    }

    
    async getProductsSlideHome() {
        const res = await this.getResource(`${this._url}home-page/productsSlideHome.json`)

        return res
    }

    async signUp(authData){
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._apiKey}`,
                {   
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(authData)
                }
            )
            const body = await res.json();
        return body;
    }

    async postProducts(products){
        const res = await fetch(`${this._url}/products.json`,
                {   
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(products)
                }
            )
            const body = await res.json();
        return body;
    }
    
    async getCategoryProducts(category, langue="en") {
        const res = await this.getResource(`${this._url}products/${langue}/${category}.json`)
        return res; 
    }

    async getOneProduct(langue = "en", category, id){
        const res = await this.getResource(`${this._url}products/${langue}/${category}/${id}.json`)
        return res;
    }


    getProductsCategory(lang, category) {
        let body = products.product[lang][category].slice(0, 3)
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

const dd = new JaService();
dd.postProducts(products)
