import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children};
    <ArticleBody show={props.show} text={props.text} isRead={props. isRead} />
    <ArticleAuthor /> 
    </>
    );
  }
  export default Article;


