// import { createSubstore } from 'storeon-substore';
// import { useStoreon } from 'storeon/react';
import { createStoreon } from 'storeon';
// import { createContext } from 'react';

import axios from 'axios';

export const appStore = (store) => {
    store.on('@init', () => {
        store.dispatch('fetchData');
        // return {
        //     data: null
        // }
    })

    store.on('fetchData', () => {
        axios.get('https://api.spacexdata.com/v4/launches/latest')
            .then(results => {
                store.dispatch('dataLoaded', results.data)
            })
    })

    store.on('dataLoaded', (state, data) => {
        return {
            data,
            test: 'test123'
        }
    })

    store.on('test123', (state, data) => {
        console.log('test event', state, data)
    })
}

export const store = createStoreon([appStore]);
