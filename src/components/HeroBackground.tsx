"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
    // Generate curved lines for the "vortex" effect
    const leftVortexPaths = [];
    const rightVortexPaths = [];

    // Animation variants
    const drawVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const baseOpacity = 0.2 + (i / 60) * 0.6; // Increased max opacity slightly
            return {
                pathLength: 1,
                opacity: baseOpacity,
                transition: {
                    pathLength: { duration: 3, ease: "easeInOut", delay: i * 0.02 },
                    opacity: { duration: 1.5, ease: "easeOut", delay: i * 0.02 }
                }
            };
        }
    };

    const rightDrawVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const baseOpacity = 0.1 + (i / 60) * 0.7;
            return {
                pathLength: 1,
                opacity: baseOpacity,
                transition: {
                    pathLength: { duration: 3.5, ease: "easeInOut", delay: i * 0.02 },
                    opacity: { duration: 1.5, ease: "easeOut", delay: i * 0.02 }
                }
            };
        }
    };

    // Refined floating animation
    const floatTransition = {
        y: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut"
        }
    };

    // ------------------------------------------------------------------
    // LEFT PATTERN: The "Crest" or "Ribbon"
    // Starts low-left, sweeps up to a peak, then flows down-right.
    // Mimicking the organic "hair" flow in the reference.
    // ------------------------------------------------------------------
    const leftCount = 60;
    for (let i = 0; i < leftCount; i++) {
        const strokeWidth = 0.5 + (i / leftCount) * 1.5;

        // Progress factor (0 to 1)
        const t = i / leftCount;

        // Shift coordinates to match the "wave" shape
        // Start: Left edge, moving upwards
        const startX = -100;
        const startY = 600 + (t * 400); // Fanning out at the start

        // Control 1: The "Upward" pull (The peak of the wave)
        const cp1X = 300 + (t * 50);
        const cp1Y = 0 + (t * 100);

        // Control 2: The "Downward" slope
        const cp2X = 500 + (t * 100);
        const cp2Y = 600 + (t * 300);

        // End: Fading out towards bottom-center/right
        const endX = 700 + (t * 200);
        const endY = 1000;

        const d = `M ${startX} ${startY} 
                   C ${cp1X} ${cp1Y}, 
                     ${cp2X} ${cp2Y}, 
                     ${endX} ${endY}`;

        leftVortexPaths.push(
            <motion.path
                key={`left-${i}`}
                custom={i}
                d={d}
                stroke="url(#gradLeft)"
                strokeWidth={strokeWidth}
                fill="none"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
            />
        );
    }

    // ------------------------------------------------------------------
    // RIGHT PATTERN: The "Topographic Hole" / "Funnel"
    // Concentric distorted circles/ovals on the right side.
    // ------------------------------------------------------------------
    const rightCount = 50;
    for (let i = 0; i < rightCount; i++) {
        const strokeWidth = 0.5 + (i / rightCount) * 1.5;
        const t = i / rightCount;

        // Center of the "black hole"
        const centerX = 1200;
        const centerY = 350;

        // Radius logic: increasing with 'i' to create layers
        // Using an ellipse that is distorted
        const rx = 100 + (Math.pow(t, 2) * 500); // Expand rapidly
        const ry = 80 + (t * 400);

        // We construct a full loop using two Cubic Beziers
        // Top half
        const d = `M ${centerX - rx} ${centerY} 
                   C ${centerX - rx} ${centerY - ry * 1.5}, 
                     ${centerX + rx} ${centerY - ry}, 
                     ${centerX + rx} ${centerY}
                   C ${centerX + rx} ${centerY + ry}, 
                     ${centerX - rx * 0.5} ${centerY + ry * 1.5}, 
                     ${centerX - rx} ${centerY}`; // Closing the loop with a twist

        // Shift the entire shape slightly right/down for that "falling away" perspective
        // and only render lines that are "large enough" to be the background waves
        // The reference feels like "ripples", so let's adjust to arcs instead of closed circles if preferred.
        // But the reference right side looks like closed loops. Let's stick to the distorted loop.

        // Actually, to match the "funnel", we can use a spiral approximation or offset rings.
        const path = (
            <motion.path
                key={`right-${i}`}
                custom={i}
                d={d}
                stroke="url(#gradRight)"
                strokeWidth={strokeWidth}
                fill="none"
                variants={rightDrawVariant}
                initial="hidden"
                animate="visible"
                style={{ opacity: 0.1 + t * 0.5 }} // Manual override for stacking
            />
        );
        rightVortexPaths.push(path);
    }

    return (
        <div className="hero-background-pattern">
            <svg
                viewBox="0 0 1440 900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hero-svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--token-6855074b-513d-4302-a89b-cea7e33faa06)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--token-f1d879a9-5bde-47c4-a81a-ed11063a8691)" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="gradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--token-301459fc-24bc-49a4-ab7d-5006e7225317)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--token-f281f7cf-03fc-4f90-9e8f-66623de315c4)" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                <motion.g
                    className="vortex-left"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={floatTransition}
                >
                    {leftVortexPaths}
                </motion.g>

                <motion.g
                    className="vortex-right"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{ ...floatTransition, delay: 2 }}
                >
                    {rightVortexPaths}
                </motion.g>
            </svg>
        </div>
    );
};

export default HeroBackground;
