import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function Show({ category }) {
    return (
        <div>
            <Head title={category.name} />
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page will show you the articles about {category.name}
                </Header.Subtitle>
            </Header>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
