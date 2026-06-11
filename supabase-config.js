// supabase-config.js

const SUPABASE_URL = "https://aasmoabdareuqlogjsui.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc21vYWJkYXJldXFsb2dqc3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMzM0MjYsImV4cCI6MjA5NjcwOTQyNn0.rNvYeDCbQCbBNWtWAI7jhxQzH8pdI-M3-kjCEKhcLxs";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1. The Universal Navbar Injector
function renderNavbar() {
    const navContainer = document.getElementById('global-nav');
    if (!navContainer) return; // If the page doesn't need a nav, do nothing

    navContainer.innerHTML = `
    <header class="topbar">
        <a href="index.html" class="brand">
            <div class="mark"></div>
            <div><b>CastWheelz</b><span>DIE-CAST RETAILER</span></div>
        </a>
        <div class="nav-group">
            <a href="shop.html" class="nav-link">ARSENAL</a>
            <a href="orders.html" class="nav-link">RECORDS</a>
            <span id="auth-link"></span>
            <a href="cart.html" class="nav-link cart-link">CART [<span id="cart-count">0</span>]</a>
        </div>
    </header>
    `;
}

// 2. Global Authentication State
async function checkAuthState() {
    renderNavbar(); // Draw the navbar first before looking for the auth-link ID

    const { data: { session } } = await window.supabaseClient.auth.getSession();
    const authLink = document.getElementById('auth-link');
    
    if (session) {
        if (authLink) {
            authLink.innerHTML = `<span style="color: var(--cyan); font-family: 'JetBrains Mono'; font-size: 10px; text-transform: uppercase;">${session.user.user_metadata.full_name}</span> <a href="#" onclick="signOut()" style="margin-left: 10px; color: var(--muted); text-decoration: none; font-size: 10px;">[LOGOUT]</a>`;
        }
        return session.user;
    } else {
        if (authLink) {
            authLink.innerHTML = `<a href="login.html" style="color: var(--amber); text-decoration: none; font-family: 'JetBrains Mono'; font-size: 10px; border: 1px solid var(--amber); padding: 5px 10px; border-radius: 100px;">AUTH / LOGIN</a>`;
        }
        return null;
    }
}

async function signOut() {
    await window.supabaseClient.auth.signOut();
    window.location.reload();
}
