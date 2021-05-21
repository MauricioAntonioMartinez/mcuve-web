import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import xw from "xwind";
import { Description } from "../components/landing/Description";
import { ExperienceView } from "../components/landing/Experience";
import { LandingHead } from "../components/landing/LandingHead";
import { Learning } from "../components/landing/Learning";
import { TopProjects } from "../components/landing/TopProjects";
import { Event, EXPERIENCE } from "../constants/Experience";
import { learning } from "../constants/TechLearning";
import { getTopProjects } from "../lib/projects";
import { Project, Tech } from "../types";

export default function Index({
  events,
  learning,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <LandingHead />
      <section
        css={xw`mt-40 flex flex-col justify-items-center items-center  w-full space-y-14`}
      >
        <Description css={xw`w-1/2`}>
          Hi my name is Mauricio, i am a fullstack developer with focus on
          backend technologies. Create resilient, well architected and scalable
          applications is my main focus, design systems taking care of all error
          cases, having the most efficient workflow using the best and adequate
          IT resources are just describers of my work. If you want to contact me
          feel freely in doing it, i am open and hungry to help you build your
          business.
        </Description>
        <div css={xw`container`}>
          <div css={xw`w-full h-0.5 bg-black opacity-30`}></div>

          <h2 css={xw`text-6xl text-center font-bold mb-16 mt-6`}>
            What do i know?
          </h2>

          <Learning learning={learning} />
        </div>
        <TopProjects projects={projects} />

        <h2 css={xw`text-6xl text-center font-bold mb-16 mt-6`}>
          What about my experience?
        </h2>

        <div css={xw`container w-full h-0.5 bg-black opacity-30`}></div>

        <ExperienceView events={events} />
      </section>
    </section>
  );
}

export const getStaticProps: GetStaticProps<{
  events: Event[];
  learning: Record<string, Tech[]>;
  projects: Project[];
}> = async () => {
  const projects = getTopProjects();
  return {
    props: {
      events: EXPERIENCE,
      learning,
      projects,
    },
  };
};
