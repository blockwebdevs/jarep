import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ClientArea, OneCategoryPage, OneProductPage } from '../pages';
import { Header, Footer } from '../partials';

import './app.sass'

const App = () => {
    if(localStorage.getItem("langue") == null){
        localStorage.setItem("langue", "ro")
    }
    // localStorage.removeItem("cartCount")
    console.log(localStorage.getItem("cartCount"))
    return (
        <Fragment>

            <Header />

            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/client-area"
                    component={ClientArea}
                    />
                <Route
                    path="/category/:id"
                    render={({ match }) => {
                        const { id } = match.params
                        return <OneCategoryPage categoryName={id} />
                    }}
                    />
                <Route
                    path="/product/:id"
                    render={({ match, location }) => {
                        const { id } = match.params
                        const { categoryName, index } = location.query

                        return <OneProductPage id={id} index={index} categoryName={categoryName} />
                    }}
                    />
            </Switch>

            <Footer />

        </Fragment>
    )
}

export default App