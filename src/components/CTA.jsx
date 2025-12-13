export default function CTA() {
    return (
        <section style={{ padding: '100px 20px', textAlign: 'center' }}>
            <div className="container glass-card" style={{ maxWidth: '800px', padding: '60px 40px', background: 'var(--bg-card-hover)' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Scale?</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Join the AI workforce revolution today.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Get Early Access</button>
                    <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Partner With Us</button>
                </div>
            </div>
        </section>
    )
}
