import React from 'react';

// Map the live provider's light palette to GitHub's dark activity levels.
const palette = [
    ['#eeeeee', '#161b22'],
    ['#c6e48b', '#0e4429'],
    ['#7bc96f', '#006d32'],
    ['#239a3b', '#26a641'],
    ['#196127', '#39d353'],
    ['#767676', '#9198a1'],
];

const channelTable = (channel) => {
    const anchors = palette.map(([source, target]) => [
        parseInt(source.slice(1 + channel * 2, 3 + channel * 2), 16),
        parseInt(target.slice(1 + channel * 2, 3 + channel * 2), 16),
    ]).sort((a, b) => a[0] - b[0]);

    return Array.from({ length: 256 }, (_, value) => {
        const upper = anchors.findIndex(([input]) => input >= value);
        if (upper === 0) return anchors[0][1] / 255;
        if (upper === -1) return anchors[anchors.length - 1][1] / 255;
        const [x0, y0] = anchors[upper - 1];
        const [x1, y1] = anchors[upper];
        return (y0 + (y1 - y0) * (value - x0) / (x1 - x0)) / 255;
    }).join(' ');
};

const tables = [0, 1, 2].map(channelTable);

// An SVG lookup filter preserves live updates without downloading or freezing the chart.
export default function ContributionChartColors() {
    return (
        <svg width="0" height="0" aria-hidden="true" focusable="false" className="contribution-color-defs">
            <defs>
                <filter id="github-dark-colors" colorInterpolationFilters="sRGB">
                    <feComponentTransfer>
                        <feFuncR type="table" tableValues={tables[0]} />
                        <feFuncG type="table" tableValues={tables[1]} />
                        <feFuncB type="table" tableValues={tables[2]} />
                    </feComponentTransfer>
                </filter>
            </defs>
        </svg>
    );
}
