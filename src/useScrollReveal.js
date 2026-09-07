import { useLayoutEffect, useRef } from 'react';

// Prepare hidden states before paint; keyframes start when each item enters view.
export default function useScrollReveal() {
    const root = useRef(null);

    useLayoutEffect(() => {
        const container = root.current;
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!container || !('IntersectionObserver' in window)) return undefined;

        const elements = Array.from(container.querySelectorAll(
            '.nav-toggle, .main-nav .nav-link, .resume-chip, ' +
            '.hero-heading > *, .hero-subtitle, .hero-socials > a, ' +
            '.contact-panel > section, .section-intro > *, ' +
            '.project-card, .skill-card, .contribution-chart'
        ));
        const reveal = (element) => {
            if (element.classList.contains('reveal-pending') && !preference.matches) {
                element.classList.add('reveal-visible');
            }
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
            elements.forEach((element) => element.classList.remove(
                'scroll-reveal', 'reveal-pending', 'reveal-visible'
            ));
            preference.removeEventListener('change', onPreferenceChange);
            container.removeEventListener('focusin', onFocus);
        };
    }, []);

    return root;
}
