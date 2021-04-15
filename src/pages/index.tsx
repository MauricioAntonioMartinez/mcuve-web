import xw from "xwind";
import { Button } from "../components/ui/Button";

export default function Index() {
  return (
    <main>
      <div css={xw`grid justify-center items-center h-screen space-y-20 `}>
        <div css={xw`space-y-20 `}>
          <Button>@emotion/react</Button>
        </div>
      </div>
    </main>
  );
}
