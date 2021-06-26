function importAll(r: any) {
  return r.keys().map((fileName: string) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

function dateSortDesc(a: number, b: number) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export default function getAllPostPreviews() {
  const res = importAll(
    (require as any).context("../pages", true, /\.mdx$/)
  ).sort((a: any, b: any) =>
    dateSortDesc(a.module.meta.date, b.module.meta.date)
  );
  return res;
}

export function getAllPosts() {
  return importAll((require as any).context("../pages/?rss", true, /\.mdx$/))
    .filter((p: any) => p.module.meta.private !== true)
    .sort((a: any, b: any) =>
      dateSortDesc(a.module.meta.date, b.module.meta.date)
    );
}
