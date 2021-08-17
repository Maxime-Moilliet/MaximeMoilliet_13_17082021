import React from 'react'
import { HomeCard } from '../components/HomeCard';

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
                    <HomeCard 
                        name="You are our #1 priority" 
                        img="./images/icon-chat.png"
                        alt="chat icon"
                        desc="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <HomeCard 
                        name="More savings means higher rates" 
                        img="./images/icon-money.png"
                        alt="money icon"
                        desc="The more you save with us, the higher your interest rate will be!"
                    />
                    <HomeCard 
                        name="Security you can trust" 
                        img="./images/icon-security.png"
                        alt="security icon"
                        desc="We use top of the line encryption to make sure your data and money is always safe."
                    />
                </section>
            </main>
        );
    }
}