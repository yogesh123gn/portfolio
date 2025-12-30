import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedProjectProps {
    title: string;          // Brand Name (e.g., TickerTape)
    status?: string;        // e.g., "Launched"
    headline?: string;      // Big bold text (e.g., "Designing a social...")
    description: string;    // Smaller paragraph text
    tags?: string[];        // ["Social Media", "Fintech", ...]
    imageSrc: string;       // Laptop or Phone image
    caseStudyLink?: string;
    align?: 'left' | 'right';
    glowColor?: string;     // Color of the background glow
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
    title,
    status = "Launched",
    headline,
    description,
    tags = [],
    imageSrc,
    caseStudyLink = "#",
    align = 'left',
    glowColor = "#8b5cf6" // Default purple-ish
}) => {
    return (
        <div className={`featured-project-card ${align === 'right' ? 'flex-row-reverse' : ''}`}>
            {/* Content Section */}
            <div className="featured-content-wrapper">
                <div className="featured-header">
                    <h3 className="featured-brand">{title}</h3>
                    {status && (
                        <div className="featured-status">
                            <Star size={12} fill="currentColor" strokeWidth={0} />
                            <span>{status}</span>
                        </div>
                    )}
                </div>

                {headline && <h2 className="featured-headline">{headline}</h2>}

                {tags.length > 0 && (
                    <div className="featured-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag-item">
                                {tag}
                                {index < tags.length - 1 && <span className="tag-dot">•</span>}
                            </span>
                        ))}
                    </div>
                )}

                {/* Optional: Description if needed, or keeping it hidden if headline covers it. 
                    The design shows mostly headline + tags. I'll include description but style it subtly. */}
                {description && <p className="featured-desc">{description}</p>}

                <div className="featured-action">
                    <Link href={caseStudyLink} className="arrow-button">
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div className="featured-image-wrapper">
                <div
                    className="glow-background"
                    style={{ background: `radial-gradient(circle, ${glowColor} 0%, rgba(255,255,255,0) 70%)` }}
                ></div>
                <div className="image-container">
                    <img src={imageSrc} alt={title} className="project-mockup" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
