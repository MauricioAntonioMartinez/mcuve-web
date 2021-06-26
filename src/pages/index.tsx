import { Certifications } from "@/components/landing/Certifications";
import { Description } from "@/components/landing/Description";
import { ExperienceView } from "@/components/landing/Experience";
import { Learning } from "@/components/landing/Learning";
import { TopProjects } from "@/components/landing/TopProjects";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import xw from "xwind";
import { LandingHead } from "../components/landing/LandingHead";
import { certifications } from "../constants/Certifications";
import { Event, EXPERIENCE } from "../constants/Experience";
import { learning } from "../constants/TechLearning";
import { getTopProjects } from "../lib/projects";
import { Certification, Project, Tech } from "../types";

export default function Index({
  events,
  learning,
  certifications,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <LandingHead />
      <section
        css={xw`mt-40 flex flex-col justify-items-center items-center  w-full space-y-14`}
      >
        <Description css={xw`w-1/2`}>
          Hi my name is Mauricio, i'm a fullstack developer with focus on
          backend technologies. Create scalable ,resilient and well architected
          applications is my focus, design systems and taking care of all edge
          cases are my top priority, having the most efficient workflow using
          the best and adequate IT resources for the job keeping always simple
          to get the best out of it considering business and technical
          prospective in mind. If you want to contact me feel freely in doing
          it, i'm open and hungry to help you build your business.
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

        <h2 css={xw`text-6xl text-center font-bold mb-16 mt-6`}>
          Certifications
        </h2>

        <Certifications certifications={certifications} />
      </section>
    </section>
  );
}

export const getStaticProps: GetStaticProps<{
  events: Event[];
  learning: Record<string, Tech[]>;
  projects: Project[];
  certifications: Certification[];
}> = async () => {
  const projects = getTopProjects();
  return {
    props: {
      events: EXPERIENCE,
      learning,
      projects,
      certifications,
    },
  };
};
