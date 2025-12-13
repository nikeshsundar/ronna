import React, { useEffect, useState, useRef } from 'react';

const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            const currentCount = Math.floor(start + (end - start) * ease);
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration, start]);

    return [count, elementRef];
};

export default function Impact() {
    // Parsing numbers for animation (50, 70, 98, 10000)
    // We will render symbols manually
    const [savings, savingsRef] = useCounter(70);
    const [quality, qualityRef] = useCounter(98);
    const [agents, agentsRef] = useCounter(10000, 2500); // Slower for big number

    return (
        <section id="impact" style={{ padding: '100px 20px', background: 'black', color: 'white', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ textAlign: 'left', marginBottom: '5rem' }}>
                    <h2 className="uppercase" style={{ fontSize: '4rem', lineHeight: '1', marginBottom: '2rem' }}>
                        A New Labor Model.<br />
                        Massive Efficiency.<br />
                        <span style={{ color: 'var(--text-muted)' }}>Zero Repetitive Work.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                    {/* Cost Reduction */}
                    <div ref={savingsRef}>
                        <div style={{ fontSize: '5rem', fontWeight: '700', lineHeight: 1, marginBottom: '20px', color: '#fff' }}>
                            50–{savings}%
                        </div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderTop: '2px solid white', paddingTop: '20px', display: 'inline-block' }}>Savings</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Companies replace large support teams with AI agents that never need training, breaks, or supervision.
                        </p>
                    </div>

                    {/* Speed */}
                    <div>
                        <div style={{ fontSize: '5rem', fontWeight: '700', lineHeight: 1, marginBottom: '20px' }}>⚡</div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderTop: '2px solid white', paddingTop: '20px', display: 'inline-block' }}>Speed</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Tasks that took minutes or hours now take seconds. AI agents operate 24/7 at perfect consistency.
                        </p>
                    </div>

                    {/* Quality */}
                    <div ref={qualityRef}>
                        <div style={{ fontSize: '5rem', fontWeight: '700', lineHeight: 1, marginBottom: '20px' }}>{quality}%</div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderTop: '2px solid white', paddingTop: '20px', display: 'inline-block' }}>Quality</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Accuracy with full compliance monitoring. 100 percent of interactions audited. Zero blind spots.
                        </p>
                    </div>

                    {/* Scalability */}
                    <div ref={agentsRef}>
                        <div style={{ fontSize: '5rem', fontWeight: '700', lineHeight: 1, marginBottom: '20px' }}>
                            {agents >= 10000 ? '10k+' : agents}
                        </div>
                        <h3 className="uppercase" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderTop: '2px solid white', paddingTop: '20px', display: 'inline-block' }}>Agents</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            No hiring. No onboarding. Deploy 10,000 AI agents instantly to handle surge scale.
                        </p>
                    </div>

                </div>

                <div style={{ marginTop: '5rem', padding: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <h3 className="uppercase" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Human Impact</h3>
                    <p style={{ fontSize: '1.5rem', maxWidth: '800px' }}>
                        Humans focus on <span style={{ color: 'white', fontWeight: 'bold' }}>strategic, creative, meaningful work</span>.<br />
                        AI handles the repetitive grind.
                    </p>
                </div>
            </div>
        </section>
    );
}
