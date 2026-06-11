// js/supabase-config.js

const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co"; // Replace with your URL
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY"; // Replace with your Key

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Global Authentication State Manager
async function checkAuthState() {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    const authLink = document.getElementById('auth-link');
    
    if (session) {
        // User is logged in
        if (authLink) {
            authLink.innerHTML = `Welcome, ${session.user.user_metadata.full_name} <a href="#" onclick="signOut()" style="margin-left: 15px; color: #aaa;">(Logout)</a>`;
        }
        return session.user;
    } else {
        // User is logged out
        if (authLink) {
            authLink.innerHTML = `<a href="login.html">Sign In</a>`;
        }
        return null;
    }
}

async function signOut() {
    await window.supabaseClient.auth.signOut();
    window.location.reload();
}
