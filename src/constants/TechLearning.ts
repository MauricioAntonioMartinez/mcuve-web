import { Tech } from "../types";

export const techs: Record<string, Tech> = {
  typescript: {
    url: "https://www.typescriptlang.org/",
    name: "Typescript",
    icon: "/tech/typescript.svg",
  },
  javascript: {
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    name: "Javascript",
    icon: "/tech/javascript.svg",
  },
  dart: { url: "https://dart.dev/", name: "Dart", icon: "/tech/dart.svg" },
  golang: {
    url: "https://golang.org/",
    name: "Golang",
    icon: "/tech/golang.svg",
  },
  python: {
    url: "https://www.python.org/",
    name: "Python",
    icon: "/tech/python.svg",
  },
  flutter: {
    url: "https://flutter.dev/",
    name: "Flutter",
    icon: "/tech/flutter.svg",
  },
  express: {
    url: "https://expressjs.com/",
    name: "Express",
    icon: "/tech/express.svg",
  },
  react: {
    url: "https://reactjs.org/",
    name: "React",
    icon: "/tech/react.svg",
  },
  nextjs: {
    url: "https://nextjs.org/",
    name: "Nextjs",
    icon: "/tech/nextjs.svg",
  },
  apollo: {
    url: "https://www.apollographql.com/",
    name: "Apollo",
    icon: "/tech/apollo.svg",
  },
  fiber: {
    url: "https://docs.gofiber.io/",
    name: "Fiber",
    icon: "/tech/fiber.svg",
  },
  docker: {
    url: "https://www.docker.com/",
    name: "Docker",
    icon: "/tech/docker.png",
  },
  kubernetes: {
    url: "https://kubernetes.io/",
    name: "Kubernetes",
    icon: "/tech/kubernetes.svg",
  },
  githubActions: {
    url: "https://github.com/features/actions",
    name: "Github Actions",
    icon: "/tech/githubactions.png",
  },
  aws: {
    url: "https://aws.amazon.com/",
    name: "Amazon Web Services",
    icon: "/tech/aws.svg",
  },
  postgreSQL: {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: "/tech/postgres.svg",
  },
  mongodb: {
    icon: "/tech/mongo.svg",
    name: "MongoDB",
    url: "https://www.mongodb.com/",
  },
  redis: { icon: "/tech/redis.svg", name: "Redis", url: "https://redis.io/" },
};

const myLanguages: Tech[] = [
  techs["typescript"],
  techs["javascript"],
  techs["dart"],
  techs["golang"],
  techs["python"],
];

const myFrameworks: Tech[] = [
  techs["flutter"],
  techs["express"],
  techs["react"],
  techs["nextjs"],
  techs["apollo"],

  techs["fiber"],
];

const myDevOps: Tech[] = [
  techs["docker"],
  techs["kubernetes"],

  techs["githubActions"],

  techs["aws"],
];

const myDatabase: Tech[] = [
  techs["postgreSQL"],
  techs["mongodb"],
  techs["redis"],
];

export const learning = {
  Languages: myLanguages,
  Frameworks: myFrameworks,
  DevOps: myDevOps,
  Databases: myDatabase,
};
