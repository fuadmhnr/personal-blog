import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";

export default function Home() {
    return (
        <div>
            <Head title={"Home Page"} />
            <Header>
                <Header.Title>Oh, Hello!👋</Header.Title>
                <Header.Subtitle>
                    Personal blog of Fuad Muhammad N
                </Header.Subtitle>
                <Header.Content>
                    Welcome lads!, where we dive deep into the world of code,
                    hardware, and software, exploring new technologies, tools,
                    and techniques to help you stay ahead of the curve
                </Header.Content>
            </Header>
            <Container>Home</Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
