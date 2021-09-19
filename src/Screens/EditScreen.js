import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlockPostFrom from "../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find(
    (blogPost) => blogPost.id === id
  );

  return (
    <BlockPostFrom initialValues={{ title: blogPost.title, content: blogPost.content }} onSubmit={(title, content) => {
      editBlogPost(id,title, content, () => navigation.pop());
    }} />

  );
};


export default EditScreen;