import Rect from "@/components/ui/decoration/Rect";
import { NavLink } from "@/components/ui/link/NavLink";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <div className="grid gap-2 relative z-10 ">
      <Welcome />
    </div>
  );
}