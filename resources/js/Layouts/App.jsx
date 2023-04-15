import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function App({ children }) {
    return (
        <div>
            <Navigation />
            <div className="pt-8">{children}</div>
            <Footer />
        </div>
    );
}
