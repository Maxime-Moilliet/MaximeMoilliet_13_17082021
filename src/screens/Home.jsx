import React from 'react'
import { HomeCard } from '../components/HomeCard';
import { homeCards } from '../data/homeCards';

export class Home extends React.Component {
    render() {
        return (
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {homeCards.map(card =>
                        <HomeCard 
                            key={card.id}
                            name={card.name} 
                            img={card.img}
                            alt={card.alt}
                            desc={card.desc}
                        />    
                    )}
                </section>
            </main>
        );
    }
}