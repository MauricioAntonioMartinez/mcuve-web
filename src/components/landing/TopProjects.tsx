import Image from "next/image";
import React from "react";
import xw from "xwind";
import { useModal } from "../../store/modals";
import { ProjectItem } from "../Projects/ProjectItem";
import { ProjectItemView } from "../Projects/ProjectItemView";
import { Description } from "./Description";

interface Props {}

export const TopProjects = (props: Props) => {
  const { showModal } = useModal();

  const showProjectHandler = () => {
    showModal(ProjectItem);
  };

  return (
    <section
      css={xw`container grid grid-cols-2   border-2 rounded-l-lg overflow-hidden`}
    >
      <div css={xw`relative   space-y-12 `}>
        <div
          css={xw`absolute w-full h-full bg-black  p-8 z-10 bg-opacity-60 flex flex-col justify-end`}
        >
          <h2 css={xw`font-bold text-7xl text-primary `}>My Top Projects</h2>
          <Description css={xw`text-2xl text-white `}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            provident expedita quasi libero similique repellendus soluta eaque
            excepturi aut. Numquam incidunt quae, mollitia quod consectetur quis
            maiores laudantium similique consequuntur.
          </Description>
        </div>
        <Image
          src="/assets/cover-top-projects.jpg"
          layout="fill"
          objectFit="cover"
          css={xw`absolute w-full h-full bg-black   z-0`}
        />
      </div>

      <div css={xw` grid grid-cols-2 gap-6 p-8 `}>
        <ProjectItemView onClick={showProjectHandler} />
        <ProjectItemView onClick={showProjectHandler} />
        <ProjectItemView onClick={showProjectHandler} />
        <ProjectItemView onClick={showProjectHandler} />
      </div>
    </section>
  );
};
