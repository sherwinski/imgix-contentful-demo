import React from "react";
import { graphql } from "gatsby";
import { ImgixGatsbyImage } from "@imgix/gatsby";

export default function Home({ data }) {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-wrap">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div className="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
              <p className="text-2xl p-2">{node.title} with Webfolder</p>
              <ImgixGatsbyImage
                src={
                  `https://sherwinski-contentful-wf.imgix.net/` +
                  node.heroImage.file.url.split("/").slice(4).join("/")
                }
                imgixParams={{
                  auto: "format,compress",
                  crop: "faces,edges",
                }}
                layout="constrained"
                width={350}
                aspectRatio={16 / 9}
                sizes="(min-width: 1024px) calc(30vw - 128px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)"
                alt="An imgix-served image from Contentful"
              />
              <p className="p-2">{node.description.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <div className="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
              <p className="text-2xl p-2">{node.title} with imgix-contentful</p>
              <ImgixGatsbyImage
                src={node.imgUrl}
                imgixParams={{
                  auto: "format,compress",
                  crop: "faces,edges",
                }}
                layout="constrained"
                width={350}
                aspectRatio={16 / 9}
                sizes="(min-width: 1024px) calc(30vw - 128px), (min-width: 768px) calc(50vw - 100px), calc(100vw - 70px)"
                alt="An imgix-served image from Contentful"
              />
              <p className="p-2">{node.description.description}</p>
            </div>
          ))}
        </div>
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
