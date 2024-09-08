'use strict';

var jsxRuntime = require('react/jsx-runtime');

const hoverButton = ({ title }) => {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("button", { className: "bg-primary text-bgColor group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md px-6 font-medium transition duration-300 hover:scale-110", children: [jsxRuntime.jsxs("span", { children: [title, " - new text"] }), jsxRuntime.jsx("div", { className: "absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]", children: jsxRuntime.jsx("div", { className: "relative h-full w-8 bg-white/20" }) })] }) }));
};

exports.Button = hoverButton;
//# sourceMappingURL=index.js.map
