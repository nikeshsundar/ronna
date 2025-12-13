import React, { useEffect, useRef, useState } from 'react';

const RevealCard = ({ children, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="capability-card" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '40px',
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            cursor: 'default',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: `${delay}ms`
        }}>
            {children}
        </div>
    );
};

export default function Capabilities() {
    const capabilities = [
        {
            title: "AI Support Agents",
            features: [
                "Real-time voice or chat response",
                "Handles customer questions and troubleshooting",
                "Speaks naturally, follows scripts, learns tone"
            ]
        },
        {
            title: "AI Ticket Router",
            features: [
                "Reads ticket instantly",
                "Detects category + urgency",
                "Assigns team automatically",
                "Removes human triage"
            ]
        },
        {
            title: "AI QA & Compliance Auditor",
            features: [
                "Listens to calls",
                "Checks mandatory steps",
                "Scores performance",
                "Provides coaching notes",
                "Replaces 70–90 percent of QA teams"
            ]
        },
        {
            title: "AI Data Entry & Documentation",
            features: [
                "Extracts info from PDFs, forms, images",
                "Validates data",
                "Removes manual entry",
                "Perfect for finance, healthcare, insurance"
            ]
        },
        {
            title: "AI Claims & Form Processor",
            features: [
                "Reads claim details",
                "Verifies eligibility",
                "Flags fraud or errors",
                "Approves simple cases instantly"
            ]
        },
        {
            title: "Autonomous Workflow Execution",
            features: [
                "Runs processes end-to-end",
                "Follows SOPs like a trained employee",
                "Learns new rules instantly"
            ]
        }
    ];

    return (
        <section id="capabilities" style={{ padding: 'var(--section-padding)', background: '#050505', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="uppercase" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>Capabilities</h2>
                    <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        AI Agents that can do the work of entire support teams.<br />
                        <span style={{ color: 'white' }}>Faster. Smarter. 24/7.</span>
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {capabilities.map((cap, idx) => (
                        <RevealCard key={idx} delay={idx * 100}>
                            <h3 className="uppercase" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                                {cap.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {cap.features.map((feat, fIdx) => (
                                    <li key={fIdx} style={{
                                        marginBottom: '10px',
                                        color: 'var(--text-muted)',
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'baseline'
                                    }}>
                                        <span style={{ color: 'white', marginRight: '10px', fontSize: '0.8rem' }}>▶</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </RevealCard>
                    ))}
                </div>
            </div>
            <style>{`
                .capability-card:hover {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: rgba(255,255,255,0.3) !important;
                    transform: translateY(-5px) !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
}
