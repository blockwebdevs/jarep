import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ScrollToTop from './components/scroll-to-top'
import JaService from './services';
import  { JaProvider } from './components/ja-service-context';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

import './main.css'

const jaService = new JaService();

ReactDOM.render(
    <Provider store={store} >
        <ErrorBoundry>
            <JaProvider value={jaService}>
                <Router>
                    <ScrollToTop>
                        <App />
                    </ScrollToTop>
                </Router>
            </JaProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('cover')
)