import React from 'react';
import {Link} from 'react-router-dom'


import SliderHome from './slide-home';

import './home.scss'
import breaking from './breaking.png'

const HomePage = () => {
    return (
        <div className="homeContent">
            <div className="homeLeft">
                <div className="imgBloc">
                    <img src={breaking} alt="" />
                    <div className="butts">
                        <Link to="/" className="butt">mergi in outlet</Link>
                        <Link to="/" className="butt">vezi colectiile</Link>
                    </div>
                    <div className="deliveryBloc">
                    <div className="item">
                        <p>Livrare Rapida</p>
                        <p>Primiesti produsul a 2 zi daca comanzi pina la ora 17:00</p>
                    </div>
                    <div className="item">
                        <p>Livrare Gratuita</p>
                        <p>Livrare gratuita in R. Moldova pentru comenzi de la 1000 lei</p>
                    </div>
                    </div>
                    <div className="deliveryBloc">
                    <div className="item">
                        <p>Livram in Moldova</p>
                        <p>Livram in toate localitatile din Republica Moldova</p>
                    </div>
                    <div className="item">
                        <p>Retur Gratuit</p>
                        <p>28 de zile pentru retur si rambursarea banilor</p>
                    </div>
                    </div>
                </div>
            </div>
            <SliderHome />
        </div>
    )
}

export default HomePage