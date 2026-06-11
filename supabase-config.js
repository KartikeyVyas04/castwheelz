// supabase-config.js

const SUPABASE_URL = "https://aasmoabdareuqlogjsui.supabase.co";
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc21vYWJkYXJldXFsb2dqc3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMzM0MjYsImV4cCI6MjA5NjcwOTQyNn0.rNvYeDCbQCbBNWtWAI7jhxQzH8pdI-M3-kjCEKhcLxs;

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function renderNavbar() {
    const navContainer = document.getElementById('global-nav');
    if (!navContainer) return; 

    // Detect if the user is currently on an Admin page
    const isAdminPage = window.location.pathname.includes('admin');

    // 1. COMMAND CENTER (ADMIN) NAVBAR
    if (isAdminPage) {
        navContainer.innerHTML = `
        <style>
            .cwz-admin-nav { position: fixed; top: 0; left: 0; width: 100%; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background: rgba(18, 18, 22, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 46, 110, 0.2); transition: all 0.4s ease; box-shadow: 0 5px 20px rgba(0,0,0,0.5);}
            .cwz-admin-nav:hover { border-bottom-color: rgba(255, 46, 110, 0.5); }
            .cwz-brand { display: flex; align-items: center; gap: 15px; text-decoration: none; }
            .cwz-mark-admin { width: 40px; height: 40px; border: 1px dashed var(--magenta); border-radius: 50%; display: grid; place-items: center; position: relative; box-shadow: 0 0 15px rgba(255, 46, 110, 0.2); transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
            .cwz-brand:hover .cwz-mark-admin { transform: rotate(180deg); box-shadow: 0 0 25px rgba(255, 46, 110, 0.5); }
            .cwz-mark-admin::before { content: ""; width: 12px; height: 12px; background: var(--magenta); border-radius: 2px;}
            .cwz-brand-text { display: flex; flex-direction: column; }
            .cwz-brand-text b { font-family: 'Anton', sans-serif; letter-spacing: 3px; font-size: 22px; color: var(--bone); line-height: 1; text-transform: uppercase; }
            .cwz-brand-text span { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--magenta); letter-spacing: 4px; display: block; margin-top: 4px; }
            .cwz-links { display: flex; align-items: center; gap: 30px; }
            .cwz-link { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted); text-decoration: none; text-transform: uppercase; letter-spacing: 2px; position: relative; padding: 5px 0; transition: color 0.3s; font-weight: bold;}
            .cwz-link:hover { color: var(--bone); }
            .cwz-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0%; height: 1px; background: var(--magenta); transition: width 0.3s ease; }
            .cwz-link:hover::after { width: 100%; }
            @media (max-width: 850px) { .cwz-admin-nav { padding: 15px 20px; flex-direction: column; gap: 20px; } .cwz-links { gap: 15px; flex-wrap: wrap; justify-content: center; } }
        </style>
        <nav class="cwz-admin-nav">
            <a href="admin-dashboard.html" class="cwz-brand">
                <div class="cwz-mark-admin"></div>
                <div class="cwz-brand-text">
                    <b>CastWheelz</b>
                    <span>COMMAND CENTER</span>
                </div>
            </a>
            <div class="cwz-links">
                <a href="admin-products.html" class="cwz-link">Arsenal Ctrl</a>
                <a href="admin-orders.html" class="cwz-link">Fulfillment</a>
                <a href="admin-access.html" class="cwz-link">Clearance</a>
                <span id="auth-link"></span>
            </div>
        </nav>
        `;
    } 
    // 2. PUBLIC STOREFRONT NAVBAR
    else {
        navContainer.innerHTML = `
        <style>
            .cwz-nav { position: fixed; top: 0; left: 0; width: 100%; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background: rgba(12, 12, 14, 0.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 122, 26, 0.15); transition: all 0.4s ease; }
            .cwz-nav:hover { background: rgba(12, 12, 14, 0.7); border-bottom-color: rgba(255, 122, 26, 0.4); }
            .cwz-brand { display: flex; align-items: center; gap: 15px; text-decoration: none; }
            .cwz-mark { width: 40px; height: 40px; border: 1px solid var(--amber); border-radius: 50%; display: grid; place-items: center; position: relative; box-shadow: 0 0 20px rgba(255, 122, 26, 0.2); transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
            .cwz-brand:hover .cwz-mark { transform: rotate(90deg) scale(1.1); box-shadow: 0 0 30px rgba(255, 122, 26, 0.6); }
            .cwz-mark::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--amber); }
            .cwz-brand-text { display: flex; flex-direction: column; }
            .cwz-brand-text b { font-family: 'Anton', sans-serif; letter-spacing: 3px; font-size: 22px; color: var(--bone); line-height: 1; text-transform: uppercase; }
            .cwz-brand-text span { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--cyan); letter-spacing: 4px; display: block; margin-top: 4px; }
            .cwz-links { display: flex; align-items: center; gap: 30px; }
            .cwz-link { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted); text-decoration: none; text-transform: uppercase; letter-spacing: 2px; position: relative; padding: 5px 0; transition: color 0.3s; }
            .cwz-link:hover { color: var(--bone); }
            .cwz-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0%; height: 1px; background: var(--amber); transition: width 0.3s ease; }
            .cwz-link:hover::after { width: 100%; }
            .cwz-cart-pill { background: rgba(31, 224, 208, 0.1); border: 1px solid rgba(31, 224, 208, 0.3); color: var(--cyan); padding: 8px 16px; border-radius: 100px; display: flex; align-items: center; gap: 10px; transition: all 0.3s; }
            .cwz-cart-pill:hover { background: var(--cyan); color: var(--asphalt); box-shadow: 0 0 20px rgba(31, 224, 208, 0.4); }
            .cwz-cart-count { font-weight: bold; background: var(--asphalt); color: var(--cyan); width: 20px; height: 20px; display: grid; place-items: center; border-radius: 50%; font-size: 10px; }
            .cwz-cart-pill:hover .cwz-cart-count { background: var(--asphalt); color: var(--cyan); }
            @media (max-width: 850px) { .cwz-nav { padding: 15px 20px; flex-direction: column; gap: 20px; } .cwz-links { gap: 15px; flex-wrap: wrap; justify-content: center; } }
        </style>
        <nav class="cwz-nav">
            <a href="index.html" class="cwz-brand">
                <div class="cwz-mark"></div>
                <div class="cwz-brand-text">
                    <b>CastWheelz</b>
                    <span>DIE-CAST ARSENAL</span>
                </div>
            </a>
            <div class="cwz-links">
                <a href="shop.html" class="cwz-link">Catalog</a>
                <a href="orders.html" class="cwz-link">Records</a>
                <span id="auth-link"></span>
                <a href="cart.html" class="cwz-link cwz-cart-pill" style="border-bottom:none;">
                    CARGO <div class="cwz-cart-count" id="cart-count">0</div>
                </a>
            </div>
        </nav>
        `;
        updateCartCount(); 
    }
}

async function checkAuthState() {
    renderNavbar(); 

    const { data: { session } } = await window.supabaseClient.auth.getSession();
    const authLink = document.getElementById('auth-link');
    const isAdminPage = window.location.pathname.includes('admin');
    
    if (session) {
        if (authLink) {
            // Style changes depending on context
            const nameColor = isAdminPage ? 'var(--bone)' : 'var(--bone)';
            const logoutColor = isAdminPage ? 'var(--amber)' : 'var(--magenta)';
            
            authLink.innerHTML = `<span style="color: ${nameColor}; font-family: 'JetBrains Mono'; font-size: 11px; text-transform: uppercase;">${session.user.user_metadata.full_name}</span> <a href="#" onclick="signOut()" style="margin-left: 8px; color: ${logoutColor}; text-decoration: none; font-size: 10px; letter-spacing: 1px; font-weight: bold;">[EXIT]</a>`;
        }
        return session.user;
    } else {
        if (authLink) {
            authLink.innerHTML = `<a href="login.html" class="cwz-link" style="color: var(--amber);">IDENTIFY</a>`;
        }
        return null;
    }
}

async function signOut() {
    await window.supabaseClient.auth.signOut();
    // Redirect to public homepage if logging out from an admin page to prevent access errors
    if(window.location.pathname.includes('admin')) {
        window.location.href = 'index.html';
    } else {
        window.location.reload();
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('castwheelz_cart')) || [];
    const countElement = document.getElementById('cart-count');
    if(countElement) countElement.innerText = cart.length;
}
