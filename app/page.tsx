import Hero from "@/components/hero";
import HomeMain from "@/components/HomeMain";
import Homeletter from "@/components/Letters";

import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import ProductsPage from "./products/page";


export default async function Home() {
  return (
    <main className="">
       
      <ProductsPage/>
   
    </main>
  );
}
