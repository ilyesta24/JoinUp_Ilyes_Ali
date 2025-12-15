// --- Translations ---
const translations = {
    en: {
        "onboarding.title": "Meet new people through sports",
        "onboarding.subtitle": "Find players near you, join games, and never play alone again.",
        "onboarding.getStarted": "Get Started",
        "onboarding.loginInstead": "I already have an account",

        "login.title": "Welcome back",
        "login.subtitle": "Login to keep playing",
        "login.email": "Email",
        "login.password": "Password",
        "login.signIn": "Sign In",
        "login.noAccount": "Don't have an account?",
        "login.signUp": "Sign Up",

        "home.heading": "Find a game today",
        "home.subheading": "Based in Alicante, Spain",
        "home.today": "Today near you",

        "filters.all": "All",

        "profile.logout": "Logout"
    },
    es: {
        "onboarding.title": "Conoce gente nueva haciendo deporte",
        "onboarding.subtitle": "Encuentra jugadores cerca, únete a partidos y no juegues solo.",
        "onboarding.getStarted": "Empezar",
        "onboarding.loginInstead": "Ya tengo una cuenta",

        "login.title": "Bienvenido de nuevo",
        "login.subtitle": "Inicia sesión para seguir jugando",
        "login.email": "Correo electrónico",
        "login.password": "Contraseña",
        "login.signIn": "Entrar",
        "login.noAccount": "¿No tienes cuenta?",
        "login.signUp": "Regístrate",

        "home.heading": "Encuentra un partido hoy",
        "home.subheading": "Con base en Alicante, España",
        "home.today": "Hoy cerca de ti",

        "filters.all": "Todo",

        "profile.logout": "Cerrar sesión"
    }
};

let currentLanguage = "en";

// --- Simple Auth (front-end only) ---
let currentUser = null;

function saveUserToStorage(user) {
    localStorage.setItem("joinupUser", JSON.stringify(user));
}

function loadUserFromStorage() {
    const raw = localStorage.getItem("joinupUser");
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function updateProfileScreen() {
    if (!currentUser) return;
    const nameEl = document.querySelector(".profile-name");
    const emailEl = document.querySelector(".profile-email");
    const avatarInitial = document.getElementById("avatarInitial");

    if (nameEl) nameEl.textContent = currentUser.username;
    if (emailEl) emailEl.textContent = currentUser.email;
    if (avatarInitial) avatarInitial.textContent = currentUser.username.charAt(0).toUpperCase();
}

// --- Screens ---
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add("active");
    }
}

function goBackFromChat() {
    showScreen("eventDetailScreen");
}

// --- Language handling ---
function applyTranslations() {
    const dict = translations[currentLanguage] || translations.en;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    const select = document.getElementById("languageSelect");
    if (select && select.value !== lang) {
        select.value = lang;
    }
    applyTranslations();
}

// --- Events data ---
const events = [
    {
        id: 1,
        title: "5v5 Football at Juan XXIII",
        sport: "football",
        location: "Campo municipal Juan XXIII",
        time: "19:00",
        level: "Intermediate",
        spots: 3,
        description: "Friendly 5v5 match. Mixed level, everyone welcome. Bring dark and light t-shirt.",
        distance: "1.2 km"
    },
    {
        id: 2,
        title: "Basket 3v3 in Plaza Mar",
        sport: "basketball",
        location: "Cancha exterior Plaza Mar 2",
        time: "18:30",
        level: "Beginner",
        spots: 2,
        description: "3v3 half-court, chill game. Good for practice and shooting.",
        distance: "2.0 km"
    },
    {
        id: 3,
        title: "Evening Tennis Singles",
        sport: "tennis",
        location: "Club de Tenis Alicante",
        time: "20:15",
        level: "Advanced",
        spots: 1,
        description: "Looking for someone to rally and play a tie-break set. Clay court.",
        distance: "4.5 km"
    },
    {
        id: 4,
        title: "Mixed Volleyball at the Beach",
        sport: "volleyball",
        location: "Playa del Postiguet",
        time: "17:00",
        level: "All levels",
        spots: 4,
        description: "Beach volleyball in the afternoon. Very social, perfect to meet people.",
        distance: "0.8 km"
    }
];

let currentFilter = "all";
let currentEventId = null;

// --- Render events ---
function loadEvents(filter = "all") {
    const list = document.getElementById("eventsList");
    if (!list) return;
    list.innerHTML = "";

    const filtered = events.filter(e => filter === "all" || e.sport === filter);

    if (filtered.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = currentLanguage === "es"
            ? "No hay eventos para este deporte todavía."
            : "No events for this sport yet.";
        empty.style.color = "#a2a4c5";
        empty.style.fontSize = "13px";
        list.appendChild(empty);
        return;
    }

    filtered.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.onclick = () => viewEvent(event.id);

        const title = document.createElement("h4");
        title.className = "event-title";
        title.textContent = event.title;

        const meta = document.createElement("div");
        meta.className = "event-meta";
        meta.innerHTML = `
            <span>📍 ${event.location}</span>
            <span>⏰ ${event.time}</span>
            <span>⭐ ${event.level}</span>
        `;

        const pill = document.createElement("div");
        pill.className = "event-pill";
        pill.textContent = `${event.spots} spots • ${event.distance}`;

        card.appendChild(title);
        card.appendChild(meta);
        card.appendChild(pill);

        list.appendChild(card);
    });
}

function filterSport(sport, element) {
    currentFilter = sport;

    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.classList.remove("active");
    });
    if (element) element.classList.add("active");

    loadEvents(sport);
}

// --- Event detail & chat ---
function viewEvent(id) {
    const ev = events.find(e => e.id === id);
    if (!ev) return;

    currentEventId = id;

    const container = document.getElementById("eventDetailContent");
    if (!container) return;

    container.innerHTML = `
        <div class="event-detail-header">
            <h2 class="event-detail-title">${ev.title}</h2>
            <p class="event-detail-meta">
                📍 ${ev.location}<br>
                ⏰ ${ev.time} · ⭐ ${ev.level}<br>
                ${ev.spots} spots · ${ev.distance}
            </p>
        </div>
        <div class="event-detail-tags">
            <span class="event-detail-tag">${ev.sport}</span>
            <span class="event-detail-tag">${ev.level}</span>
        </div>
        <p class="event-detail-description">${ev.description}</p>
        <button class="btn-primary btn-full" onclick="openChatForEvent(${ev.id})">
            ${currentLanguage === "es" ? "Unirme al chat" : "Join chat"}
        </button>
    `;

    showScreen("eventDetailScreen");
}

// Simple sample chat messages per event
const sampleChat = {
    1: [
        { author: "Alex", me: false, text: "We start at 19:10 sharp, ok?" },
        { author: "You", me: true, text: "Perfect, I’ll be there 10 min earlier." }
    ],
    2: [
        { author: "María", me: false, text: "Anyone bringing an extra ball?" }
    ],
    3: [
        { author: "Diego", me: false, text: "Clay is a bit slow today but nice." }
    ],
    4: [
        { author: "Lina", me: false, text: "I’m next to the red umbrella 😄" }
    ]
};

function openChatForEvent(id) {
    currentEventId = id;
    const ev = events.find(e => e.id === id);
    const titleEl = document.getElementById("chatEventTitle");
    if (titleEl && ev) {
        titleEl.textContent = ev.title;
    }
    renderChatMessages();
    showScreen("chatScreen");
}

function renderChatMessages() {
    const container = document.getElementById("chatMessages");
    if (!container) return;
    container.innerHTML = "";

    const msgs = sampleChat[currentEventId] || [];

    msgs.forEach(msg => {
        const bubble = document.createElement("div");
        bubble.className = "chat-bubble " + (msg.me ? "me" : "other");

        const author = document.createElement("div");
        author.className = "chat-bubble-author";
        author.textContent = msg.me ? (currentUser?.username || "You") : msg.author;

        const content = document.createElement("div");
        content.textContent = msg.text;

        bubble.appendChild(author);
        bubble.appendChild(content);
        container.appendChild(bubble);
    });

    container.scrollTop = container.scrollHeight;
}

function handleChatSend(e) {
    e.preventDefault();
    const input = document.getElementById("chatInput");
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    if (!sampleChat[currentEventId]) sampleChat[currentEventId] = [];
    sampleChat[currentEventId].push({
        author: "You",
        me: true,
        text
    });

    input.value = "";
    renderChatMessages();
}

// --- Auth handlers ---
function handleSignup(e) {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;
    const password2 = document.getElementById("signupPassword2").value;

    if (!username || !email || !password || !password2) {
        alert(
            currentLanguage === "en"
                ? "Please fill in all fields"
                : "Por favor, rellena todos los campos"
        );
        return;
    }

    if (password.length < 6) {
        alert(
            currentLanguage === "en"
                ? "Password must be at least 6 characters"
                : "La contraseña debe tener al menos 6 caracteres"
        );
        return;
    }

    if (password !== password2) {
        alert(
            currentLanguage === "en"
                ? "Passwords do not match"
                : "Las contraseñas no coinciden"
        );
        return;
    }

    const user = { username, email, password };
    saveUserToStorage(user);
    currentUser = user;
    updateProfileScreen();

    alert(
        currentLanguage === "en"
            ? "Account created! You are now logged in."
            : "Cuenta creada. Has iniciado sesión."
    );

    loadEvents(currentFilter);
    showScreen("homeScreen");
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const storedUser = loadUserFromStorage();

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert(
            currentLanguage === "en"
                ? "Incorrect email or password"
                : "Email o contraseña incorrectos"
        );
        return;
    }

    currentUser = storedUser;
    updateProfileScreen();
    loadEvents(currentFilter);
    showScreen("homeScreen");
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("joinupUser");

    const loginForm = document.getElementById("loginForm");
    if (loginForm) loginForm.reset();

    showScreen("loginScreen");
}

// --- Init ---
window.addEventListener("DOMContentLoaded", () => {
    // Language selector initial
    const select = document.getElementById("languageSelect");
    if (select) {
        select.value = currentLanguage;
    }

    applyTranslations();

    const stored = loadUserFromStorage();
    if (stored) {
        currentUser = stored;
        updateProfileScreen();
        loadEvents(currentFilter);
        showScreen("homeScreen");
    } else {
        loadEvents(currentFilter);
        showScreen("onboardingScreen");
    }
});
