import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        // Use requestAnimationFrame to ensure the scroll happens after the DOM update
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [pathname]);

    return null;
}
