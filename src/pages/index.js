import React from "react";
import { graphql } from "gatsby";
import { ImgixGatsbyImage } from '@imgix/gatsby';

export default function Home({ data }) {
  return(
    <div >
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div>
          <ImgixGatsbyImage
            // Must be an imgix URL
            src={node.imgUrl}
            imgixParams={{
              auto:'format,compress',
              crop:'faces,edges'
            }}
            layout="constrained"
            width={350}
            aspectRatio={16 / 9}
            alt="An imgix-served image from Contentful"
          />
        </div>
      ))}
    </div>
  )
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