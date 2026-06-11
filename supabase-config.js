// supabase-config.js

// Your exact production credentials
const SUPABASE_URL = "https://aasmoabdareuqlogjsui.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc21vYWJkYXJldXFsb2dqc3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMzM0MjYsImV4cCI6MjA5NjcwOTQyNn0.rNvYeDCbQCbBNWtWAI7jhxQzH8pdI-M3-kjCEKhcLxs";

// Initialize Supabase
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Global Authentication State Manager
async function checkAuthState() {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    const authLink = document.getElementById('auth-link');
    
    if (session) {
        if (authLink) {
            // Displays user's name and a logout button
            authLink.innerHTML = `Welcome, ${session.user.user_metadata.full_name} <a href="#" onclick="signOut()" style="margin-left: 15px; color: #aaa; text-decoration: none;">(Logout)</a>`;
        }
        return session.user;
    } else {
        if (authLink) {
            // Displays Sign In link
            authLink.innerHTML = `<a href="login.html" style="color: #fcfbf8; text-decoration: none;">Sign In</a>`;
        }
        return null;
    }
}

// Global Sign Out Function
async function signOut() {
    await window.supabaseClient.auth.signOut();
    window.location.reload();
}
