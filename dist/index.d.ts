import React from 'react';

type ButtonProps = {
    title: string;
};

declare const hoverButton: React.FC<ButtonProps>;

export { hoverButton as Button };
