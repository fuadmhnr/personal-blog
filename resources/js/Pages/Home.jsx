import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <div>
            <Head title={"Home Page"} />
            Home Page
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
