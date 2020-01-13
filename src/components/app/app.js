import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ClientArea, OneCategoryPage, OneProductPage } from '../pages';
import { Header, Footer } from '../partials';

import './app.sass'
 
const App = () => {
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
                        return <OneCategoryPage id={id} />
                    }}
                    />
                <Route
                    path="/product/:id"
                    render={({ match }) => {
                        const { id } = match.params
                        return <OneProductPage id={id} />
                    }}
                    />
            </Switch>

            <Footer />

        </Fragment>
    )
}

export default App