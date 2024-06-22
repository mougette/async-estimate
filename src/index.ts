import React from 'react';
import { createRoot } from "react-dom/client";
import { Home } from "./pages/home";

export const index = () => {
    const componentContainer = document.querySelector("#target");
    if (!componentContainer) { return };
    const component = React.createElement(Home);
    const root = createRoot(componentContainer);
    root.render(component);
};

index();
