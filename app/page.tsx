import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import HomeMain from "./index/page";

export default async function Home() {
  return (
    <>
      
      <HomeMain/>
   
    </>
  );
}
