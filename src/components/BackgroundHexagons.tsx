"use client";

import React, { useEffect, useState } from 'react';

const BackgroundHexagons = () => {
    const [hexagons, setHexagons] = useState<Array<{
        id: number;
        top: number;
        left: number;
        color: string;
        size: number;
        duration: number;
        delay: number;
        depth: number;
    }>>([]);

    useEffect(() => {
        const colors = [
            'rgba(7, 188, 138, 0.2)',  // green
            'rgba(255, 103, 0, 0.2)',   // orange
            'rgba(88, 212, 221, 0.2)',  // cyan
            'rgba(65, 82, 232, 0.2)',   // blue
            'rgba(107, 71, 227, 0.2)'   // purple
        ];

        const generateHexagons = () => {
            const newHexagons = [];
            const count = 20;

            for (let i = 0; i < count; i++) {
                // Random position across the screen, but mostly avoiding the very center
                // or just purely random for a dynamic "space" feel
                let left = Math.random() * 100;

                newHexagons.push({
                    id: i,
                    top: Math.random() * 100,
                    left: left,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: 80 + Math.random() * 100, // Larger for 3D effect
                    duration: 15 + Math.random() * 20, // Slow movement
                    delay: Math.random() * -20, // Start at different times
                    depth: Math.random() // For parallax/scale effect
                });
            }
            setHexagons(newHexagons);
        };

        generateHexagons();
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden',
            perspective: '1000px' // Enable 3D space
        }}>
            {hexagons.map((hex) => (
                <div
                    key={hex.id}
                    className="floating-hex"
                    style={{
                        position: 'absolute',
                        top: `${hex.top}%`,
                        left: `${hex.left}%`,
                        width: `${hex.size}px`,
                        height: `${hex.size}px`,
                        backgroundColor: hex.color,
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        opacity: 0.6,
                        // @ts-ignore
                        '--float-duration': `${hex.duration}s`,
                        '--float-delay': `${hex.delay}s`,
                        '--float-depth': hex.depth,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundHexagons;
