const LS = { users: "ju_users", session: "ju_session", events: "ju_events", chats: "ju_chats", lang: "ju_lang" };

const T = {
    en: {
        "welcome.tagline": "Meet. Play. Connect.",
        "welcome.getStarted": "Get Started",
        "common.back": "Back",
        "common.or": "or",
        "login.title": "Welcome Back",
        "login.subtitle": "Sign in to continue",
        "login.email": "Email",
        "login.password": "Password",
        "login.signIn": "Sign In",
        "login.noAccount": "Don't have an account?",
        "login.signUp": "Sign Up",
        "login.google": "Continue with Google",
        "signup.title": "Create Account",
        "signup.subtitle": "Join the community in seconds",
        "signup.name": "Name",
        "signup.email": "Email",
        "signup.password": "Password",
        "signup.create": "Create Account",
        "signup.haveAccount": "Already have an account?",
        "signup.signIn": "Sign In",
        "home.title": "Discover Events",
        "home.search": "Search events...",
        "filters.all": "All",
        "sport.football": "Football",
        "sport.basketball": "Basketball",
        "sport.tennis": "Tennis",
        "sport.volleyball": "Volleyball",
        "sport.padel": "Padel",
        "sport.running": "Running",
        "eventDetails.description": "Description",
        "eventDetails.participants": "Participants",
        "eventDetails.joinEvent": "Join Event",
        "eventDetails.chat": "Chat",
        "createEvent.title": "Create Event",
        "createEvent.sport": "Sport",
        "createEvent.eventName": "Event Name",
        "createEvent.location": "Location",
        "createEvent.datetime": "Date & Time",
        "createEvent.maxPlayers": "Max Players",
        "createEvent.level": "Skill Level",
        "createEvent.description": "Description",
        "createEvent.descPh": "Tell participants about your event...",
        "createEvent.publish": "Publish Event",
        "level.beginner": "Beginner",
        "level.intermediate": "Intermediate",
        "level.advanced": "Advanced",
        "chat.title": "Event Chat",
        "chat.typeMessage": "Type a message...",
        "profile.eventsJoined": "Events Joined",
        "profile.eventsHosted": "Events Hosted",
        "profile.rating": "Rating",
        "profile.editTitle": "Edit Profile",
        "profile.save": "Save",
        "profile.logout": "Logout",
        "sidebar.sub": "Sports meetups in Alicante",
        "sidebar.tip": "Install as an app from your browser menu",
        "nav.home": "Home",
        "nav.create": "Create",
        "nav.profile": "Profile",
        "msg.needLogin": "Please sign in first.",
        "msg.wrong": "Wrong email or password.",
        "msg.emailUsed": "Email already used.",
        "msg.created": "Account created!",
        "msg.welcome": "Welcome",
        "msg.loggedOut": "Logged out.",
        "msg.full": "Event is full.",
        "msg.joined": "Joined!",
        "msg.left": "You left the event.",
        "msg.published": "Event published!",
        "msg.profileSaved": "Profile updated!",
        "msg.emptyName": "Name cannot be empty.",
        "msg.noEventsTitle": "No events found",
        "msg.noEventsSub": "Try another filter or search.",
        "msg.members": "members",
        "msg.you": "You",
        "btn.leave": "Leave Event"
    },
    es: {
        "welcome.tagline": "Conoce. Juega. Conecta.",
        "welcome.getStarted": "Empezar",
        "common.back": "Volver",
        "common.or": "o",
        "login.title": "Bienvenido de Nuevo",
        "login.subtitle": "Inicia sesión para continuar",
        "login.email": "Correo Electrónico",
        "login.password": "Contraseña",
        "login.signIn": "Iniciar Sesión",
        "login.noAccount": "¿No tienes una cuenta?",
        "login.signUp": "Registrarse",
        "login.google": "Continuar con Google",
        "signup.title": "Crear Cuenta",
        "signup.subtitle": "Únete en segundos",
        "signup.name": "Nombre",
        "signup.email": "Correo",
        "signup.password": "Contraseña",
        "signup.create": "Crear Cuenta",
        "signup.haveAccount": "¿Ya tienes cuenta?",
        "signup.signIn": "Iniciar sesión",
        "home.title": "Descubre Eventos",
        "home.search": "Buscar eventos...",
        "filters.all": "Todo",
        "sport.football": "Fútbol",
        "sport.basketball": "Baloncesto",
        "sport.tennis": "Tenis",
        "sport.volleyball": "Voleibol",
        "sport.padel": "Pádel",
        "sport.running": "Running",
        "eventDetails.description": "Descripción",
        "eventDetails.participants": "Participantes",
        "eventDetails.joinEvent": "Unirse al Evento",
        "eventDetails.chat": "Chat",
        "createEvent.title": "Crear Evento",
        "createEvent.sport": "Deporte",
        "createEvent.eventName": "Nombre del Evento",
        "createEvent.location": "Ubicación",
        "createEvent.datetime": "Fecha y Hora",
        "createEvent.maxPlayers": "Jugadores Máximos",
        "createEvent.level": "Nivel de Habilidad",
        "createEvent.description": "Descripción",
        "createEvent.descPh": "Cuenta a los participantes de qué va el evento...",
        "createEvent.publish": "Publicar Evento",
        "level.beginner": "Principiante",
        "level.intermediate": "Intermedio",
        "level.advanced": "Avanzado",
        "chat.title": "Chat del Evento",
        "chat.typeMessage": "Escribe un mensaje...",
        "profile.eventsJoined": "Eventos Unidos",
        "profile.eventsHosted": "Eventos Organizados",
        "profile.rating": "Valoración",
        "profile.editTitle": "Editar Perfil",
        "profile.save": "Guardar",
        "profile.logout": "Cerrar Sesión",
        "sidebar.sub": "Quedadas deportivas en Alicante",
        "sidebar.tip": "Instala como app desde el menú del navegador",
        "nav.home": "Inicio",
        "nav.create": "Crear",
        "nav.profile": "Perfil",
        "msg.needLogin": "Inicia sesión primero.",
        "msg.wrong": "Correo o contraseña incorrectos.",
        "msg.emailUsed": "Este correo ya existe.",
        "msg.created": "¡Cuenta creada!",
        "msg.welcome": "Bienvenido",
        "msg.loggedOut": "Sesión cerrada.",
        "msg.full": "El evento está completo.",
        "msg.joined": "¡Te has unido!",
        "msg.left": "Has salido del evento.",
        "msg.published": "¡Evento publicado!",
        "msg.profileSaved": "¡Perfil actualizado!",
        "msg.emptyName": "El nombre no puede estar vacío.",
        "msg.noEventsTitle": "No hay eventos",
        "msg.noEventsSub": "Prueba otro filtro o búsqueda.",
        "msg.members": "miembros",
        "msg.you": "Tú",
        "btn.leave": "Salir del evento"
    }
};

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

let lang = localStorage.getItem(LS.lang) || "en";
let filter = "all";
let search = "";
let currentEventId = null;

function read(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
function write(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
function uid(p = "id") { return `${p}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`; }
function esc(s) { return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }

function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2400);
}

function t(key) { return (T[lang] && T[lang][key]) ? T[lang][key] : (T.en[key] || key); }

function applyTranslations() {
    $$("[data-translate]").forEach(el => {
        const k = el.getAttribute("data-translate");
        el.textContent = t(k);
    });
    $$("[data-translate-placeholder]").forEach(el => {
        const k = el.getAttribute("data-translate-placeholder");
        el.placeholder = t(k);
    });
    $("#langToggle").textContent = lang === "en" ? "ES" : "EN";
}

function showScreen(id) {
    const protectedScreens = new Set(["homeScreen", "eventDetailsScreen", "createEventScreen", "chatScreen", "profileScreen"]);
    if (protectedScreens.has(id) && !getUser()) {
        id = "loginScreen";
        toast(t("msg.needLogin"));
    }
    $$(".screen").forEach(s => s.classList.remove("active"));
    const el = document.getElementById(id);
    if (el) el.classList.add("active");

    if (id === "homeScreen") renderEvents();
    if (id === "profileScreen") renderProfile();
    if (id === "eventDetailsScreen" && currentEventId) renderDetails(currentEventId);
    if (id === "chatScreen" && currentEventId) renderChat(currentEventId);

    applyTranslations();
}

function getSession() { return read(LS.session, null); }
function setSession(userId) { write(LS.session, { userId }); }
function clearSession() { localStorage.removeItem(LS.session); }
function getUser() {
    const s = getSession();
    if (!s?.userId) return null;
    const users = read(LS.users, []);
    return users.find(u => u.id === s.userId) || null;
}

function seed() {
    const users = read(LS.users, []);
    const events = read(LS.events, []);
    if (!users.length) {
        write(LS.users, [{ id: uid("user"), name: "Alex Johnson", email: "alex@joinup.com", password: "123456" }]);
    }
    if (!events.length) {
        const u0 = read(LS.users, [])[0]?.id;
        const now = new Date();
        const tomorrow = new Date(Date.now() + 86400000);
        const e = [
            {
                id: uid("event"),
                sport: "football",
                title: { en: "5v5 Football Match", es: "Partido 5v5" },
                location: "Estadio Municipal",
                datetime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0).toISOString(),
                maxPlayers: 10,
                level: { en: "Intermediate", es: "Intermedio" },
                description: { en: "Friendly match. All welcome!", es: "Partido amistoso. ¡Todos bienvenidos!" },
                image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800",
                hostId: u0,
                participants: u0 ? [u0] : []
            },
            {
                id: uid("event"),
                sport: "volleyball",
                title: { en: "Beach Volleyball", es: "Voleibol Playa" },
                location: "Playa de San Juan",
                datetime: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0).toISOString(),
                maxPlayers: 8,
                level: { en: "Beginner", es: "Principiante" },
                description: { en: "Casual session at the beach.", es: "Sesión casual en la playa." },
                image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800",
                hostId: u0,
                participants: u0 ? [u0] : []
            }
        ];
        write(LS.events, e);
    }
    if (!localStorage.getItem(LS.chats)) write(LS.chats, {});
}

function fmt(iso) {
    const d = new Date(iso);
    const locale = lang === "en" ? "en-US" : "es-ES";
    return d.toLocaleString(locale, { weekday: "short", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function icon(s) {
    return ({ football: "⚽", basketball: "🏀", tennis: "🎾", volleyball: "🏐", padel: "🎾", running: "🏃" })[s] || "🎯";
}
function events() { return read(LS.events, []); }
function saveEvents(v) { write(LS.events, v); }

function renderEvents() {
    const c = $("#eventsContainer");
    let list = events();

    if (filter !== "all") list = list.filter(e => e.sport === filter);
    if (search.trim()) {
        const q = search.trim().toLowerCase();
        list = list.filter(e => {
            const title = (e.title?.[lang] || e.title?.en || "").toLowerCase();
            const loc = (e.location || "").toLowerCase();
            return title.includes(q) || loc.includes(q);
        });
    }

    list.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

    if (!list.length) {
        c.innerHTML = `<div class="card"><h3 class="title-sm">${t("msg.noEventsTitle")}</h3><p class="muted">${t("msg.noEventsSub")}</p></div>`;
        return;
    }

    c.innerHTML = list.map(ev => {
        const cnt = ev.participants?.length || 0;
        const lvl = ev.level?.[lang] || ev.level?.en || "—";
        return `
      <article class="event" data-eid="${ev.id}">
        <img src="${esc(ev.image)}" alt="${esc(ev.title?.[lang] || ev.title?.en || "Event")}" loading="lazy">
        <div class="event-body">
          <div class="event-top">
            <div class="event-title">${esc(ev.title?.[lang] || ev.title?.en || "Event")}</div>
            <div class="event-ico">${icon(ev.sport)}</div>
          </div>
          <div class="event-info">
            <div class="event-row"><span>📍</span><span>${esc(ev.location)}</span></div>
            <div class="event-row"><span>🕐</span><span>${esc(fmt(ev.datetime))}</span></div>
          </div>
          <div class="event-foot">
            <span class="badge">${esc(lvl)}</span>
            <span class="small">👥 ${cnt}/${ev.maxPlayers}</span>
          </div>
        </div>
      </article>
    `;
    }).join("");

    $$(".event").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-eid");
            openDetails(id);
        });
    });
}

function openDetails(id) {
    currentEventId = id;
    renderDetails(id);
    showScreen("eventDetailsScreen");
}

function renderDetails(id) {
    const ev = events().find(e => e.id === id);
    if (!ev) return;

    $("#detailImage").src = ev.image;
    $("#detailTitle").textContent = ev.title?.[lang] || ev.title?.en || "Event";
    $("#detailLevel").textContent = ev.level?.[lang] || ev.level?.en || "—";
    $("#detailLocation").textContent = ev.location;
    $("#detailTime").textContent = fmt(ev.datetime);

    const cnt = ev.participants?.length || 0;
    $("#detailPlayers").textContent = `${cnt}/${ev.maxPlayers}`;
    $("#detailDescription").textContent = ev.description?.[lang] || ev.description?.en || "";

    const users = read(LS.users, []);
    const p = ev.participants || [];
    $("#participantsList").innerHTML = p.length
        ? p.map(pid => {
            const u = users.find(x => x.id === pid);
            return `<span class="pill-user">👤 ${esc(u?.name || "User")}</span>`;
        }).join("")
        : `<span class="pill-user">${lang === "en" ? "No participants yet." : "Aún no hay participantes."}</span>`;

    const user = getUser();
    if (!user) return;

    const joined = (ev.participants || []).includes(user.id);
    $("#joinBtnText").textContent = joined ? t("btn.leave") : t("eventDetails.joinEvent");
}

function toggleJoin() {
    const user = getUser();
    if (!user || !currentEventId) return;

    const list = events();
    const idx = list.findIndex(e => e.id === currentEventId);
    if (idx < 0) return;

    const ev = list[idx];
    ev.participants = ev.participants || [];

    const joined = ev.participants.includes(user.id);
    if (!joined) {
        if (ev.participants.length >= ev.maxPlayers) {
            toast(t("msg.full"));
            return;
        }
        ev.participants.push(user.id);
        toast(t("msg.joined"));
    } else {
        ev.participants = ev.participants.filter(id => id !== user.id);
        toast(t("msg.left"));
    }

    list[idx] = ev;
    saveEvents(list);
    renderDetails(currentEventId);
}

function openChat() {
    if (!currentEventId) return;
    renderChat(currentEventId);
    showScreen("chatScreen");
}

function chats() { return read(LS.chats, {}); }
function saveChats(v) { write(LS.chats, v); }

function renderChat(eventId) {
    const ev = events().find(e => e.id === eventId);
    const members = ev?.participants?.length || 0;
    $("#chatMembers").textContent = `${members} ${t("msg.members")}`;

    const c = $("#chatMessages");
    const user = getUser();
    const users = read(LS.users, []);
    const all = chats();
    const msgs = all[eventId] || [];

    c.innerHTML = msgs.map(m => {
        const u = users.find(x => x.id === m.userId);
        const name = m.userId === user?.id ? t("msg.you") : (u?.name || "User");
        const time = new Date(m.ts).toLocaleTimeString(lang === "en" ? "en-US" : "es-ES", { hour: "2-digit", minute: "2-digit" });
        const me = m.userId === user?.id;
        return `
      <div class="msg ${me ? "me" : ""}">
        ${me ? "" : `<div class="msg-ava">👤</div>`}
        <div class="msg-content">
          <div class="msg-meta"><span>${esc(name)}</span><span>${esc(time)}</span></div>
          <div class="msg-bubble">${esc(m.text)}</div>
        </div>
      </div>
    `;
    }).join("");

    c.scrollTop = c.scrollHeight;
}

function sendMessage() {
    const user = getUser();
    if (!user || !currentEventId) return;
    const input = $("#chatInput");
    const text = (input.value || "").trim();
    if (!text) return;

    const all = chats();
    all[currentEventId] = all[currentEventId] || [];
    all[currentEventId].push({ id: uid("msg"), userId: user.id, text, ts: Date.now() });
    saveChats(all);

    input.value = "";
    renderChat(currentEventId);
}

function randomImage(s) {
    const map = {
        football: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800",
        basketball: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        tennis: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800",
        volleyball: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800",
        padel: "https://images.unsplash.com/photo-1612534847738-b362f27a368d?w=800",
        running: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800"
    };
    return map[s] || "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800";
}

function openCreate() {
    const user = getUser();
    if (!user) { showScreen("loginScreen"); return; }

    const dt = new Date(Date.now() + 2 * 3600 * 1000);
    const pad = n => String(n).padStart(2, "0");
    const v = `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
    $("#createDatetime").value = v;

    showScreen("createEventScreen");
}

function handleCreate(e) {
    e.preventDefault();
    const user = getUser();
    if (!user) return;

    const sport = $("#createSport").value;
    const title = $("#createTitle").value.trim();
    const location = $("#createLocation").value.trim();
    const datetimeLocal = $("#createDatetime").value;
    const maxPlayers = Number($("#createMaxPlayers").value);
    const level = $("#createLevel").value;
    const desc = $("#createDescription").value.trim();

    const ev = {
        id: uid("event"),
        sport,
        title: { en: title, es: title },
        location,
        datetime: new Date(datetimeLocal).toISOString(),
        maxPlayers,
        level: { en: level, es: (level === "Beginner" ? "Principiante" : level === "Intermediate" ? "Intermedio" : level === "Advanced" ? "Avanzado" : level) },
        description: { en: desc, es: desc },
        image: randomImage(sport),
        hostId: user.id,
        participants: [user.id]
    };

    const list = events();
    list.push(ev);
    saveEvents(list);

    $("#createEventForm").reset();
    toast(t("msg.published"));
    showScreen("homeScreen");
}

function renderProfile() {
    const user = getUser();
    if (!user) return;

    $("#profileName").textContent = user.name;
    $("#editName").value = user.name;

    const list = events();
    const joined = list.filter(e => (e.participants || []).includes(user.id)).length;
    const hosted = list.filter(e => e.hostId === user.id).length;

    $("#statJoined").textContent = joined;
    $("#statHosted").textContent = hosted;
}

function saveProfile() {
    const user = getUser();
    if (!user) return;
    const newName = $("#editName").value.trim();
    if (!newName) { toast(t("msg.emptyName")); return; }

    const users = read(LS.users, []);
    const idx = users.findIndex(u => u.id === user.id);
    if (idx < 0) return;
    users[idx].name = newName;
    write(LS.users, users);

    toast(t("msg.profileSaved"));
    renderProfile();
}

function login(e) {
    e.preventDefault();
    const email = $("#loginEmail").value.trim().toLowerCase();
    const password = $("#loginPassword").value;

    const users = read(LS.users, []);
    const u = users.find(x => x.email.toLowerCase() === email && x.password === password);
    if (!u) { toast(t("msg.wrong")); return; }

    setSession(u.id);
    toast(`${t("msg.welcome")}, ${u.name}!`);
    showScreen("homeScreen");
}

function signup(e) {
    e.preventDefault();
    const name = $("#signupName").value.trim();
    const email = $("#signupEmail").value.trim().toLowerCase();
    const password = $("#signupPassword").value;

    const users = read(LS.users, []);
    if (users.some(u => u.email.toLowerCase() === email)) { toast(t("msg.emailUsed")); return; }

    const u = { id: uid("user"), name, email, password };
    users.push(u);
    write(LS.users, users);
    setSession(u.id);

    toast(t("msg.created"));
    showScreen("homeScreen");
}

function googleLogin() {
    const users = read(LS.users, []);
    const email = `google_${Math.random().toString(16).slice(2)}@joinup.com`;
    const u = { id: uid("user"), name: "Google User", email, password: uid("pw") };
    users.push(u);
    write(LS.users, users);
    setSession(u.id);
    toast("OK");
    showScreen("homeScreen");
}

function logout() {
    clearSession();
    currentEventId = null;
    toast(t("msg.loggedOut"));
    showScreen("welcomeScreen");
}

function toggleLanguage() {
    lang = lang === "en" ? "es" : "en";
    localStorage.setItem(LS.lang, lang);
    applyTranslations();
    if ($("#homeScreen").classList.contains("active")) renderEvents();
    if ($("#eventDetailsScreen").classList.contains("active") && currentEventId) renderDetails(currentEventId);
    if ($("#chatScreen").classList.contains("active") && currentEventId) renderChat(currentEventId);
}

document.addEventListener("DOMContentLoaded", () => {
    seed();

    const savedLang = localStorage.getItem(LS.lang);
    if (savedLang) lang = savedLang;
    applyTranslations();

    $("#langBtn").addEventListener("click", toggleLanguage);

    $$("[data-go]").forEach(el => {
        el.addEventListener("click", (ev) => {
            const to = el.getAttribute("data-go");
            if (el.tagName === "A") ev.preventDefault();
            if (to === "createEventScreen") openCreate();
            else showScreen(to);
        });
    });

    $$("[data-nav]").forEach(btn => {
        btn.addEventListener("click", () => {
            const to = btn.getAttribute("data-nav");
            if (to === "createEventScreen") openCreate();
            else showScreen(to);
        });
    });

    $("#logoutBtn").addEventListener("click", logout);
    $("#logoutBtnSide").addEventListener("click", logout);
    $("#saveProfileBtn").addEventListener("click", saveProfile);

    $("#loginForm").addEventListener("submit", login);
    $("#signupForm").addEventListener("submit", signup);
    $("#createEventForm").addEventListener("submit", handleCreate);

    $("#googleBtn").addEventListener("click", googleLogin);

    $("#searchBtn").addEventListener("click", () => {
        search = $("#searchInput").value || "";
        renderEvents();
    });
    $("#searchInput").addEventListener("input", () => {
        search = $("#searchInput").value || "";
        renderEvents();
    });

    $("#filters").addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        filter = btn.getAttribute("data-filter") || "all";
        $$(".chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        renderEvents();
    });

    $("#joinLeaveBtn").addEventListener("click", toggleJoin);
    $("#chatBtn").addEventListener("click", openChat);
    $("#sendBtn").addEventListener("click", sendMessage);
    $("#chatInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); sendMessage(); }
    });

    if (getUser()) showScreen("homeScreen");
});
