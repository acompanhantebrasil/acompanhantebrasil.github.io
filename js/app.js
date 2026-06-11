// DADOS DE ACOMPANHANTES
// ============================================

const profiles = [
    {
        id: 1,
        name: "Ingrid",
        age: 24,
        city: "São Paulo",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
        description: "Morena sensual, corpo perfeito"
    },
    {
        id: 2,
        name: "Heloísa",
        age: 26,
        city: "Rio de Janeiro",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        description: "Loira provocante, muito gostosa"
    },
    {
        id: 3,
        name: "Amanda",
        age: 23,
        city: "Brasília",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
        description: "Gostosa demais, corpo impecável"
    },
    {
        id: 4,
        name: "Gisele",
        age: 28,
        city: "Fortaleza",
        image: "https://images.unsplash.com/photo-1517046220202-51e0e8842e1f?w=400&h=500&fit=crop",
        description: "Mulher experiente, muito viciante"
    },
    {
        id: 5,
        name: "Helena",
        age: 25,
        city: "Salvador",
        image: "https://images.unsplash.com/photo-1534528741775-53a8c3a76efb?w=400&h=500&fit=crop",
        description: "Jovem e safada, muito quente"
    },
    {
        id: 6,
        name: "Erika",
        age: 27,
        city: "Belo Horizonte",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
        description: "Gata linda, corpo de revista"
    },
    {
        id: 7,
        name: "Giovanna",
        age: 22,
        city: "Manaus",
        image: "https://images.unsplash.com/photo-1516228697521-e614a2e4c21e?w=400&h=500&fit=crop",
        description: "Novinha gostosa, muito putinha"
    },
    {
        id: 8,
        name: "Taís",
        age: 26,
        city: "Curitiba",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
        description: "Aventureira, faz tudo que você quer"
    },
    {
        id: 9,
        name: "Gabriela",
        age: 24,
        city: "Recife",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
        description: "Mulher fogosa, muito gostosa"
    },
    {
        id: 10,
        name: "Mirella",
        age: 29,
        city: "Porto Alegre",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
        description: "Madura e sensual, muito safada"
    },
    {
        id: 11,
        name: "Bruna",
        age: 23,
        city: "Belém",
        image: "https://images.unsplash.com/photo-1517046220202-51e0e8842e1f?w=400&h=500&fit=crop",
        description: "Jovem gostosa, corpo maravilhoso"
    },
    {
        id: 12,
        name: "Vanessa",
        age: 25,
        city: "Goiânia",
        image: "https://images.unsplash.com/photo-1534528741775-53a8c3a76efb?w=400&h=500&fit=crop",
        description: "Gata linda, muito quente e safada"
    }
];

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadProfiles();
    setupEventListeners();
    setupMetaTags();
});

// ============================================
// CARREGAR PERFIS
// ============================================

function loadProfiles() {
    const profilesGrid = document.getElementById('profilesGrid');
    profilesGrid.innerHTML = '';

    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `
            <div style="position: relative;">
                <img src="${profile.image}" alt="${profile.name}" class="profile-image">
                <span class="online-badge">● ONLINE</span>
            </div>
            <div class="profile-info">
                <div class="profile-name">${profile.name}, ${profile.age}</div>
                <div class="profile-city">📍 ${profile.city}</div>
                <div class="profile-description">${profile.description}</div>
            </div>
        `;
        profileCard.addEventListener('click', () => openModal(profile));
        profilesGrid.appendChild(profileCard);
    });
}

// ============================================
// MODAL
// ============================================

function openModal(profile) {
    const modal = document.getElementById('profileModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}" class="modal-image">
        <h2 class="modal-name">${profile.name}, ${profile.age}</h2>
        <div class="modal-city">📍 ${profile.city}</div>
        <p class="modal-description">${profile.description}</p>
        <ul class="modal-checks">
            <li>Fotos 100% Reais</li>
            <li>Atendimento Discreto</li>
            <li>Disponível 24h</li>
        </ul>
        <div class="modal-phone">📞 11999999999</div>
        <div class="modal-buttons">
            <button class="btn-call" onclick="callWhatsApp('${profile.name}')">📞 Chamar Agora</button>
            <button class="btn-share-modal" onclick="shareProfile('${profile.name}')">📤 Compartilhar</button>
        </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ============================================
// COMPARTILHAMENTO
// ============================================

function callWhatsApp(name) {
    const message = `Oi! Estou interessado em conhecer a ${name}. Você está disponível?`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function shareProfile(name) {
    const url = window.location.href;
    const text = `Confira o perfil de ${name} em Acompanhantes Brasil!`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

document.getElementById('shareBtn').addEventListener('click', function() {
    const url = window.location.href;
    const text = 'Confira as garotas mais gostosas em Acompanhantes Brasil!';
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
});

document.getElementById('whatsappBtn').addEventListener('click', function() {
    const text = 'Confira as garotas mais gostosas em Acompanhantes Brasil! ' + window.location.href;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado com sucesso!');
    });
});

// ============================================
// BUSCA E FILTROS
// ============================================

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.profile-card');

    cards.forEach(card => {
        const name = card.querySelector('.profile-name').textContent.toLowerCase();
        const city = card.querySelector('.profile-city').textContent.toLowerCase();

        if (name.includes(searchTerm) || city.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filtros de cidade
document.querySelectorAll('.city-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const city = this.getAttribute('data-city');
        const cards = document.querySelectorAll('.profile-card');

        cards.forEach(card => {
            const profileCity = card.querySelector('.profile-city').textContent;
            if (profileCity.includes(city)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Scroll para perfis
        document.querySelector('.profiles-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Botão Explorar Agora
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.querySelector('.profiles-section').scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// META TAGS
// ============================================

function setupMetaTags() {
    const url = window.location.href;
    const title = 'Acompanhantes Brasil - Encontre Acompanhantes Premium';
    const description = 'Catálogo completo de acompanhantes em todas as cidades do Brasil. Perfis verificados, fotos de alta qualidade e atendimento garantido.';

    // Open Graph
    setMetaTag('og:url', url);
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:type', 'website');
}

function setMetaTag(name, content) {
    let element = document.querySelector(`meta[property="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
}
