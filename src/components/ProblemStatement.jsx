export default function ProblemStatement() {
    const challenges = [
        {
            id: 1,
            title: "Inefficiency",
            desc: "Millions of hours wasted annually on low-skill repetitive tasks."
        },
        {
            id: 2,
            title: "Human Error",
            desc: "Inconsistent results and costly mistakes in manual data handling."
        },
        {
            id: 3,
            title: "High Turnover",
            desc: "Employee burnout from mundane work leads to constant retraining costs."
        }
    ];

    return (
        <section style={{ padding: 'var(--section-padding)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Manual Work Bottleneck</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Traditional workflows are slowing you down.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {challenges.map((item) => (
                        <div key={item.id} className="glass-card">
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
