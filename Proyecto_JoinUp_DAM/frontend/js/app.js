let currentLanguage = 'en';

const translations = {
    en: {
        'welcome.tagline': 'Meet. Play. Connect.',
        'welcome.getStarted': 'Get Started',
        'login.title': 'Welcome Back',
        'login.subtitle': 'Sign in to continue',
        'login.email': 'Email',
        'login.password': 'Password',
        'login.signIn': 'Sign In',
        'login.noAccount': "Don't have an account?",
        'login.signUp': 'Sign Up',
        'home.title': 'Discover Events',
        'home.search': 'Search events...',
        'eventDetails.description': 'Description',
        'eventDetails.participants': 'Participants',
        'eventDetails.joinEvent': 'Join Event',
        'eventDetails.chat': 'Chat',
        'createEvent.title': 'Create Event',
        'createEvent.sport': 'Sport',
        'createEvent.eventName': 'Event Name',
        'createEvent.location': 'Location',
        'createEvent.datetime': 'Date & Time',
        'createEvent.maxPlayers': 'Max Players',
        'createEvent.level': 'Skill Level',
        'createEvent.description': 'Description',
        'createEvent.publish': 'Publish Event',
        'level.beginner': 'Beginner',
        'level.intermediate': 'Intermediate',
        'level.advanced': 'Advanced',
        'chat.title': 'Event Chat',
        'chat.typeMessage': 'Type a message...',
        'profile.eventsJoined': 'Events Joined',
        'profile.eventsHosted': 'Events Hosted',
        'profile.rating': 'Rating',
        'profile.achievements': 'Achievements',
        'profile.favoriteSports': 'Favorite Sports',
        'profile.editProfile': 'Edit Profile',
        'profile.logout': 'Logout'
    },
    es: {
        'welcome.tagline': 'Conoce. Juega. Conecta.',
        'welcome.getStarted': 'Empezar',
        'login.title': 'Bienvenido de Nuevo',
        'login.subtitle': 'Inicia sesión para continuar',
        'login.email': 'Correo Electrónico',
        'login.password': 'Contraseña',
        'login.signIn': 'Iniciar Sesión',
        'login.noAccount': '¿No tienes una cuenta?',
        'login.signUp': 'Registrarse',
        'home.title': 'Descubre Eventos',
        'home.search': 'Buscar eventos...',
        'eventDetails.description': 'Descripción',
        'eventDetails.participants': 'Participantes',
        'eventDetails.joinEvent': 'Unirse al Evento',
        'eventDetails.chat': 'Chat',
        'createEvent.title': 'Crear Evento',
        'createEvent.sport': 'Deporte',
        'createEvent.eventName': 'Nombre del Evento',
        'createEvent.location': 'Ubicación',
        'createEvent.datetime': 'Fecha y Hora',
        'createEvent.maxPlayers': 'Jugadores Máximos',
        'createEvent.level': 'Nivel de Habilidad',
        'createEvent.description': 'Descripción',
        'createEvent.publish': 'Publicar Evento',
        'level.beginner': 'Principiante',
        'level.intermediate': 'Intermedio',
        'level.advanced': 'Avanzado',
        'chat.title': 'Chat del Evento',
        'chat.typeMessage': 'Escribe un mensaje...',
        'profile.eventsJoined': 'Eventos Unidos',
        'profile.eventsHosted': 'Eventos Organizados',
        'profile.rating': 'Valoración',
        'profile.achievements': 'Logros',
        'profile.favoriteSports': 'Deportes Favoritos',
        'profile.editProfile': 'Editar Perfil',
        'profile.logout': 'Cerrar Sesión'
    }
};

// Events Data
const eventsData = [
    {
        id: '1',
        title: { en: '5v5 Football Match', es: 'Partido de Fútbol 5v5' },
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',
        location: 'Estadio Municipal El Plantío',
        time: { en: 'Today, 6:00 PM', es: 'Hoy, 18:00' },
        sport: 'football',
        level: { en: 'Intermediate', es: 'Intermedio' },
        players: '8/10',
        icon: '⚽',
        description: {
            en: 'Looking for players to join a friendly 5v5 football match. All skill levels welcome! We play every Tuesday evening.',
            es: 'Buscando jugadores para un partido amistoso de fútbol 5v5. ¡Todos los niveles son bienvenidos! Jugamos todos los martes por la tarde.'
        }
    },
    {
        id: '2',
        title: { en: 'Beach Volleyball', es: 'Voleibol Playa' },
        image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
        location: 'Playa de San Juan',
        time: { en: 'Tomorrow, 10:00 AM', es: 'Mañana, 10:00' },
        sport: 'volleyball',
        level: { en: 'Beginner', es: 'Principiante' },
        players: '6/8',
        icon: '🏐',
        description: {
            en: 'Beach volleyball session at San Juan Beach. Perfect for beginners and casual players!',
            es: 'Sesión de voleibol playa en Playa de San Juan. ¡Perfecto para principiantes y jugadores casuales!'
        }
    },
    {
        id: '3',
        title: { en: 'Morning Basketball', es: 'Baloncesto Matutino' },
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
        location: 'Polideportivo Ciudad de Alicante',
        time: { en: 'Sat, 9:00 AM', es: 'Sáb, 9:00' },
        sport: 'basketball',
        level: { en: 'Advanced', es: 'Avanzado' },
        players: '9/10',
        icon: '🏀',
        description: {
            en: 'Competitive basketball game. Looking for skilled players for a full court 5v5.',
            es: 'Partido competitivo de baloncesto. Buscando jugadores hábiles para un 5v5 de cancha completa.'
        }
    },
    {
        id: '4',
        title: { en: 'Tennis Doubles', es: 'Tenis Dobles' },
        image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800',
        location: 'Club de Tenis Alicante',
        time: { en: 'Wed, 5:00 PM', es: 'Mié, 17:00' },
        sport: 'tennis',
        level: { en: 'Intermediate', es: 'Intermedio' },
        players: '3/4',
        icon: '🎾',
        description: {
            en: 'Looking for one more player for doubles tennis. Intermediate level preferred.',
            es: 'Buscando un jugador más para tenis de dobles. Se prefiere nivel intermedio.'
        }
    },
    {
        id: '5',
        title: { en: 'Sunday Run Club', es: 'Club de Correr Dominical' },
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
        location: 'Explanada de España',
        time: { en: 'Sun, 8:00 AM', es: 'Dom, 8:00' },
        sport: 'running',
        level: { en: 'All Levels', es: 'Todos los Niveles' },
        players: '12/20',
        icon: '🏃',
        description: {
            en: 'Weekly running group along the beautiful Explanada. All paces welcome!',
            es: 'Grupo semanal de correr por la hermosa Explanada. ¡Todos los ritmos son bienvenidos!'
        }
    },
    {
        id: '6',
        title: { en: 'Padel Match', es: 'Partido de Pádel' },
        image: 'https://images.unsplash.com/photo-1612534847738-b362f27a368d?w=800',
        location: 'Pádel Indoor Alicante',
        time: { en: 'Fri, 7:00 PM', es: 'Vie, 19:00' },
        sport: 'padel',
        level: { en: 'Intermediate', es: 'Intermedio' },
        players: '2/4',
        icon: '🎾',
        description: {
            en: 'Padel doubles match. Need 2 more intermediate players!',
            es: 'Partido de pádel dobles. ¡Necesitamos 2 jugadores más de nivel intermedio!'
        }
    }
];

// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(screenId).classList.add('active');

    // Load data for specific screens
    if (screenId === 'homeScreen') {
        loadEvents();
    }
}

// Language Toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    document.getElementById('langToggle').textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    updateTranslations();

    // Reload events if on home screen
    if (document.getElementById('homeScreen').classList.contains('active')) {
        loadEvents();
    }
}

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Load Events
let currentFilter = 'all';

function loadEvents(filter = 'all') {
    const container = document.getElementById('eventsContainer');
    const filteredEvents = filter === 'all'
        ? eventsData
        : eventsData.filter(event => event.sport === filter);

    container.innerHTML = filteredEvents.map(event => `
        <div class="event-card" onclick="showEventDetails('${event.id}')">
            <img src="${event.image}" alt="${event.title[currentLanguage]}" class="event-image">
            <div class="event-content">
                <div class="event-header">
                    <h3 class="event-title">${event.title[currentLanguage]}</h3>
                    <span class="event-icon">${event.icon}</span>
                </div>
                <div class="event-info">
                    <div class="event-info-item">
                        <span>📍</span>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-info-item">
                        <span>🕐</span>
                        <span>${event.time[currentLanguage]}</span>
                    </div>
                </div>
                <div class="event-footer">
                    <span class="event-badge">${event.level[currentLanguage]}</span>
                    <span class="event-players">👥 ${event.players}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterSport(sport) {
    currentFilter = sport;

    // Update active state
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');

    // Reload events with filter
    loadEvents(sport);
}

// Show Event Details
function showEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;

    document.getElementById('detailImage').src = event.image;
    document.getElementById('detailTitle').textContent = event.title[currentLanguage];
    document.getElementById('detailLevel').textContent = event.level[currentLanguage];
    document.getElementById('detailLocation').textContent = event.location;
    document.getElementById('detailTime').textContent = event.time[currentLanguage];
    document.getElementById('detailPlayers').textContent = event.players;
    document.getElementById('detailDescription').textContent = event.description[currentLanguage];

    showScreen('eventDetailsScreen');
}

// Join Event
function joinEvent() {
    alert(currentLanguage === 'en'
        ? '🎉 Successfully joined the event!'
        : '🎉 ¡Te has unido al evento con éxito!');
    showScreen('homeScreen');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    showScreen('homeScreen');
}

// Handle Create Event
function handleCreateEvent(e) {
    e.preventDefault();
    alert(currentLanguage === 'en'
        ? '✅ Event created successfully!'
        : '✅ ¡Evento creado con éxito!');
    showScreen('homeScreen');
}

// Chat Functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    const chatMessages = document.getElementById('chatMessages');
    const now = new Date();
    const timeString = now.toLocaleTimeString(currentLanguage === 'en' ? 'en-US' : 'es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const messageHTML = `
        <div class="chat-message own-message">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${currentLanguage === 'en' ? 'You' : 'Tú'}</span>
                    <span class="message-time">${timeString}</span>
                </div>
                <p>${message}</p>
            </div>
        </div>
    `;

    chatMessages.innerHTML += messageHTML;
    input.value = '';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Allow Enter key to send message
document.addEventListener('DOMContentLoaded', function () {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Load initial translations
    updateTranslations();
});
