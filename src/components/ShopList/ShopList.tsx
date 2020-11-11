import React from 'react';

import { ShopListItem } from "./ShopListItem/ShopListItem";
import './ShopList.scss';

import hiking from "../../images/hiking.jpg";
import climbing from "../../images/climbing.jpg";
import zima from "../../images/zima.jpg";

export function ShopList(props) {
    const shopItems = [
        {
            name: "Plecak",
            description: "Super lekki plecak do hikingu w karkach. Wygodny pojemny i w ogóle super",
            price: 10,
            imgSrc: hiking,
            id: "plecak"
        },
        {
            name: "Bajery do wspinaczki",
            description: "Super zestaw poczatkujacego wspinacza. Wszystko czego trzeba żeby sie wspinać i nie umrzeć",
            price: 20,
            imgSrc: climbing,
            id: "climbingkit"
        },
        {
            name: "Narciarz starter pak",
            description: "Niech zima zaskakuje drogowców a nie ciebie! Super zestaw turystyczny na skitury.",
            price: 30,
            imgSrc: zima,
            id: "skistarter"
        }
    ];

    return (
        <section className="shop-highlights" ref={props.ref}>
            <h2>Shop highlights</h2>
            <p>Check what's new in our store</p>
            {shopItems.map(ShopListItem)}
        </section>
    )
}
