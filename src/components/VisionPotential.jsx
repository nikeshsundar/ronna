import React from 'react';

export default function VisionPotential() {
    return (
        <section id="vision" style={{
            minHeight: '80vh',
            background: 'linear-gradient(to bottom, #000 0%, #050505 50%, #000 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '100px 20px',
            overflow: 'hidden'
        }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', position: 'relative', zIndex: 1 }}>

                <h2 className="uppercase" style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '3rem',
                    letterSpacing: '5px',
                    lineHeight: '1.1'
                }}>
                    The Potential<br />
                    <span style={{ color: 'var(--text-muted)' }}>of this Vision</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '50px',
                    textAlign: 'left',
                    marginTop: '5rem'
                }}>

                    {/* Item 1 */}
                    <div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '2px solid white', paddingLeft: '20px' }}>
                            Exponential Productivity
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            When intelligence becomes a utility, the cost of solving problems drops to zero. Companies will scale not by headcount, but by compute, unlocking value previously impossible to capture.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '2px solid white', paddingLeft: '20px' }}>
                            Human Elevation
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            By automating the repetitive loop of modern work, we free humanity to focus on what it does best: creation, strategy, and empathy. The future isn't about working less—it's about working better.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '2px solid white', paddingLeft: '20px' }}>
                            Infinite Scale
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            An autonomous workforce never sleeps, never bottlenecks, and adapts instantly. We are building the infrastructure for the next generation of global impact.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
