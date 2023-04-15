import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import Container from "@/Components/Container";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";
import Pagination from "@/Components/Pagination";

export default function Index({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    console.log(links);
    return (
        <div>
            <Head title="The Articles" />
            <Header>
                <Header.Title>The Articles</Header.Title>
                <Header.Subtitle>Read if you need it!👌</Header.Subtitle>
            </Header>

            <Container>
                {articles.length ? (
                    <>
                        <Grid>
                            {articles.map((article) => (
                                <ArticleBlock
                                    article={article}
                                    key={article.slug}
                                />
                            ))}
                        </Grid>
                        <Pagination {...{ meta, links }} />
                    </>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
