import { useState, useEffect } from "react";

export function useDeviceDetect() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 320);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 991);
            setIsMobile(window.innerWidth <= 767);
            setIsSmallMobile(window.innerWidth <= 320);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isSmallScreen, isMobile, isSmallMobile };
}