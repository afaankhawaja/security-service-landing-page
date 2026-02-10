import React from "react";

export const ShieldLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M35 25L15 45L25 55L45 35L35 25Z"
                fill="currentColor"
            />
            <path
                d="M65 35L35 65L45 75L75 45L65 35Z"
                fill="currentColor"
            />
            <path
                d="M85 55L65 75L75 85L95 65L85 55Z"
                fill="currentColor"
            />
        </svg>
    );
};
