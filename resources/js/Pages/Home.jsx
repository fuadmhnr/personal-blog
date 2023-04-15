import React from "react";
import App from "@/Layouts/App";
import { Head, usePage } from "@inertiajs/react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";

export default function Home({ articles }) {
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
            <Container>
                {articles.length ? (
                    <Grid>
                        {articles.map((article) => (
                            <ArticleBlock
                                article={article}
                                key={article.slug}
                            />
                        ))}
                    </Grid>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
