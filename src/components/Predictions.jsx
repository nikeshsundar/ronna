import React, { useEffect, useRef } from 'react';

export default function Predictions() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.animate-on-scroll');
        cards.forEach(card => observerRef.current.observe(card));

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
            paddingBottom: '100px'
        }}>
            <div className="container">
                <style>{`
                    .timeline-item {
                        position: relative;
                        padding-left: 50px;
                        margin-bottom: 80px;
                        border-left: 2px solid rgba(255,255,255,0.1);
                        opacity: 0;
                        transform: translateY(30px);
                        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    .timeline-item.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .timeline-item::before {
                        content: '';
                        position: absolute;
                        left: -6px;
                        top: 0;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background: white;
                        transition: background 0.3s ease;
                    }
                    .timeline-item:hover::before {
                        background: #00bcd4; /* Accent color on hover */
                        box-shadow: 0 0 10px #00bcd4;
                    }
                    .timeline-year {
                        font-family: var(--font-heading);
                        font-size: 2.5rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        color: white;
                    }
                    .timeline-title {
                        font-family: var(--font-heading);
                        font-size: 1.5rem;
                        color: var(--text-muted);
                        margin-bottom: 2rem;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    .content-block {
                        font-family: var(--font-body);
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: rgba(255,255,255,0.8);
                        max-width: 800px;
                    }
                    .content-block p {
                        margin-bottom: 1.5rem;
                    }
                    .content-block ul {
                        list-style: none;
                        padding: 0;
                        margin: 2rem 0;
                    }
                    .content-block li {
                        padding: 0.5rem 0;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                    }
                    .highlight {
                        color: white;
                        font-weight: 600;
                    }
                `}</style>

                <h1 className="uppercase animate-on-scroll" style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'all 0.8s ease'
                }}>Our Prediction</h1>

                <div className="timeline">
                    {/* 2025-2027 */}
                    <div className="timeline-item animate-on-scroll">
                        <div className="timeline-year">2025–2027</div>
                        <div className="timeline-title">The Age of Automation</div>
                        <div className="content-block">
                            <p className="highlight">The beginning of the shift from human repetition → AI-driven execution.</p>
                            <p>The world enters a transition phase. Companies begin replacing high-volume, repetitive workflows with AI agents that work faster, cheaper, and more accurately than human teams.</p>
                            <p>During this era, our platform becomes a critical tool for automating:</p>
                            <ul>
                                <li>Customer support</li>
                                <li>Chat and email responses</li>
                                <li>Ticket routing</li>
                                <li>Data entry</li>
                                <li>QA and compliance reviews</li>
                                <li>Claims, forms, and document processing</li>
                            </ul>
                            <p>Businesses discover a new reality: Scaling operations no longer requires hiring more people — it requires deploying more AI workers.</p>
                            <p>Your company becomes one of the earliest pioneers to demonstrate that AI can handle 60–90 percent of repetitive work with near-perfect reliability. The world takes notice.</p>
                        </div>
                    </div>

                    {/* 2028-2032 */}
                    <div className="timeline-item animate-on-scroll">
                        <div className="timeline-year">2028–2032</div>
                        <div className="timeline-title">The Age of AI Workflows</div>
                        <div className="content-block">
                            <p className="highlight">Autonomous agents evolve from single tasks to full multi-step processes. AI agents begin working together like digital departments.</p>
                            <p>A support request is no longer handled by 4–5 human roles. Instead:</p>
                            <ul>
                                <li>One AI agent receives the message</li>
                                <li>Another retrieves customer data</li>
                                <li>Another processes the request</li>
                                <li>Another updates systems and sends confirmation</li>
                            </ul>
                            <p>A chain of agents executes entire workflows end-to-end, without supervision.</p>
                            <p>During this period: <strong>Companies stop hiring “staff” and start hiring “AI teams.”</strong></p>
                            <p>Each AI team is built from specialized agents:</p>
                            <ul>
                                <li>Support agents</li>
                                <li>QA agents</li>
                                <li>Document agents</li>
                                <li>Data agents</li>
                                <li>Compliance agents</li>
                                <li>Workflow agents</li>
                            </ul>
                            <p>Your platform becomes the default place where companies create, deploy, and manage these AI teams. Just like AWS became the standard for cloud computing, your product becomes the standard for AI labor.</p>
                        </div>
                    </div>

                    {/* 2033-2036 */}
                    <div className="timeline-item animate-on-scroll">
                        <div className="timeline-year">2033–2036</div>
                        <div className="timeline-title">AI General Operations</div>
                        <div className="content-block">
                            <p className="highlight">AI takes on operational intelligence, not just operational tasks.</p>
                            <p>By now, companies rely on AI for:</p>
                            <ul>
                                <li>Predicting workload spikes</li>
                                <li>Optimizing workflows</li>
                                <li>Detecting failures before they happen</li>
                                <li>Managing compliance automatically</li>
                                <li>Coordinating teams</li>
                                <li>Mentoring new human hires</li>
                                <li>Analyzing inefficiencies</li>
                                <li>Making procedural decisions</li>
                            </ul>
                            <p>Your AI agents understand company-wide context. They don’t just “do tasks.” They run operations.</p>
                            <p>Humans shift into roles of creativity, innovation, emotional intelligence, and leadership.</p>
                            <p>During this era, your company evolves into: <strong>The Operating System for Enterprise Operations.</strong></p>
                            <p>Just like Windows powered personal computing, and Android powered mobile computing, your platform powers AI-driven company operations. Large enterprises rebuild themselves around your AI workforce. You become a cornerstone of the modern business architecture.</p>
                        </div>
                    </div>

                    {/* 2037-2045 */}
                    <div className="timeline-item animate-on-scroll">
                        <div className="timeline-year">2037–2045</div>
                        <div className="timeline-title">Autonomous Enterprises</div>
                        <div className="content-block">
                            <p className="highlight">The era where companies run themselves.</p>
                            <p>Most companies across the world now operate with:</p>
                            <ul>
                                <li>80% autonomous operations</li>
                                <li>24/7 AI workforce</li>
                                <li>Real-time adaptive decision-making</li>
                                <li>Zero repetitive work done by humans</li>
                                <li>Instant scaling with no hiring bottlenecks</li>
                            </ul>
                            <p>AI now handles: Support, Finance, HR, Documentation, Compliance, Internal operations.</p>
                            <p>Humans supervise, innovate, and build the next generation of products and ideas.</p>
                            <p>Your platform becomes: <strong>A trillion-dollar infrastructure layer of the global economy.</strong></p>
                            <p>Just like electricity powered the industrial age, AI labor powers the autonomous age.</p>
                            <p>Governments use your system. Fortune 500 companies run their operations on it. Startups launch without hiring. Individuals deploy personal AI workforces.</p>
                            <p>You’ve created: <strong>A world where work is no longer a burden — it’s an intelligence layer.</strong></p>
                            <p>And your company becomes the backbone that enabled it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
