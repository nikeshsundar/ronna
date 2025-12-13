import React from 'react';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: '100px 20px', background: 'white', color: 'black' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

                    {/* Info Side */}
                    <div>
                        <h2 className="uppercase" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Partner With Us</h2>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3 className="uppercase" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Investors</h3>
                            <p style={{ color: '#555' }}>
                                We are building the infrastructure for the autonomous workforce.
                                Back the future of labor at the infrastructure layer.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3 className="uppercase" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Customers & Pilots</h3>
                            <p style={{ color: '#555' }}>
                                Deploy AI agents to automate your support and operations.
                                Join our early access pilot program.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ marginBottom: '10px' }}>
                                <select style={{
                                    ...inputStyle,
                                    background: 'transparent',
                                    color: '#333',
                                    cursor: 'pointer'
                                }}>
                                    <option value="" disabled selected>I am a...</option>
                                    <option value="customer">Potential Customer</option>
                                    <option value="investor">Investor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <input type="text" placeholder="Your Name" style={inputStyle} />
                            <input type="text" placeholder="Company / Fund" style={inputStyle} />
                            <input type="email" placeholder="Email" style={inputStyle} />
                            <textarea placeholder="How can we build together?" rows="4" style={inputStyle}></textarea>

                            <button className="btn" style={{
                                background: 'black',
                                color: 'white',
                                border: 'none',
                                marginTop: '10px',
                                width: 'fit-content'
                            }}>
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>

                <div style={{
                    marginTop: '100px',
                    paddingTop: '20px',
                    borderTop: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#888',
                    fontSize: '0.9rem'
                }}>
                    <div>© 2024 Ronna AI</div>
                    <div style={{ fontStyle: 'italic' }}>
                        We don’t replace jobs. We replace repetitive work.
                    </div>
                </div>

            </div>
        </section>
    );
}

const inputStyle = {
    padding: '15px 0',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s'
}
