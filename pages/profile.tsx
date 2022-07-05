import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useRouter } from "next/router";
import { User } from "@supabase/supabase-js";

export default function Profile() {
    const [profile, setProfile] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const profileData = await supabase.auth.user();
        if (!profileData) {
            router.push('/sign-in')
        } else {
            setProfile(profileData)
        }
    }
    async function signOut() {
        await supabase.auth.signOut()
        router.push('/sign-in')
    }
    if(!profile) return null
    return(
        <div style={{ maxWidth: '420', margin: '96px auto' }}>
            <h1>Hello, {profile.email}</h1>
            <p>User ID: {profile.id} </p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}