export default function Roadmap() {
    const phases = [
        { phase: "Phase 1", title: "Assist", desc: "Automate QA compliance and chat/email support" },
        { phase: "Phase 2", title: "Expand", desc: "Add ticket routing, data entry, document processing" },
        { phase: "Phase 3", title: "Voice", desc: "AI voice agent for real-time support" },
        { phase: "Phase 4", title: "Specialize", desc: "Industry-specific automation modules" },
        { phase: "Phase 5", title: "Autonomy", desc: "Fully autonomous AI workers managing entire workflows" },
    ];

    return (
        <section style={{ padding: 'var(--section-padding)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Roadmap to Autonomy</h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--gradient-main)'
                    }}></div>

                    {phases.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                            marginBottom: '40px',
                            position: 'relative'
                        }}>
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translate(-50%, 0)',
                                width: '16px',
                                height: '16px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px var(--primary-glow)',
                                zIndex: 2
                            }}></div>

                            <div className="glass-card" style={{ width: '45%' }}>
                                <div style={{
                                    color: 'var(--primary)',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem'
                                }}>
                                    {item.phase}
                                </div>
                                <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
