import React from 'react';

import './ShopListItem.scss';

interface ShopListItemProps {
    name: string;
    description: string;
    price: number;
    id: string;
    imgSrc: string;
}

export function ShopListItem(props: ShopListItemProps) {
    return (
        <div className="shop-item" key={props.id}>
            <div className="image-container">
                <img src={props.imgSrc} alt="Hiking gear"/>
            </div>
            <div className="shop-item-details-container">
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="shop-item-actions">
                    <p>{props.price} PLN</p>
                    <div className="shop-item-button">KUP W SKLEPIE</div>
                </div>
            </div>
        </div>
    )
}
