import React, { useEffect, useState } from 'react';

const name = 'Antonio Indindoli';

export default function TypedName() {
    const [visibleCharacters, setVisibleCharacters] = useState(0);

    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let count = 0;
        let timer;
        const finish = () => {
            if (preference.matches) {
                window.clearInterval(timer);
                setVisibleCharacters(name.length);
            }
        };

        if (preference.matches) {
            finish();
        } else {
            timer = window.setInterval(() => {
                count += 1;
                setVisibleCharacters(count);
                if (count === name.length) window.clearInterval(timer);
            }, 100);
        }

        preference.addEventListener('change', finish);
        return () => {
            window.clearInterval(timer);
            preference.removeEventListener('change', finish);
        };
    }, []);

    let offset = 0;
    return (
        <h1 id="about-title" aria-label={name}>
            <span className="typed-name" aria-hidden="true">
                {visibleCharacters === 0 && <span className="name-cursor name-cursor-start">_</span>}
                {name.split(' ').map((word, wordIndex) => {
                    const start = offset;
                    offset += word.length + 1;
                    return (
                        <React.Fragment key={word}>
                            {wordIndex > 0 && ' '}
                            <span className="typed-name-word">
                                {Array.from(word).map((character, index) => {
                                    const position = start + index + 1;
                                    const cursorHere = visibleCharacters === position ||
                                        (index === word.length - 1 && visibleCharacters === position + 1 && position < name.length);
                                    return (
                                        <span className="typed-name-letter" key={position}>
                                            <span style={{ visibility: visibleCharacters >= position ? 'visible' : 'hidden' }}>{character}</span>
                                            {cursorHere && <span className="name-cursor">_</span>}
                                        </span>
                                    );
                                })}
                            </span>
                        </React.Fragment>
                    );
                })}
            </span>
        </h1>
    );
}
