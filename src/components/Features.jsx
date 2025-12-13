export default function Features() {
    const features = [
        "Learns company processes instantly",
        "Executes tasks end-to-end",
        "Audits work for compliance",
        "Summarizes conversations",
        "Extracts information from documents",
        "Routes tickets automatically",
        "Generates accurate responses",
        "Works 24/7 with zero training cost"
    ];

    return (
        <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: "1rem" }}>Intelligent Automation</h2>
                    <p style={{ color: 'var(--text-muted)' }}>More than just a chatbot. A full digital workforce.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            border: '1px solid rgba(0, 242, 234, 0.1)'
                        }}>
                            <div style={{
                                minWidth: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(0, 242, 234, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)'
                            }}>
                                ✓
                            </div>
                            <span style={{ fontSize: '1.1rem' }}>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
