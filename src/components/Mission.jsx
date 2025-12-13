import React, { useEffect, useRef } from 'react';

export default function Mission() {
    return (
        <section id="mission" style={{
            minHeight: '100vh',
            background: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Star Background Effect */}
            <div className="stars"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center' }}>

                <h2 className="uppercase animate-fade-in" style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    letterSpacing: '4px',
                    opacity: 0,
                    animationDelay: '0.2s'
                }}>
                    Our Mission
                </h2>

                <div className="mission-content">
                    <p className="animate-fade-in" style={{ fontSize: '1.5rem', marginBottom: '3rem', lineHeight: '1.6', animationDelay: '0.5s', opacity: 0 }}>
                        We’re building the world’s first <span style={{ color: 'white', textShadow: '0 0 10px white' }}>autonomous AI workforce</span>.
                    </p>

                    <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', animationDelay: '1s', opacity: 0 }}>
                        A future where businesses don’t scale by hiring more people, but by deploying intelligent agents that learn, adapt, and work like top performers.
                    </p>

                    <p className="animate-fade-in" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '4rem', animationDelay: '2s', opacity: 0 }}>
                        Today, millions of hours are wasted on repetitive support tasks — customer queries, ticket routing, data entry, QA checks, form processing.
                        Work that drains teams, slows companies, and limits innovation.
                    </p>

                    <div className="animate-fade-in" style={{
                        borderLeft: '2px solid white',
                        paddingLeft: '30px',
                        textAlign: 'left',
                        margin: '0 auto 4rem',
                        animationDelay: '3s',
                        opacity: 0
                    }}>
                        <h3 className="uppercase" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Goal</h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                            Our mission is simple: Replace these repetitive workflows with AI agents that perform them faster, cheaper, and more accurately than human teams.
                        </p>
                    </div>

                    <p className="animate-fade-in uppercase" style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        animationDelay: '4s',
                        opacity: 0
                    }}>
                        This isn’t outsourcing.<br />
                        This is the end of repetitive work.
                    </p>
                </div>
            </div>

            <style>{`
                .stars {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000 url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/ajax-loader.gif') repeat; /* Placeholder for noise/stars */
                    background-blend-mode: overlay;
                    opacity: 0.1;
                    pointer-events: none;
                }
                /* Simple CSS stars alternative if image fails or for better custom look */
                .stars::after {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background-image: 
                        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
                        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
                        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px);
                    background-size: 550px 550px, 350px 350px, 250px 250px;
                    background-position: 0 0, 40px 60px, 130px 270px;
                    transform: rotate(20deg);
                }
            `}</style>
        </section>
    );
}
