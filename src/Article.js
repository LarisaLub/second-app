//import React from "../../../.cache/typescript/2.9/node_modules/@types/react";

function Article(props) {
    const { article } = props;
    const body = <section> {article.text} </section>;

    return (
        <div>
            <h2> {article.title}</h2>
            {body}
            <h3> create date: {new Date(article.date).toDateString()} </h3>
        </div>
    );
}

export default Article;
