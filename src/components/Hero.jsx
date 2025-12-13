export default function Hero() {
    return (
        <section className="hero-section" style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end', /* Bottom aligned often used by SpaceX */
            justifyContent: 'flex-start',
            textAlign: 'left',
            backgroundImage: 'url(/assets/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            padding: '0'
        }}>
            {/* Dark Overlay for text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.3)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '120px' }}>
                <div className="animate-fade-in">
                    <span className="uppercase" style={{
                        color: 'white',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        display: 'block',
                        fontSize: '1.2rem'
                    }}>
                        Note: This is an MVP Preview
                    </span>

                    <h1 className="uppercase" style={{
                        fontSize: 'clamp(3rem, 6vw, 6rem)',
                        marginBottom: '1.5rem',
                        color: 'white',
                        maxWidth: '900px',
                        lineHeight: '1'
                    }}>
                        The Future of Work <br /> Is Autonomous
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-main)',
                        maxWidth: '500px',
                        margin: '0 0 3rem',
                        opacity: 0.9
                    }}>
                        INTELLIGENT WORKFORCE AUTOMATION
                    </p>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'white',
                        maxWidth: '600px',
                        margin: '0 0 3rem',
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                        AI agents take over repetitive support and operations work, letting companies cut 50–70 percent of their costs compared to traditional human teams.
                    </p>

                    <div>
                        <a href="#contact" className="btn">Join the Revolution</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
