import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function OurProduct() {
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
            paddingBottom: '100px'
        }}>
            <div className="container">
                <style>{`
                    .animate-on-scroll {
                        opacity: 0;
                        transform: translateY(30px);
                        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    .animate-on-scroll.visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .section-title {
                        font-family: var(--font-heading);
                        font-size: 2rem;
                        color: white;
                        margin-bottom: 2rem;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-bottom: 1rem;
                        display: inline-block;
                    }
                    .text-block {
                        font-family: var(--font-body);
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: rgba(255,255,255,0.8);
                        max-width: 900px;
                        margin-bottom: 4rem;
                    }
                    .feature-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 40px;
                        margin-bottom: 4rem;
                    }
                    .feature-card {
                        background: rgba(255,255,255,0.05);
                        padding: 2rem;
                        border: 1px solid rgba(255,255,255,0.1);
                        transition: transform 0.3s ease, border-color 0.3s ease;
                    }
                    .feature-card:hover {
                        transform: translateY(-5px);
                        border-color: white;
                    }
                    .feature-title {
                        font-family: var(--font-heading);
                        font-size: 1.25rem;
                        color: white;
                        margin-bottom: 1rem;
                        text-transform: uppercase;
                    }
                    .stat-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 30px;
                        margin-bottom: 4rem;
                    }
                    .stat-item {
                        text-align: center;
                        padding: 2rem;
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.1);
                    }
                    .stat-value {
                        font-family: var(--font-heading);
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: white;
                        display: block;
                        margin-bottom: 0.5rem;
                    }
                    .stat-label {
                        font-size: 0.9rem;
                        color: var(--text-muted);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .cta-section {
                        text-align: center;
                        padding: 4rem 0;
                        background: rgba(255,255,255,0.02);
                        border: 1px solid rgba(255,255,255,0.1);
                        margin-top: 4rem;
                    }
                `}</style>

                <h1 className="uppercase animate-on-scroll" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}>What Our Product Can Do</h1>

                {/* 1: Introduction */}
                <div className="text-block animate-on-scroll">
                    <h2 className="section-title">Introduction</h2>
                    <p>Our platform delivers an autonomous AI workforce designed to remove repetitive operational tasks at scale. It learns how your company works, executes processes with high accuracy, and adapts instantly to workflow changes. The result is a faster, more efficient, and highly compliant operation that performs at a level far beyond traditional manual teams.</p>
                </div>

                {/* 2: Why This Matters */}
                <div className="animate-on-scroll">
                    <h2 className="section-title">Why This Matters</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3 className="feature-title">Repetitive work dominates global operations</h3>
                            <p className="text-muted">More than 62 percent of support and operations tasks are rule based and repetitive. These tasks slow down teams, increase costs, and introduce human error.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">The economic impact is massive</h3>
                            <p className="text-muted">Global spending on support and operations exceeds USD 300 to 350 billion annually. A significant portion of this cost is tied to training, turnover, and manual processing.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Error rates remain high</h3>
                            <p className="text-muted">Human driven workflows have an average error rate of 3 to 8 percent. Mistakes in documentation, compliance, and customer interactions create financial and reputational risk.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">AI transforms this landscape</h3>
                            <p className="text-muted">AI agents operate at 92 to 98 percent accuracy, respond in seconds, and maintain full compliance across all interactions. This shifts operations from slow and variable to fast and consistent.</p>
                        </div>
                    </div>
                </div>

                {/* 3: What Our AI Workforce Can Do */}
                <div className="animate-on-scroll">
                    <h2 className="section-title">What Our AI Workforce Can Do</h2>
                    <p className="text-block" style={{ marginBottom: '2rem' }}>Our platform uses specialized AI agents that function like digital employees trained for specific operational roles.</p>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3 className="feature-title">Support Agent</h3>
                            <p className="text-muted">Handles voice and chat interactions, follows guidelines, retrieves information instantly, and provides consistent high quality support.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">QA and Compliance Agent</h3>
                            <p className="text-muted">Listens to calls, analyzes messages, checks for compliance, produces audit reports, and delivers coaching summaries. Performs continuous monitoring that human teams cannot scale.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Data and Document Agent</h3>
                            <p className="text-muted">Reads PDFs, images, forms, and structured documents. Extracts key fields, validates data, and updates systems without manual entry.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Routing Agent</h3>
                            <p className="text-muted">Classifies tickets, identifies intent, detects urgency, and assigns tasks to the correct department automatically. </p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Workflow Agent</h3>
                            <p className="text-muted">Executes multi step processes powered by your SOPs. Performs end to end tasks such as onboarding, claims processing, and internal approvals.</p>
                        </div>
                    </div>
                    <div className="text-block animate-on-scroll">
                        <p>Each agent operates independently or as part of a coordinated AI team that completes full workflows from start to finish.</p>
                    </div>
                </div>

                {/* 4: How It Works */}
                <div className="animate-on-scroll">
                    <h2 className="section-title">How It Works</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3 className="feature-title">Learning your processes</h3>
                            <p className="text-muted">The system ingests SOPs, policies, templates, and historical examples. It converts this information into structured actions and rules.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Executing tasks with accuracy</h3>
                            <p className="text-muted">AI agents perform tasks in seconds using advanced reasoning, retrieval, and decision models.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Continuous verification</h3>
                            <p className="text-muted">All output is checked for compliance, exceptions are flagged, and risky cases can be reviewed by humans.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Instant adaptation</h3>
                            <p className="text-muted">When workflows change, the AI workforce updates automatically without retraining cost or downtime.</p>
                        </div>
                    </div>
                </div>

                {/* 5: Statistical Impact */}
                <div className="animate-on-scroll">
                    <h2 className="section-title">Statistical Impact</h2>
                    <div className="stat-grid">
                        <div className="stat-item">
                            <span className="stat-value">50-70%</span>
                            <span className="stat-label">Cost Reduction</span>
                            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Companies significantly reduce operational expenses by replacing repetitive work with AI labor.</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5-12x</span>
                            <span className="stat-label">Productivity Increase</span>
                            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Tasks that took minutes or hours are now completed in seconds.</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">100%</span>
                            <span className="stat-label">Compliance Coverage</span>
                            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Human teams audit only 3 to 5 percent of interactions. AI audits 100 percent with full detail.</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">92-98%</span>
                            <span className="stat-label">Higher Accuracy</span>
                            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>AI agents maintain 92 to 98 percent accuracy across repetitive workflows.</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">∞</span>
                            <span className="stat-label">Instant Scale</span>
                            <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Deploy one AI worker or ten thousand with the same effort.</p>
                        </div>
                    </div>
                </div>

                {/* 6: Why This Approach Wins Long Term */}
                <div className="animate-on-scroll">
                    <h2 className="section-title">Why This Approach Wins Long Term</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3 className="feature-title">Scalable</h3>
                            <p className="text-muted">AI workers scale without hiring or training cycles.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Consistent</h3>
                            <p className="text-muted">Every workflow is executed with identical precision.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Adaptive</h3>
                            <p className="text-muted">The platform updates to new tasks and rules instantly.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="feature-title">Competitive</h3>
                            <p className="text-muted">Companies using AI labor outperform traditional teams in speed, cost, and reliability.</p>
                        </div>
                    </div>
                    <div className="text-block" style={{ textAlign: 'center', width: '100%', maxWidth: '100%' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>This is the foundation of the autonomous enterprise landscape.</p>
                    </div>
                </div>

                {/* 7: Call to Action */}
                <div className="cta-section animate-on-scroll">
                    <h2 className="uppercase" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to see how AI workers transform your operations?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Get early access to the autonomous workforce platform and start automating repetitive work instantly.</p>
                    <a href="/#contact" className="btn" style={{ padding: '20px 50px', fontSize: '1.1rem' }}>Request Access</a>
                </div>

            </div>
        </div>
    );
}
