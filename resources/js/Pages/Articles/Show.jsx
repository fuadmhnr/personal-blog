import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Header";
import Container from "@/Components/Container";
import Markdown from "@/Components/Markdown";

export default function Show({ article }) {
    return (
        <div>
            <Head title={article.title} />
            <Header>
                <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-4">
                        Fill in:{" "}
                        <Link
                            className="text-white underline"
                            href={route(
                                "categories.show",
                                article.category_id.slug
                            )}
                        >
                            {article.category_id.name}
                        </Link>
                    </div>
                    {article.tags.length ? (
                        <div className="flex items-center gap-x-2">
                            {article.tags.map((tag) => (
                                <Link
                                    className="bg-gray-700 text-white px-2 py-1 text-xs font-medium rounded-md hover:bg-gray-600 transition duration-200 border-t border-gray-600"
                                    key={tag.slug}
                                    href={"#"}
                                >
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
            </Header>
            <Container>
                <div className="grid grid-cols-12 gap-16 prose-img:rounded-lg">
                    <div className="col-span-9">
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-3">Another great articles</div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
