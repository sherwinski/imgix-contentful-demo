import React from "react";
import { graphql } from "gatsby";
import { ImgixGatsbyImage } from "@imgix/gatsby";

export default function Home({ data }) {
  return (
    <div class="p-4">
      <div class="flex flex-wrap">
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div class="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
            <p class="text-2xl p-2">{parse(node.title)}</p>
            <ImgixGatsbyImage
              src={node.imgUrl}
              imgixParams={{
                auto: "format,compress",
                crop: "faces,edges",
              }}
              layout="constrained"
              width={350}
              aspectRatio={16 / 9}
              alt="An imgix-served image from Contentful"
            />
            <p class="p-2">{parse(node.description.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
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
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
