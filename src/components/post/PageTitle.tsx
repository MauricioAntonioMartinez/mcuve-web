export const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {(children as string).replace(/ ([^ ]+)$/, "\u00A0$1")}
    </h1>
  );
};
