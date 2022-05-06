import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Qusetion: Difference between javascript and nodejs</h2>
            <p>Ans: Javascript- JavaScript is a programming language. It is running in any web browser with a proper browser engine.JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).<br />
            Nodejs- It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
            </p>
            <br />
            <h2>Qusetion: Differences between sql and nosql databases.</h2>
            <p>Ans: sql- These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.<br />
         NoSql- They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance).

        </p>
        <br />
        <h2>Question: What is the purpose of jwt and how does it work</h2>
        <p>Ans: JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two  parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
         A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

        Once decoded, you will get two JSON strings:

        The header and the payload.
        The signature. </p>

        </div>
    );
};

export default Blogs;