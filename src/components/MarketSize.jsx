export default function MarketSize() {
    const stats = [
        { label: "Chat/Email Support", percentage: 95 },
        { label: "Data Entry", percentage: 99 },
        { label: "Ticket Routing", percentage: 95 },
        { label: "Document Handling", percentage: 95 },
        { label: "QA Compliance", percentage: 95 },
        { label: "Voice Support", percentage: 90 },
    ];

    return (
        <section style={{ padding: 'var(--section-padding)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>

                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            $350B Untapped Opportunity
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            The global market for low-skill tech and support work is massive.
                            Ronna AI enters this space with the capability to replace up to 99% of repetitive tasks.
                        </p>
                        <div className="glass-card" style={{ display: 'inline-block', padding: '20px 40px' }}>
                            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)', display: 'block' }}>$300-350B</span>
                            <span style={{ color: 'var(--text-muted)' }}>Global Market Size</span>
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '2rem' }}>Automation Potential</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <span style={{ fontSize: '0.9rem' }}>{stat.label}</span>
                                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{stat.percentage}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{
                                            width: `${stat.percentage}%`,
                                            height: '100%',
                                            background: 'var(--gradient-main)',
                                            borderRadius: '4px'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
