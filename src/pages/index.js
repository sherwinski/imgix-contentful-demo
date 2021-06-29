import React from "react";
import { graphql } from "gatsby";

export default function Home() {
  return <div>Hello world!</div>;
}

export const query = graphql`
query {
  allContentfulBlogPost {
    edges {
      node {
        imgUrl
        title
        description {
          description
        }
      }
    }
  }
}
`