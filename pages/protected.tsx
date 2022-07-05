import { User } from "@supabase/supabase-js";
import { NextApiRequest } from "next";
import { supabase } from "../client";


export default function Protected({ user }: { user: User }) {
    console.log({ user })
    return (
      <div style={{ maxWidth: '420px', margin: '96px auto' }}>
        <h2>Hello from protected route</h2>
      </div>
    )
  }
  
  export async function getServerSideProps({ req }: { req: User }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)
  
    if (!user) {
      return { props: {}, redirect: { destination: '/sign-in' } }
    }
  
    return { props: { user } }
  }