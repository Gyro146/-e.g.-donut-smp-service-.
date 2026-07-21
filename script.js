:root {
    --bg-dark: #0b090c;
    --card-bg: #141117;
    --accent: #d35438;
    --text-main: #f0edf2;
    --text-muted: #9c95a3;
    --border-color: #27212d;
    --gold: #dfba73;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Hero Section */
.hero-section {
    width: 100%;
    max-width: 500px;
    text-align: center;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.brand-top {
    font-size: 11px;
    letter-spacing: 2.5px;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 14px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 20px;
}

.status-dot {
    width: 8px;
    height: 8px;
    background-color: #2ecc71;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(46, 204, 113, 0.6);
}

.hero-section h1 {
    font-family: 'Cinzel', serif;
    font-size: 32px;
    line-height: 1.2;
    color: var(--gold);
    margin-bottom: 12px;
}

.hero-subtitle {
    color: var(--text-muted);
    font-size: 14px;
    font-style: italic;
    margin-bottom: 25px;
}

.quick-nav-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
}

.nav-pill {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 12px;
    border-radius: 25px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
}

.nav-pill:hover {
    border-color: var(--accent);
}

/* Showcase & Search */
.showcase-section {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
}

.search-bar-container {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
}

.search-input {
    flex: 1;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 14px;
    border-radius: 8px;
    color: #fff;
    font-size: 13px;
    outline: none;
}

.search-input:focus {
    border-color: var(--accent);
}

.search-btn {
    background: var(--accent);
    border: none;
    color: #fff;
    padding: 0 20px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
}

/* Category Filters */
.categories-section {
    width: 100%;
    max-width: 500px;
    margin-bottom: 25px;
}

.filter-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.filter-icon {
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 6px;
    letter-spacing: 1px;
}

.category-buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.cat-btn {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.cat-btn.active, .cat-btn:hover {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
}

/* Portfolio Cards */
.portfolio-section {
    width: 100%;
    max-width: 500px;
    margin-bottom: 40px;
}

.portfolio-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.card-content {
    padding: 20px;
}

.tag {
    font-size: 11px;
    letter-spacing: 1.5px;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
}

.portfolio-card h2 {
    font-family: 'Cinzel', serif;
    font-size: 22px;
    margin-bottom: 8px;
    color: #fff;
}

.portfolio-card p {
    color: var(--text-muted);
    font-size: 14px;
    margin-bottom: 20px;
    font-style: italic;
}

.card-actions {
    display: flex;
    gap: 10px;
}

/* Buttons */
.btn-outline, .btn-solid, .btn-solid-dark {
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: 0.2s;
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-main);
    flex: 1;
}

.btn-outline:hover {
    border-color: var(--text-muted);
}

.btn-solid {
    background: var(--accent);
    border: 1px solid var(--accent);
    color: #fff;
    flex: 1;
}

.btn-solid:hover {
    opacity: 0.9;
}

/* Order Form Section */
.order-section {
    width: 100%;
    max-width: 500px;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
}

.section-title {
    font-family: 'Cinzel', serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.diamond {
    color: var(--accent);
    font-size: 12px;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 13px;
    margin-bottom: 24px;
}

.form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-group label {
    font-size: 11px;
    letter-spacing: 1px;
    color: var(--text-muted);
    font-weight: 700;
}

.form-group input, .form-group textarea, .form-group select {
    background: #0b090c;
    border: 1px solid var(--border-color);
    padding: 14px;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    outline: none;
}

.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
    border-color: var(--accent);
}

.form-hint {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
}

/* Digging panel & Gold text styling */
.digging-options-panel {
    background: rgba(20, 17, 23, 0.6);
    border: 1px solid var(--border-color);
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 20px;
}

.dimension-inputs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 100%;
}

.dimension-inputs-grid input {
    width: 100%;
    min-width: 0;
    color: var(--gold);
    border-color: rgba(223, 186, 115, 0.3);
}

.dimension-inputs-grid input:focus {
    border-color: var(--gold);
}

#digLength::placeholder, 
#digWidth::placeholder, 
#digHeight::placeholder {
    color: var(--gold);
    opacity: 0.8;
}

.calculation-summary-box {
    margin-top: 15px;
    padding-top: 12px;
    border-top: 1px dashed var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13px;
    color: var(--text-muted);
}

/* Centered Submit Order Button */
.submit-order-btn {
    display: block;
    width: 100%;
    margin: 20px auto;
    text-align: center;
    background: var(--accent);
    border: 1px solid var(--accent);
    color: #fff;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.2s;
}

.submit-order-btn:hover {
    opacity: 0.9;
}

.backup-copy-box {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.copy-output-box {
    background: #0b090c;
    border: 1px solid var(--border-color);
    padding: 12px;
    border-radius: 8px;
    font-size: 12px;
    color: var(--text-muted);
    min-height: 50px;
    width: 100%;
    word-break: break-all;
}

/* FAQ Accordion */
.faq-section {
    width: 100%;
    max-width: 500px;
    margin-bottom: 40px;
}

.faq-accordion {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
}

.faq-item {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    background: none;
    border: none;
    color: var(--text-main);
    padding: 18px;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.faq-icon {
    color: var(--accent);
    font-size: 18px;
}

.faq-answer {
    padding: 0 18px 18px 18px;
    display: none;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
}

.faq-item.active .faq-answer {
    display: block;
}

/* Footer & Partners */
footer {
    width: 100%;
    max-width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.partner-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
}

.partner-card h3 {
    font-family: 'Cinzel', serif;
    color: var(--accent);
    margin-bottom: 12px;
}

.partner-actions {
    display: flex;
    gap: 10px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-solid-dark {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-main);
}

.footer-branding {
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--text-muted);
    margin-top: 10px;
}
