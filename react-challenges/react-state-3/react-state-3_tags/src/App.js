import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(tag) {
    console.log("App -> handleAddTag: ", tag);
    setTags([...tags, tag]);
  }

  function handleDeletedTag(deleteTag) {
    console.log(deleteTag);
    const newTags = tags.filter((tag) => tag !== deleteTag);
    setTags(newTags);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeletedTag} />
    </main>
  );
}
