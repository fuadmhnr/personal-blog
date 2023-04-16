import React from "react";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/react";
import Header from "@/Components/Header";
import Container from "@/Components/Container";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import InputFile from "@/Components/InputFile";
import Textarea from "@/Components/TextArea";
import Editor from "@/Components/Editor";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import MultipleSelect from "@/Components/MultipleSelect";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ tags, categories }) {
    const { data, setData, errors } = useForm({
        title: "",
        teaser: "",
        body: "",
        category_id: "",
        picture: "",
        tags: [tags[0], tags[1]],
    });

    const onChange = (e) => setData(e.target.name, e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("articles.store"), {
            ...data,
            category_id: data.category_id.id,
            tags: data.tags.map((t) => t.id),
        });
    };

    return (
        <div>
            <Head title={"Create Articles"} />
            <Header>
                <Header.Title>{"Create new article"}</Header.Title>
                <Header.Subtitle>
                    {"Pour your inspiration and write down here"}
                </Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel value={"Title"} />
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                        />
                    </div>
                    <div className="mb-6">
                        <InputLabel value={"Picture"} />
                        <InputFile
                            name="picture"
                            id="picture"
                            onChange={(e) =>
                                setData("picture", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <InputLabel value={"Teaser"} />
                        <Textarea
                            name="teaser"
                            id="teaser"
                            onChange={onChange}
                            value={data.teaser}
                        />
                    </div>
                    <div className="mb-6">
                        <Editor
                            name="body"
                            id="body"
                            onChange={onChange}
                            value={data.body}
                        />
                    </div>
                    <div className="flex gap-8">
                        <div className="flex-auto">
                            <InputLabel>Category</InputLabel>
                            <Select
                                data={categories}
                                value={data.category_id}
                                onChange={(e) => setData("category_id", e)}
                            />
                        </div>
                        <div className="flex-auto">
                            <InputLabel>Tags</InputLabel>
                            <MultipleSelect
                                data={tags}
                                selectedItem={data.tags}
                                onChange={(e) => setData("tags", e)}
                            />
                        </div>
                    </div>
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page} />;
