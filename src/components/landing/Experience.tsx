import React from "react";
import xw from "xwind";
import { Event } from "../../constants/Experience";
import { ExperienceItem } from "../items/ExperienceItem";

interface Props {
  events: Event[];
}

const currentMonth = new Date().toLocaleDateString("en-US", {
  month: "numeric",
});

const currentYear = new Date().toLocaleDateString("en-US", {
  year: "numeric",
});

const YEARS = ["2020", "2021"];

const MONTHS = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const ExperienceView = ({ events }: Props) => {
  const leftEvents: Event[] = [];
  const rightEvents: Event[] = [];

  events.map((e, idx) => {
    if ((idx + 1) % 2 === 0) rightEvents.push(e);
    else leftEvents.push(e);
  });

  const getTopDistance = (date: string) => {
    const top =
      12 *
        +YEARS.indexOf(
          new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
          })
        ) +
      new Date(date).getMonth();
    return top;
  };

  return (
    <section css={xw`w-full grid grid-cols-11  container pt-12 `}>
      <div css={xw`col-span-5 flex flex-col w-full items-end mt-16  `}>
        {leftEvents.map((e, idx) => (
          <div
            style={{
              marginTop: `${getTopDistance(e.start) * 0.8}rem`,
            }}
            key={`Event-Left-${idx}`}
          >
            <ExperienceItem event={e} direction="left" />
          </div>
        ))}
      </div>
      <div
        css={xw`relative w-full bg-primary rounded-t-2xl flex flex-col  items-center pt-8 pb-2 mb-24`}
      >
        <div css={xw`w-full bg-black h-6 mb-4`}></div>

        {YEARS.map((y) => (
          <>
            <h1 css={xw`italic text-4xl font-bold`}>{y}</h1>
            <div css={xw`flex flex-col py-2 space-y-3  items-center`}>
              {MONTHS.slice(
                0,
                y === currentYear ? +currentMonth : MONTHS.length
              ).map((m) => (
                <span key={`${y}${m}`} css={xw`italic text-xl z-20`}>
                  - {m} -
                </span>
              ))}
            </div>
          </>
        ))}
        <div
          css={xw`absolute w-24 bg-primary h-24 transform rotate-45 -bottom-8 border-b-2 border-r-2 border-warning z-10`}
        ></div>
        <div
          css={xw`absolute w-24 bg-danger h-24 transform rotate-45 -bottom-12 z-0`}
        ></div>
      </div>
      <div css={xw`col-span-5 flex flex-col  space-y-48 mt-48 `}>
        {rightEvents.map((e, idx) => (
          <div
            style={{
              marginTop: `${getTopDistance(e.start)}rem`,
            }}
            css={xw`w-full  flex items-center items-center`}
            key={`Event-Left-${idx}`}
          >
            <ExperienceItem
              event={e}
              direction="right"
              key={`Event-Right-${idx}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
