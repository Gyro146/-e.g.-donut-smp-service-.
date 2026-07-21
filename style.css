// FAQ Toggle Script
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const icon = button.querySelector('.faq-icon');
        
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            icon.textContent = '×';
        } else {
            icon.textContent = '+';
        }
    });
});

// Portfolio Data Database for All Categories
const portfolioItems = [
    {
        category: "STASH",
        title: "Black and White Stash",
        description: "Sleek monochrome storage ball with organized chest rows",
        image: "images/black-white-stash.jpg"
    },
    {
        category: "REGEAR",
        title: "Elite Regear Station",
        description: "Automated and quick-access combat gear layout for factions",
        image: "images/regear.jpg"
    },
    {
        category: "FARM",
        title: "Advanced Crop & Mob Farm",
        description: "High efficiency automated agricultural and drop farming design",
        image: "images/farm.jpg"
    },
    {
        category: "DIGGING",
        title: "Perimeter Excavation & Clearing",
        description: "Massive scale chunk clearing and trench digging service",
        image: "images/digging.jpg"
    }
];

// Category Filter Interactivity & Dynamic Grid Rendering
const categoryButtons = document.querySelectorAll('.cat-btn');
const portfolioSection = document.querySelector('.portfolio-section');

function renderPortfolio(filter) {
    if (!portfolioSection) return;
    
    let htmlContent = `<h3 class="section-title"><span class="diamond">◆</span> SHOWCASE</h3>`;
    
    let itemsToShow = filter === 'ALL' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);

    itemsToShow.forEach(item => {
        htmlContent += `
            <div class="portfolio-card" style="margin-bottom: 20px;">
                <img src="${item.image}" alt="${item.title}" class="card-image" onerror="this.src='images/black-white-stash.jpg'">
                <div class="card-content">
                    <span class="tag">${item.category}</span>
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <div class="card-actions">
                        <a href="#" class="btn-outline">VIEW</a>
                        <a href="#orderSection" class="btn-solid">ORDER THIS</a>
                    </div>
                </div>
            </div>
        `;
    });

    portfolioSection.innerHTML = htmlContent;
}

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const selectedCategory = btn.textContent.trim().toUpperCase();
        renderPortfolio(selectedCategory);
    });
});

// Render all by default on load
renderPortfolio('ALL');

// Dynamic Digging Calculation & Form Summary
const serviceSelect = document.getElementById('serviceType');
const diggingPanel = document.getElementById('diggingPanel');
const digLength = document.getElementById('digLength');
const digWidth = document.getElementById('digWidth');
const digHeight = document.getElementById('digHeight');
const totalBlocksEl = document.getElementById('totalBlocks');
const totalCostEl = document.getElementById('totalCost');
const summaryOutput = document.getElementById('summaryOutput');

function updateCalculations() {
    if (serviceSelect && serviceSelect.value === 'Digging / Excavation') {
        if (diggingPanel) diggingPanel.style.display = 'block';
    } else {
        if (diggingPanel) diggingPanel.style.display = 'none';
    }

    const length = digLength ? parseFloat(digLength.value) || 0 : 0;
    const width = digWidth ? parseFloat(digWidth.value) || 0 : 0;
    const height = digHeight ? parseFloat(digHeight.value) || 0 : 0;

    const totalBlocks = length * width * height;
    const totalCost = totalBlocks * 120; // 120 per block without money text

    if (totalBlocksEl) totalBlocksEl.textContent = totalBlocks.toLocaleString();
    if (totalCostEl) totalCostEl.textContent = totalCost.toLocaleString();

    updateSummary(totalBlocks, totalCost);
}

function updateSummary(blocks = 0, cost = 0) {
    const discordInput = document.getElementById('discordUser');
    const mcInput = document.getElementById('mcUser');
    const detailsInput = document.getElementById('orderDetails');

    const discord = discordInput ? discordInput.value || '[Not Provided]' : '[Not Provided]';
    const minecraft = mcInput ? mcInput.value || '[Not Provided]' : '[Not Provided]';
    const service = serviceSelect ? serviceSelect.value : 'Stash Build';
    const details = detailsInput ? detailsInput.value || '[None]' : '[None]';

    let summaryText = `— NEW ORDER —\nDiscord: ${discord}\nMinecraft: ${minecraft}\nService: ${service}`;
    
    if (service === 'Digging / Excavation') {
        summaryText += `\nDimensions: ${digLength ? digLength.value || 0 : 0}L x ${digWidth ? digWidth.value || 0 : 0}W x ${digHeight ? digHeight.value || 0 : 0}H`;
        summaryText += `\nTotal Blocks: ${blocks.toLocaleString()}`;
        summaryText += `\nEstimated Price: ${cost.toLocaleString()}`;
    }
    
    summaryText += `\nDetails: ${details}\n___________________`;
    if (summaryOutput) summaryOutput.textContent = summaryText;
}

// Event Listeners for live typing updates
if (serviceSelect) serviceSelect.addEventListener('change', updateCalculations);
if (digLength) digLength.addEventListener('input', updateCalculations);
if (digWidth) digWidth.addEventListener('input', updateCalculations);
if (digHeight) digHeight.addEventListener('input', updateCalculations);
if (document.getElementById('discordUser')) document.getElementById('discordUser').addEventListener('input', updateCalculations);
if (document.getElementById('mcUser')) document.getElementById('mcUser').addEventListener('input', updateCalculations);
if (document.getElementById('orderDetails')) document.getElementById('orderDetails').addEventListener('input', updateCalculations);

// Run once on load
updateCalculations();

// Copy Summary to Clipboard Action
const copyBtn = document.getElementById('copyClipBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        if (summaryOutput) {
            navigator.clipboard.writeText(summaryOutput.textContent);
            alert('Order summary copied to clipboard! Paste it into your ticket channel.');
        }
    });
}

// Copy Invite Link Button Handler
const copyInviteBtn = document.getElementById('copyInviteBtn');
if (copyInviteBtn) {
    copyInviteBtn.addEventListener('click', () => {
        const inviteLink = 'https://discord.gg/yourinvite'; // Replace with your actual invite link
        navigator.clipboard.writeText(inviteLink).then(() => {
            alert('Discord invite link copied to clipboard!');
        });
    });
}

// Submit Order Button Animation Handler with Webhook Support
const submitBtn = document.getElementById('submitOrderBtn');
if (submitBtn) {
    let statusMsg = document.getElementById('submitStatusMsg');
    if (!statusMsg) {
        statusMsg = document.createElement('div');
        statusMsg.id = 'submitStatusMsg';
        statusMsg.style.cssText = 'font-size: 12px; color: #2ecc71; text-align: center; margin-top: 8px; display: none;';
        submitBtn.parentNode.insertBefore(statusMsg, submitBtn.nextSibling);
    }

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        submitBtn.textContent = 'SENDING...';
        submitBtn.style.opacity = '0.9';
        submitBtn.disabled = true;

        const orderContent = summaryOutput ? summaryOutput.textContent : '';
        const webhookUrl = ''; // Put your Discord webhook URL here if desired

        try {
            if (webhookUrl) {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content: "```\n" + orderContent + "\n```" })
                });
            }

            statusMsg.textContent = '✓ Sent! Redirecting you home...';
            statusMsg.style.display = 'block';

            setTimeout(() => {
                submitBtn.textContent = 'SUBMIT ORDER';
                submitBtn.disabled = false;
                statusMsg.style.display = 'none';
            }, 2500);

        } catch (error) {
            statusMsg.textContent = '⚠️ Auto-send failed. Please use Copy to Clipboard!';
            statusMsg.style.color = '#e74c3c';
            statusMsg.style.display = 'block';
            
            submitBtn.textContent = 'SUBMIT ORDER';
            submitBtn.disabled = false;
        }
    });
}
