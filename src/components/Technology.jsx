import React, { useEffect, useRef } from 'react';

export default function Technology() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <div style={{
            background: 'var(--bg-dark)',
            color: 'var(--text-main)',
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '100px',
            overflowX: 'hidden'
        }}>
            <div className="container">
                <style>{`
                    /* General Animation Base */
                    .animate-on-scroll {
                        opacity: 0;
                        transition: opacity 0.8s ease;
                    }
                    .animate-on-scroll.visible {
                        opacity: 1;
                    }

                    /* Zoom In Grid Animation */
                    .zoom-in-grid {
                        transform: scale(0.9);
                        transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease;
                    }
                    .zoom-in-grid.visible {
                        transform: scale(1);
                    }

                    /* Glow Text Animation */
                    .glow-text {
                        color: rgba(255,255,255,0.7);
                        transition: color 1.5s ease, text-shadow 1.5s ease, opacity 1s ease;
                    }
                    .glow-text.visible {
                        color: white;
                        text-shadow: 0 0 20px rgba(255,255,255,0.5);
                    }

                    /* Architecture Stages */
                    .arch-stage {
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.5s ease;
                    }
                    .visible .arch-stage {
                        opacity: 1; 
                        transform: translateY(0); 
                    }

                    /* Neon Slide Up */
                    .neon-slide-item {
                        position: relative;
                        opacity: 0;
                        transform: translateY(40px);
                        transition: all 0.6s ease;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding: 1.5rem 0;
                    }
                    .neon-slide-item::after {
                        content: '';
                        position: absolute;
                        bottom: -1px;
                        left: 0;
                        width: 0;
                        height: 1px;
                        background: #00bcd4; /* Neon Blue */
                        box-shadow: 0 0 10px #00bcd4;
                        transition: width 0.8s ease;
                    }
                    .visible .neon-slide-item {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .visible .neon-slide-item::after {
                        width: 100%;
                    }
                    /* Staggered delays for neon items */
                    .visible .neon-slide-item:nth-child(1) { transition-delay: 0.1s; }
                    .visible .neon-slide-item:nth-child(2) { transition-delay: 0.2s; }
                    .visible .neon-slide-item:nth-child(3) { transition-delay: 0.3s; }
                    .visible .neon-slide-item:nth-child(4) { transition-delay: 0.4s; }
                    .visible .neon-slide-item:nth-child(5) { transition-delay: 0.5s; }
                    .visible .neon-slide-item:nth-child(6) { transition-delay: 0.6s; }

                    .feature-title {
                        font-family: var(--font-heading);
                        font-size: 1.5rem;
                        color: white;
                        margin-bottom: 0.5rem;
                    }
                    
                    .arch-arrow {
                        display: block;
                        text-align: center;
                        font-size: 1.5rem;
                        color: var(--text-muted);
                        margin: 10px 0;
                    }
                `}</style>

                {/* PAGE TITLE */}
                <h1 className="uppercase animate-on-scroll" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>Capabilities that Redefine Operational Excellence</h1>
                <p className="animate-on-scroll" style={{
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    marginBottom: '5rem',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>AI workers that handle everything repetitive and process driven.</p>

                {/* Section 1: Feature Grid */}
                <div className="animate-on-scroll zoom-in-grid" style={{ marginBottom: '6rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {[
                            { title: "AI Support", desc: "Real time responses in chat or voice. Understands intent, retrieves knowledge, and resolves cases instantly." },
                            { title: "AI Document Reader", desc: "Extracts structured data from PDFs, images, scans, and handwritten forms with high accuracy." },
                            { title: "AI Ticket Classifier", desc: "Reads support tickets, identifies category and urgency, and assigns them to the correct team." },
                            { title: "AI QA and Compliance", desc: "Reviews calls and messages, checks mandatory steps, generates scorecards, and provides actionable feedback." },
                            { title: "Autonomous Workflows", desc: "Executes multi step procedures using your SOPs. Perfect for approvals, onboarding, and claims." },
                            { title: "Analytics Dashboard", desc: "Real time insights into accuracy, throughput, compliance, exceptions, and agent performance." }
                        ].map((feature, idx) => (
                            <div key={idx} style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '2rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Feature Highlights */}
                <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                    }}>
                        {[
                            { title: "Global Scalability", desc: "Deploy thousands of AI workers instantly without hiring or onboarding." },
                            { title: "Continuous Learning", desc: "Agents adapt to new rules or policy updates immediately." },
                            { title: "Human in the Loop", desc: "Critical or uncertain cases can escalate to human reviewers." },
                            { title: "Multi agent Collaboration", desc: "Specialized agents interact to complete complex workflows end to end." }
                        ].map((item, idx) => (
                            <div key={idx} className="animate-on-scroll glow-text" style={{ padding: '1rem' }}>
                                <h3 className="uppercase" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PAGE 3: TECHNOLOGY */}
                <h1 className="uppercase animate-on-scroll" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    marginTop: '8rem'
                }}>The Platform Powering Autonomous Work</h1>
                <p className="animate-on-scroll" style={{
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    marginBottom: '5rem'
                }}>Built on advanced language models, reasoning engines, and adaptive workflows.</p>

                {/* Section 1: Architecture Diagram */}
                <div className="animate-on-scroll" style={{
                    marginBottom: '6rem',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '3rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        {[
                            { stage: "Stage 1: Ingestion", detail: "Audio, chat, tickets, PDFs, images." },
                            { stage: "Stage 2: Understanding", detail: "Automatic transcription, OCR, classification, entity extraction." },
                            { stage: "Stage 3: Execution", detail: "AI workers perform reasoning, follow rules, and complete tasks." },
                            { stage: "Stage 4: Validation", detail: "Compliance checks, verification, exception routing." },
                            { stage: "Stage 5: Output", detail: "Reports, summaries, updates, structured data, system actions." }
                        ].map((step, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && (
                                    <div className="arch-stage arch-arrow" style={{
                                        transitionDelay: `${(idx * 2 - 1) * 0.2}s`
                                    }}>↓</div>
                                )}
                                <div className="arch-stage" style={{
                                    border: '1px solid white',
                                    padding: '1.5rem',
                                    width: '100%',
                                    textAlign: 'center',
                                    background: 'rgba(255,255,255,0.05)',
                                    transitionDelay: `${(idx * 2) * 0.2}s`
                                }}>
                                    <h3 style={{ marginBottom: '0.5rem', color: '#00bcd4' }}>{step.stage}</h3>
                                    <p style={{ color: 'white' }}>{step.detail}</p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Section 2: Core Technologies */}
                <div className="animate-on-scroll" style={{ marginBottom: '6rem' }}>
                    <h2 className="uppercase section-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>Core Technologies</h2>
                    <div>
                        {[
                            { title: "Language Understanding", desc: "State of the art language models that understand context and follow instructions." },
                            { title: "Voice Systems", desc: "High accuracy speech recognition and natural voice generation." },
                            { title: "Document Intelligence", desc: "OCR pipelines and field extraction with adaptive reasoning." },
                            { title: "Workflow Engine", desc: "A rule guided engine that executes complex multi step operations reliably." },
                            { title: "Data Retrieval", desc: "Custom retrieval system that ensures AI workers always use the latest policies." },
                            { title: "Security", desc: "End to end encryption, access control, audit logs, and compliance ready architecture." }
                        ].map((tech, idx) => (
                            <div key={idx} className="neon-slide-item">
                                <h3 className="feature-title" style={{ fontSize: '1.4rem' }}>{tech.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 3: Enterprise Readiness */}
                <div className="animate-on-scroll" style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.03)' }}>
                    <h3 className="uppercase" style={{ marginBottom: '1rem' }}>Enterprise Readiness</h3>
                    <p style={{ color: 'var(--text-muted)' }}>SOC2 path, ISO roadmap, on premise options, role based access, regional hosting, and data isolation.</p>
                </div>

                {/* Call to Action */}
                <div className="animate-on-scroll" style={{ textAlign: 'center', padding: '6rem 0', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 className="uppercase" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to see how AI workers transform your operations?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Get early access to the autonomous workforce platform and start automating repetitive work instantly.</p>
                    <a href="/#contact" className="btn">Request Access</a>
                </div>

            </div >
        </div >
    );
}
