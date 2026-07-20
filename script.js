<script>
    // --- DATA ---
    const catalog = [
        { title: "Stash Vault", cat: "STASH", desc: "Secure 10x10 underground storage with lava protection." },
        { title: "Automatic Wheat Farm", cat: "FARM", desc: "High-yield farm using observer-based harvesting." },
        { title: "Full Regear Kit", cat: "REGEAR", desc: "Complete diamond gear set with enchantment setup." },
        { title: "Perimeter Dig", cat: "DIGGING", desc: "100x100 chunk clearing service to bedrock." }
    ];

    // --- RENDER CATALOG ---
    function renderCatalog(filter = "ALL") {
        const grid = document.getElementById('catalog-grid');
        grid.innerHTML = "";
        const filtered = filter === "ALL" ? catalog : catalog.filter(i => i.cat === filter);
        
        filtered.forEach(item => {
            grid.innerHTML += `
                <div class="build-card">
                    <div class="card-content">
                        <span class="card-tag">${item.cat}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.desc}</p>
                        <button class="btn-card-order" onclick="selectBuild('${item.title}')">ORDER THIS BUILD</button>
                    </div>
                </div>
            `;
        });
    }

    // --- NAVIGATION ---
    function switchView(viewId) {
        document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-view'));
        document.getElementById('view-' + viewId).classList.add('active-view');
    }

    function filterCategory(cat, el) {
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        renderCatalog(cat);
    }

    function selectBuild(title) {
        document.getElementById('selection-card').style.display = 'flex';
        document.getElementById('selected-build-title').innerText = title;
        document.getElementById('service-type').value = (title.includes('Dig')) ? 'Digging Service' : 'Stash Build';
        toggleCalculator();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function clearSelectedBuild() {
        document.getElementById('selection-card').style.display = 'none';
        document.getElementById('selected-build-title').innerText = "";
    }

    function toggleCalculator() {
        const type = document.getElementById('service-type').value;
        document.getElementById('digging-calc').style.display = (type === 'Digging Service') ? 'block' : 'none';
    }

    // --- MODAL ---
    function openModal() { document.getElementById('how-it-works-modal').style.display = 'flex'; }
    function closeModal() { document.getElementById('how-it-works-modal').style.display = 'none'; }

    // --- AUTH MOCK ---
    let isAdmin = false;
    function handleAuthNavClick() {
        if (document.getElementById('nav-auth-btn').innerText === "Logout") {
            isAdmin = false;
            document.querySelectorAll('.admin-only').forEach(e => e.style.display = 'none');
            document.getElementById('nav-auth-btn').innerText = "Login";
        } else {
            switchView('auth');
        }
    }

    function executeAuthAction(e) {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        if (email === "admin@donut.smp") {
            isAdmin = true;
            document.querySelectorAll('.admin-only').forEach(e => e.style.display = 'flex');
            document.getElementById('nav-auth-btn').innerText = "Logout";
            switchView('showcase');
        } else {
            alert("Logged in as Client");
            switchView('showcase');
        }
    }

    // --- INITIALIZE ---
    window.onload = () => {
        renderCatalog();
        if(!localStorage.getItem('hideModal')) openModal();
    };
</script>
