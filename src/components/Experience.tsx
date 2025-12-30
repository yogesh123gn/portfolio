
"use client";

import React from 'react';

const Experience = () => {
    return (
        <div className="experience-section" id="experience">
            <h2 style={{ marginBottom: "20px" }}>What I have done so far</h2>
            <h1 className="experience-title" style={{ marginBottom: "80px" }}>Work Experience.</h1>

            <div className="timeline">
                {/* Timeline Item 1 */}
                <div className="timeline-item left">
                    <div className="timeline-dot">
                        <img src="/images/bridgenext.jpeg" alt="AVM" onError={(e) => e.currentTarget.src = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg'} />
                    </div>
                    <div className="timeline-date">2024 – 2024</div>
                    <div className="timeline-content">
                        <h3>Software Development Engineering Intern</h3>
                        <h4>BridgeNext</h4>
                        <ul>
                            <li><strong>Self-Taught Expertise:</strong> Gained proficiency in WordPress and UI/UX design through independent learning.</li>
                            <li><strong>Collaborative Design:</strong> Worked closely with stakeholders to gather feedback and iterate on the portfolio website&apos;s interactivity.</li>
                            <li><strong>Successful Website Development:</strong> Designed and developed a visually appealing and user-friendly portfolio website using WordPress.</li>
                            <li><strong>Positive Business Impact:</strong> Contributed to +54.25% sales and overall business growth through the improved website.</li>
                        </ul>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="timeline-item right">
                    <div className="timeline-dot">
                        <img src="/images/tcs.jpeg" alt="Sparkbright" onError={(e) => e.currentTarget.src = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'} />
                    </div>
                    <div className="timeline-date">2024 – 2026</div>
                    <div className="timeline-content">
                        <h3>Java Developer</h3>
                        <h4>Tata Consultancy Services</h4>
                        <ul>
                            <li><strong>Self-Taught Expertise:</strong> Gained proficiency in React.JS and Next.JS through independent learning.</li>
                            <li><strong>Successful Website Development:</strong> Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.</li>
                            <li><strong>Collaborative Design:</strong> Worked closely with stakeholders to gather feedback and iterate on the portfolio website&apos;s interactivity.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
