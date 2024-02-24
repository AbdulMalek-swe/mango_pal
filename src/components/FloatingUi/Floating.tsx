"use client"
import { arrow, computePosition, flip, offset, shift } from '@floating-ui/react';
import React, { useEffect } from 'react';

const Floating = () => {
    useEffect(() => {
        const button = document.querySelector('#button') as any;
        const tooltip = document.querySelector('#tooltip') as any;
        // const arrowElement = document.querySelector('#arrow');
        function update() {
            computePosition(button, tooltip, {
                placement: 'top',
                middleware: [offset(6), flip(), shift({ padding: 5 }),
                ]
            }).then(({ x, y, middlewareData, placement }) => {
                Object.assign(tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

            });
        }
        function showTooltip() {
            tooltip.style.display = 'block';
            update();
        }

        function hideTooltip() {
            tooltip.style.display = 'none';
        }

        [
            ['mouseenter', showTooltip],
            ['mouseleave', hideTooltip],
            ['focus', showTooltip],
            ['blur', hideTooltip],
        ].forEach(([event, listener]) => {
            button.addEventListener(event, listener);
        });
    }, [])
    return (
        <div className='bg-gray-300'>
            <button id="button" aria-describedby="tooltip">
                My button
            </button>
            <div id="tooltip" role="tooltip">My tooltip</div>
        </div>
    );
};

export default Floating;