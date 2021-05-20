import Image from "next/image";
import React from "react";
import xw from "xwind";
import { useModal } from "../../store/modals";
import { Project } from "../../types";
import { ProjectItem } from "../Projects/ProjectItem";
import { ProjectItemView } from "../Projects/ProjectItemView";
import { Description } from "./Description";

interface Props {
  projects: Project[];
}

export const TopProjects = ({ projects }: Props) => {
  const { showModal } = useModal();

  const showProjectHandler = () => {
    showModal(() => (
      <ProjectItem
        project={{
          preview: "https://placeimg.com/480/480/tech",
          image: "https://placeimg.com/480/480/tech",
          name: "Mertion",
          repo: "https://mcuve.com",
          excerpt: "",
          isTop: true,
          tech: [{ url: "test", icon: "test", name: "Java" }],
          description: "This app was ment to be for the fitness people",
        }}
      />
    ));
  };

  return (
    <section
      css={xw`container grid sm:grid-cols-1 xl:grid-cols-2   border-2 rounded-l-lg overflow-hidden mb-10`}
    >
      <div css={xw`relative   space-y-12  sm:flex-none md:h-80 xl:h-full `}>
        <div
          css={xw`absolute w-full h-full bg-black  p-8 z-10 bg-opacity-60 flex flex-col justify-end`}
        >
          <h2 css={xw`font-bold text-7xl text-light `}>Facta non verba.</h2>
          <Description css={xw`text-2xl text-white italic `}>
            "Creating is the most important thing regardless the theory you
            know, your work describe your learning it shows how well are you
            prepared and how much effort you are willing to put in your code"
          </Description>
        </div>
        <Image
          src="/assets/cover-top-projects.jpg"
          layout="fill"
          objectFit="cover"
          css={xw`absolute w-full h-full bg-black   z-0`}
        />
      </div>

      <div css={xw` grid sm:grid-cols-1 md:grid-cols-2  gap-6 p-8 `}>
        {projects.map((p) => (
          <ProjectItemView
            onClick={showProjectHandler}
            title={p.name}
            image={p.image}
            excerpt={p.excerpt}
          />
        ))}
      </div>
    </section>
  );
};
