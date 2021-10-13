import React from 'react';

import { LightAccent, MainColor } from '../components/Colors';
import BeginnerCategories from '../components/BeginnerCategory';

/* 
Demonstration purposes only. 
Have to generate title and categories 
according to user learning path
*/
const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '90vh'
            }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 style={{
                    fontFamily: 'Montserrat',
                    fontSize: 48,
                    color: MainColor,
                    marginTop: 50, //remove if necessary
                }}>
                    Beginners
                </h1>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 1000
            }}>
                <h2 style={{
                    fontFamily: 'Montserrat',
                    color: LightAccent
                }}>
                    Categories
                </h2>
                <BeginnerCategories />
            </div>
        </div>
    );
};

export default Home;