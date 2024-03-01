import { Inter } from "next/font/google";
import MainHomeComp from "@/components/homePageComp/mainComp";
import NavFooter from "@/components/navFooter/navFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <NavFooter>
    <MainHomeComp/>
    </NavFooter>
   </div>
  );
}
