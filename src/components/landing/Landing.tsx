import React, { useEffect } from 'react';
import './Landing.scss';
import { useStoreon } from 'storeon/react';

interface LandingProps {
    handleClick: () => void;
}

export function Landing(props: LandingProps) {
    const { dispatch, data, test } = useStoreon('data', 'test');

    useEffect(() => {
        dispatch('test123', {trolo: '123'})
    }, [dispatch])

    return (
        <section className="landing-image">
            <div onClick={props.handleClick} className="hello">
                <h1>
                    Dzień dobry Karkonosze
                </h1>
            </div>
            <div>test ze stora:
                {test}
            </div>
            <div>
                {data?.details}
            </div>
        </section>
    )
}
