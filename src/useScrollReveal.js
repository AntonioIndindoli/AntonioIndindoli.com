import { useEffect, useRef } from 'react';

// Content stays visible until the observer is ready, and remains visible once seen.
export default function useScrollReveal() {
    const root = useRef(null);

    useEffect(() => {
        const container = root.current;
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!container || !('IntersectionObserver' in window)) return undefined;

        const elements = Array.from(container.querySelectorAll(
            '.section-intro, .project-card, .skill-card, .contribution-chart'
        ));
        const reveal = (element) => {
            element.classList.remove('reveal-pending');
            observer.unobserve(element);
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) reveal(entry.target);
            });
        }, { threshold: 0.08 });

        if (!preference.matches) {
            elements.forEach((element) => {
                element.classList.add('scroll-reveal', 'reveal-pending');
                observer.observe(element);
            });
        }

        const onPreferenceChange = () => {
            if (preference.matches) elements.forEach(reveal);
        };
        const onFocus = (event) => {
            const element = event.target.closest('.reveal-pending');
            if (element) reveal(element);
        };
        preference.addEventListener('change', onPreferenceChange);
        container.addEventListener('focusin', onFocus);
        return () => {
            observer.disconnect();
            elements.forEach((element) => element.classList.remove('reveal-pending'));
            preference.removeEventListener('change', onPreferenceChange);
            container.removeEventListener('focusin', onFocus);
        };
    }, []);

    return root;
}
