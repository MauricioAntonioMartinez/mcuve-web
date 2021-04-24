import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import xw from "xwind";
import { Description } from "../components/landing/Description";
import { ExperienceView } from "../components/landing/Experience";
import { LandingHead } from "../components/landing/LandingHead";
import { Learning } from "../components/landing/Learning";
import { TopProjects } from "../components/landing/TopProjects";
import { Event, EXPERIENCE } from "../constants/Experience";

export default function Index({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(events);
  return (
    <section>
      <LandingHead />
      <section
        css={xw`mt-40 flex flex-col justify-items-center items-center  w-full space-y-14`}
      >
        <Description css={xw`w-1/2`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          libero deserunt iusto consequatur autem error repellat possimus eos!
          Ducimus ea pariatur suscipit odio maxime eum repellat, dolores vero,
          magni placeat nostrum ipsum consequuntur cumque necessitatibus!
        </Description>
        <div css={xw`container`}>
          <div css={xw`w-full h-0.5 bg-black opacity-30`}></div>

          <h2 css={xw`text-6xl text-center font-bold mb-16 mt-6`}>
            What do i know?
          </h2>

          <Learning />
        </div>
        <TopProjects />

        <h2 css={xw`text-6xl text-center font-bold mb-16 mt-6`}>
          What about my experience?
        </h2>

        <div css={xw`container w-full h-0.5 bg-black opacity-30`}></div>

        <ExperienceView events={events} />
      </section>
    </section>
  );
}

export const getStaticProps: GetStaticProps<{ events: Event[] }> = async () => {
  return {
    props: {
      events: EXPERIENCE,
    },
  };
};
