export default function Workflows() {
    const workflows = [
        {
            title: "Voice Support",
            steps: ["Inbound Call", "Speech-to-Text", "Intent Detection", "Compliance Check", "Response Generation", "QA Score"]
        },
        {
            title: "Document Processing",
            steps: ["Upload Document", "OCR Scanning", "Data Extraction", "Verification", "System Entry", "Approval"]
        },
        {
            title: "Ticket Routing",
            steps: ["New Ticket", "Categorization", "Priority Assignment", "Agent Routing", "Notification"]
        }
    ];

    return (
        <section style={{ padding: 'var(--section-padding)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Automated Workflows</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {workflows.map((flow, idx) => (
                        <div key={idx} className="glass-card">
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{flow.title}</h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '15px',
                                alignItems: 'center'
                            }}>
                                {flow.steps.map((step, sIdx) => (
                                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{
                                            padding: '10px 20px',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            fontSize: '0.9rem'
                                        }}>
                                            {step}
                                        </div>
                                        {sIdx < flow.steps.length - 1 && (
                                            <span style={{ margin: '0 10px', color: 'var(--text-muted)' }}>→</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
