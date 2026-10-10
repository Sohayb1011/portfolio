/**
 * SOHAYB KEZZOULI — PORTFOLIO JAVASCRIPT
 * Gateway d'entrée 3D, Effet 3D Tilt dynamique, Curseur cyber, Décodeur Matrix et Terminal interactif
 */

document.addEventListener('DOMContentLoaded', () => {

  // =================================================================
  // 1. PAGE D'ENTRÉE / CYBER GATEWAY INITIALIZATION
  // =================================================================
  const gatewayOverlay = document.getElementById('intro-gateway');
  const enterBtn = document.getElementById('enter-portfolio-btn');
  const skipBtn = document.getElementById('skip-intro-btn');
  const progressFill = document.getElementById('gateway-progress-fill');
  const loaderPct = document.getElementById('gateway-loader-pct');
  const loaderLabel = document.getElementById('gateway-loader-label');

  let currentProgress = 0;
  const loadingSteps = [
    { at: 20, text: 'Connexion aux canaux de communication sécurisés...' },
    { at: 45, text: 'Vérification biométrique & cryptographique...' },
    { at: 75, text: 'Identité validée : Sohayb Kezzouli (Bac+5 EMSI)...' },
    { at: 95, text: 'Défenses réseau & modules SOC synchronisés...' },
    { at: 100, text: 'Accès autorisé · Niveau Administrateur Sécurité.' }
  ];

  function updateLoaderStep(pct) {
    if (loaderPct) loaderPct.textContent = `${pct}%`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    const matchStep = loadingSteps.find(s => pct <= s.at);
    if (matchStep && loaderLabel) {
      loaderLabel.textContent = matchStep.text;
    }
  }

  // Simulated cyber handshake
  const loadInterval = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 8) + 4;
    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(loadInterval);
      updateLoaderStep(100);

      if (enterBtn) {
        enterBtn.disabled = false;
        enterBtn.classList.add('pulse-ready');
        const textSpan = enterBtn.querySelector('.btn-text');
        if (textSpan) textSpan.textContent = 'ACCÉDER AU PORTFOLIO ➔';
      }
    } else {
      updateLoaderStep(currentProgress);
    }
  }, 70);

  function unlockPortfolio() {
    if (!gatewayOverlay) return;
    gatewayOverlay.classList.add('fade-out');
    document.body.classList.remove('is-loading');

    setTimeout(() => {
      gatewayOverlay.style.display = 'none';
    }, 750);

    // Trigger matrix scrambler on main heading
    scrambleAllHeadings();
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', unlockPortfolio);
  }
  if (skipBtn) {
    skipBtn.addEventListener('click', unlockPortfolio);
  }

  // =================================================================
  // 2. CUSTOM CYBER POINTER & CURSOR AURA
  // =================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(animateCursorRing);
  }
  animateCursorRing();

  // Enlarge cursor ring on interactables
  const hoverTargets = document.querySelectorAll('a, button, input, textarea, [data-tilt-card], .cmd-pill');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursorRing) cursorRing.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      if (cursorRing) cursorRing.classList.remove('active');
    });
  });

  // =================================================================
  // 3. 3D TILT EFFECT ON CARDS
  // =================================================================
  const tiltCards = document.querySelectorAll('[data-tilt-card]');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // =================================================================
  // 4. MATRIX TEXT SCRAMBLER EFFECT (DECODER)
  // =================================================================
  const chars = '!<>-_\\/[]{}—=+*^?#________010101';
  
  function scrambleText(element) {
    const originalText = element.getAttribute('data-original-text') || element.innerText;
    element.setAttribute('data-original-text', originalText);
    let iteration = 0;
    const maxIterations = originalText.length;

    const interval = setInterval(() => {
      element.innerText = originalText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          if (char === ' ' || char === '\n') return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= maxIterations) {
        clearInterval(interval);
        element.innerText = originalText;
      }
      iteration += 1 / 2;
    }, 28);
  }

  function scrambleAllHeadings() {
    const scrambleElements = document.querySelectorAll('[data-scramble]');
    scrambleElements.forEach(el => {
      scrambleText(el);
      el.addEventListener('mouseenter', () => scrambleText(el));
    });
  }

  // =================================================================
  // 5. CYBER BACKGROUND PARTICLES (CANVAS)
  // =================================================================
  const canvas = document.getElementById('cyber-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numPoints = Math.min(Math.floor((width * height) / 18000), 55);
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
      });
    }

    let mouse = { x: null, y: null, maxDist: 130 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouse.x !== null) {
          const mdx = points[i].x - mouse.x;
          const mdy = points[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.maxDist) {
            const malpha = (1 - mdist / mouse.maxDist) * 0.35;
            ctx.strokeStyle = `rgba(59, 130, 246, ${malpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw points & move
      for (let p of points) {
        ctx.fillStyle = '#00f5d4';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      requestAnimationFrame(renderCanvas);
    }
    renderCanvas();
  }

  // =================================================================
  // 6. SCROLL PROGRESS & NAVBAR STYLING
  // =================================================================
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    if (totalScroll > 0 && progressBar) {
      const pct = (currentScroll / totalScroll) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (navbar) {
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // =================================================================
  // 7. STATS NUMBER COUNTER ANIMATION
  // =================================================================
  const metricNumbers = document.querySelectorAll('.metric-number');
  let metricsAnimated = false;

  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        metricNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-target'), 10);
          const hasSup = numEl.querySelector('.metric-sup') !== null;
          let current = 0;
          const duration = 1200;
          const stepTime = Math.max(Math.floor(duration / (target || 1)), 25);

          const timer = setInterval(() => {
            current++;
            if (hasSup) {
              numEl.innerHTML = `${current}<span class="metric-sup">e</span>`;
            } else {
              numEl.textContent = current;
            }
            if (current >= target) {
              clearInterval(timer);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const metricsWrapper = document.querySelector('.hero-metrics');
  if (metricsWrapper) {
    countUpObserver.observe(metricsWrapper);
  }

  // =================================================================
  // 8. INTERACTIVE CYBER TERMINAL
  // =================================================================
  const termInput = document.getElementById('terminal-input');
  const termHistory = document.getElementById('term-history');
  const termScreen = document.getElementById('terminal-screen');
  const cmdPills = document.querySelectorAll('.cmd-pill');

  const commands = {
    help: () => `
      <div class="system-msg">Commandes disponibles sur cette session :</div>
      <div><span class="term-highlight">pfe</span>      - Détails de la recherche de stage PFE</div>
      <div><span class="term-highlight">skills</span>   - Liste synthétique des compétences techniques</div>
      <div><span class="term-highlight">stages</span>   - Expériences en immersion (CDG, TGR, SNRT)</div>
      <div><span class="term-highlight">certs</span>    - 16 Certifications (Oracle, Cisco, Google, Red Hat...)</div>
      <div><span class="term-highlight">contact</span>  - Coordonnées de contact direct & réseaux</div>
      <div><span class="term-highlight">whoami</span>   - Synthèse du profil de Sohayb Kezzouli</div>
      <div><span class="term-highlight">clear</span>    - Nettoyer l'écran de la console</div>
    `,
    pfe: () => `
      <div class="system-msg">// PROJET DE FIN D'ÉTUDES (PFE 2026/2027)</div>
      <div><strong>Disponibilité :</strong> Début 2027 (durée 4 à 6 mois)</div>
      <div><strong>Domaines ciblés :</strong> Cybersécurité, SOC/SIEM, Pare-feu NGFW, Bastion, Cloud Security</div>
      <div><strong>Mobilité :</strong> Rabat, Casablanca, Télétravail</div>
      <div><strong>Contact direct :</strong> sohaybkezzouli2004@gmail.com | +212 654191516</div>
    `,
    skills: () => `
      <div class="system-msg">// MATRIX DES COMPÉTENCES :</div>
      <div><span class="term-highlight">[RÉSEAU/CYBER]</span> pfSense, Cisco Packet Tracer, Cisco ASA, ACL, VLAN, VPN IPsec, DMZ, SOC/SIEM, Zabbix API</div>
      <div><span class="term-highlight">[SYSTÈMES]</span>     Linux (Ubuntu, Debian, Kali), Windows Server, Active Directory, VMware</div>
      <div><span class="term-highlight">[DEV & CRYPTO]</span> Python, JS/TS, React, Node/Express, Django, Laravel, JWT, bcrypt</div>
      <div><span class="term-highlight">[AUDIT]</span>        Wireshark, Kali Linux, Nmap, Postman</div>
    `,
    stages: () => `
      <div class="system-msg">// EXPÉRIENCES EN INSTITUTIONS :</div>
      <div>1. <span class="term-highlight">CDG (2026) :</span> Projet SecureVision (Supervision SOC & API Zabbix)</div>
      <div>2. <span class="term-highlight">TGR (2025) :</span> Bastion d'accès durci SSH ProxyJump, React & Express</div>
      <div>3. <span class="term-highlight">SNRT (2024) :</span> Pare-feu pfSense, filtrage LAN et corrélation de logs</div>
    `,
    certs: () => `
      <div class="system-msg">// 16 CERTIFICATIONS VALIDEES :</div>
      <div>⭐ <strong>Oracle Certified Associate</strong></div>
      <div>⭐ <strong>Network Security (Cisco Networking Academy)</strong></div>
      <div>⭐ <strong>Google Cybersecurity Professional Certificate</strong></div>
      <div>⭐ <strong>Red Hat Linux Administration</strong></div>
      <div>+ 12 certifications complémentaires (Cloud, Analyse Réseau, Web, Dev)</div>
    `,
    contact: () => `
      <div class="system-msg">// CONTACT DIRECT :</div>
      <div>📧 <strong>Email :</strong> <a href="mailto:sohaybkezzouli2004@gmail.com" style="color:#00f5d4">sohaybkezzouli2004@gmail.com</a></div>
      <div>📱 <strong>Tél :</strong> +212 654 191 516</div>
      <div>💼 <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/sohayb-kezzouli-006745340/" target="_blank" style="color:#38bdf8">sohayb-kezzouli</a></div>
      <div>🐙 <strong>GitHub :</strong> <a href="https://github.com/Sohayb1011" target="_blank" style="color:#38bdf8">github.com/Sohayb1011</a></div>
    `,
    whoami: () => `
      <div><strong>Sohayb Kezzouli</strong>, élève-ingénieur en 5e année de Génie Informatique à l'EMSI Rabat. Spécialité Réseaux & Cybersécurité.</div>
    `,
    clear: () => {
      if (termHistory) termHistory.innerHTML = '';
      const initial = document.getElementById('term-initial-output');
      if (initial) initial.style.display = 'none';
      return null;
    },
    sudo: () => `<div style="color:#ef4444">Permission refusée : Sohayb est l'administrateur exclusif de cette instance :)</div>`,
    ping: () => `<div>PING emsi.ma (196.200.160.10) : 64 octets reçus, icmp_seq=1 ttl=56 temps=2.84 ms — Connexion stable.</div>`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const entry = document.createElement('div');
    entry.className = 'term-entry';
    entry.innerHTML = `
      <div class="term-line prompt-line" style="margin-top: 8px;">
        <span class="prompt-prefix">sohayb@cybersec:~$</span>
        <span class="prompt-cmd">${escapeHtml(cmd)}</span>
      </div>
    `;

    let outputHtml = '';
    if (commands[cmd]) {
      const res = commands[cmd]();
      if (res !== null) {
        outputHtml = `<div class="term-output-block" style="margin: 6px 0 10px;">${res}</div>`;
      }
    } else {
      outputHtml = `
        <div class="term-output-block" style="color: #ef4444; margin: 4px 0 8px;">
          Commande inconnue: '${escapeHtml(cmd)}'. Tapez <span class="term-highlight">'help'</span> pour la liste.
        </div>
      `;
    }

    if (outputHtml) {
      entry.innerHTML += outputHtml;
    }
    if (termHistory) {
      termHistory.appendChild(entry);
    }

    if (termScreen) {
      termScreen.scrollTop = termScreen.scrollHeight;
    }
  }

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = termInput.value;
        termInput.value = '';
        executeCommand(val);
      }
    });
  }

  cmdPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  // =================================================================
  // 9. PROJECT FILTERING
  // =================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterVal === 'all' || filterVal === cardCat) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'perspective(1000px) translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // =================================================================
  // 10. ARCHITECTURE MODALS
  // =================================================================
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBoxes = document.querySelectorAll('.modal-box');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloses = document.querySelectorAll('.modal-close');

  function openModal(modalId) {
    if (!modalOverlay) return;
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    modalBoxes.forEach(b => b.classList.remove('active'));
    targetModal.classList.add('active');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalBoxes.forEach(b => b.classList.remove('active'));
    document.body.style.overflow = '';
  }

  modalTriggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trig.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  modalCloses.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // =================================================================
  // 11. TOAST NOTIFICATIONS & EMAIL COPY
  // =================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function copyToClipboard(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || 'Copié dans le presse-papier !');
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(successMsg || 'Copié dans le presse-papier !');
    });
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('sohaybkezzouli2004@gmail.com', 'Adresse email de Sohayb copiée !');
    });
  }

  const copyQuickEmail = document.getElementById('copy-quick-email');
  if (copyQuickEmail) {
    copyQuickEmail.addEventListener('click', () => {
      copyToClipboard('sohaybkezzouli2004@gmail.com', 'Adresse email copiée !');
    });
  }

  // =================================================================
  // 12. CONTACT FORM SUBMISSION SIMULATION
  // =================================================================
  window.handleFormSubmit = function() {
    const name = document.getElementById('form-name')?.value;
    const email = document.getElementById('form-email')?.value;
    const subject = document.getElementById('form-subject')?.value;
    const message = document.getElementById('form-message')?.value;
    const statusEl = document.getElementById('form-status');
    const sendBtn = document.getElementById('send-msg-btn');

    if (!name || !email || !message) return;

    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.innerHTML = `<span>Chiffrement & transmission...</span>`;
    }

    setTimeout(() => {
      if (statusEl) {
        statusEl.className = 'form-feedback success';
        statusEl.textContent = '✓ Message transmis avec succès ! Sohayb reviendra vers vous très vite.';
      }
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.innerHTML = `<span>Transmettre le message</span>`;
      }
      const form = document.getElementById('contact-form');
      if (form) form.reset();
      showToast('Merci ! Votre message a bien été envoyé.');
    }, 900);
  };

  // =================================================================
  // 13. FLIP 3D PROFILE CARD
  // =================================================================
  const flipWrapper = document.getElementById('profile-flip-wrapper');
  if (flipWrapper) {
    flipWrapper.addEventListener('click', () => {
      flipWrapper.classList.toggle('is-flipped');
    });
  }

  // =================================================================
  // 14. SIDE NAVIGATION DOTS — active section tracking
  // =================================================================
  const sideDots = document.querySelectorAll('.side-dot-item');
  const trackedSections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

  function updateActiveDot() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let currentSection = 'hero';
    trackedSections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) currentSection = id;
    });
    sideDots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-target') === currentSection);
    });
  }

  sideDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const el = document.getElementById(dot.getAttribute('data-target'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('scroll', updateActiveDot, { passive: true });
  updateActiveDot();

  // =================================================================
  // 15. PERIODIC GLITCH EFFECT ON HERO TITLE
  // =================================================================
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    function triggerGlitch() {
      heroTitle.classList.add('glitching');
      setTimeout(() => heroTitle.classList.remove('glitching'), 520);
    }
    setTimeout(() => {
      triggerGlitch();
      setInterval(() => { if (Math.random() > 0.4) triggerGlitch(); }, 8000 + Math.random() * 4000);
    }, 4000);
  }

  // =================================================================
  // 16. STATS RIBBON COUNTER ANIMATION
  // =================================================================
  const ribbonNumbers = document.querySelectorAll('[data-ribbon-target]');
  let ribbonAnimated = false;

  const ribbonObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !ribbonAnimated) {
        ribbonAnimated = true;
        ribbonNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-ribbon-target'), 10);
          let current = 0;
          const stepTime = Math.floor(1400 / (target * 3));
          const timer = setInterval(() => {
            current = Math.min(current + 1, target);
            el.textContent = current;
            if (current >= target) clearInterval(timer);
          }, Math.max(stepTime, 20));
        });
      }
    });
  }, { threshold: 0.5 });

  const ribbonEl = document.getElementById('stats-ribbon');
  if (ribbonEl) ribbonObserver.observe(ribbonEl);

  // =================================================================
  // 17. EASTER EGG TERMINAL COMMANDS
  // =================================================================
  function escHtml2(text) {
    return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  const easterEggs = {
    hack: () => `
      <div class="term-hack-output">
        <div>⚠ TENTATIVE D'ACCÈS NON AUTORISÉE DÉTECTÉE</div>
        <div>→ IP source: ${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}</div>
        <div>→ Déclenchement du pare-feu pfSense... Règle DROP ajoutée.</div>
        <div>→ Corrélation SIEM en cours... Alerte SOC niveau 3</div>
        <div style="color:#f59e0b;margin-top:6px">ℹ Ce système est protégé par Sohayb Kezzouli.</div>
      </div>`,
    matrix: () => {
      const c = '01アイウエオカキクケコサシスセソタ';
      const lines = Array.from({length:6}, () =>
        Array.from({length:26}, () => c[Math.floor(Math.random()*c.length)]).join(' ')
      ).join('\n');
      return `<div class="term-matrix-rain"><pre>${lines}</pre><div style="margin-top:6px;color:#00f5d4">// Wake up, Sohayb... The network has you.</div></div>`;
    },
    nmap: () => `
      <div class="term-nmap-output">
        <div>Starting Nmap 7.93 — https://nmap.org</div>
        <div>Scanning portfolio.local (127.0.0.1) [1000 ports]</div>
        <div style="margin-top:4px">PORT     STATE  SERVICE</div>
        <div>22/tcp   open   ssh</div>
        <div>80/tcp   open   http</div>
        <div>443/tcp  open   https</div>
        <div>8080/tcp open   http-proxy (Portfolio)</div>
        <div style="color:#34d399;margin-top:4px">Nmap done: 1 host up — latency 0.42ms</div>
      </div>`,
    ls: () => `
      <div class="term-success-output">
        <div>📁 projets/  📁 certifications/  📁 stages/  📁 skills/</div>
        <div>📄 cv.pdf    📄 spec.json        🔐 secrets.enc</div>
        <div style="color:#64748b;margin-top:4px">// secrets.enc — Chiffrement AES-256 active</div>
      </div>`,
    pwd: () => `<div class="term-success-output">/home/sohayb/portfolio/cyber-defense-lab</div>`,
    secret: () => `
      <div class="term-success-output">
        <div>🔓 Clé déchiffrée : <strong style="color:#00f5d4">HIRE_SOHAYB_2027</strong></div>
        <div style="margin-top:6px">Vous avez trouvé l'easter egg ! Envoyez ce code à</div>
        <div><a href="mailto:sohaybkezzouli2004@gmail.com" style="color:#00f5d4">sohaybkezzouli2004@gmail.com</a> pour une réponse prioritaire 🚀</div>
      </div>`,
    exit: () => `<div style="color:#ef4444">Impossible de quitter — Ce portfolio est trop bien fait pour être fermé 😄</div>`,
    date: () => `<div class="term-success-output">${new Date().toLocaleString('fr-FR', {weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'})} — Heure de Rabat</div>`,
    uname: () => `<div class="term-success-output">SohaybOS v5.0 (Bac+5 kernel) — EMSI-SECOPS-2027 — Architecture: x86_cybersec</div>`,
    cat: () => `<div style="color:#ef4444">cat: secrets.enc: Permission refusée (AES-256 chiffré)</div>`,
  };

  // Override the terminal input to intercept easter eggs
  const origTermInput = document.getElementById('terminal-input');
  if (origTermInput) {
    const newTermInput = origTermInput.cloneNode(true);
    origTermInput.parentNode.replaceChild(newTermInput, origTermInput);

    const th = document.getElementById('term-history');
    const ts = document.getElementById('terminal-screen');

    newTermInput.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const raw = newTermInput.value.trim();
      newTermInput.value = '';
      if (!raw) return;

      const cmd = raw.toLowerCase();
      const eggFn = easterEggs[cmd];

      const entry = document.createElement('div');
      entry.className = 'term-entry';

      if (eggFn) {
        const res = eggFn();
        entry.innerHTML = `
          <div class="term-line prompt-line" style="margin-top:8px">
            <span class="prompt-prefix">sohayb@cybersec:~$</span>
            <span class="prompt-cmd">${escHtml2(cmd)}</span>
          </div>
          ${res ? `<div class="term-output-block" style="margin:6px 0 10px">${res}</div>` : ''}`;
      } else {
        // Standard commands
        const stdCmds = {
          help: `<div class="system-msg">Commandes : pfe · skills · stages · certs · contact · whoami · clear · sudo · ping</div><div style="color:#64748b;margin-top:4px">// Des commandes cachées existent... 🔍</div>`,
          pfe: `<div class="system-msg">// STAGE PFE 2026/2027</div><div>Disponibilité : Début 2027 · 4 à 6 mois</div><div>Domaines : SOC/SIEM, NGFW, Bastion, Cloud Security</div><div>Contact : sohaybkezzouli2004@gmail.com | +212 654191516</div>`,
          skills: `<div class="system-msg">// COMPÉTENCES</div><div><span class="term-highlight">[RÉSEAU]</span> pfSense, Cisco ASA, ACL, VLAN, VPN IPsec, SOC/SIEM, Zabbix</div><div><span class="term-highlight">[SYSTÈMES]</span> Linux, Windows Server, AD, VMware</div><div><span class="term-highlight">[DEV]</span> Python, React, Node, Django, Laravel</div>`,
          stages: `<div class="system-msg">// EXPÉRIENCES</div><div>1. <span class="term-highlight">CDG 2026</span> — SecureVision (SOC & Zabbix API)</div><div>2. <span class="term-highlight">TGR 2025</span> — Bastion SSH ProxyJump (React & Express)</div><div>3. <span class="term-highlight">SNRT 2024</span> — pfSense, filtrage LAN & logs</div>`,
          certs: `<div class="system-msg">// 16 CERTIFICATIONS</div><div>⭐ Oracle Certified Associate</div><div>⭐ Cisco Network Security</div><div>⭐ Google Cybersecurity Professional</div><div>⭐ Red Hat Linux Administration</div><div>+ 12 autres certifications</div>`,
          contact: `<div class="system-msg">// CONTACT</div><div>📧 <a href="mailto:sohaybkezzouli2004@gmail.com" style="color:#00f5d4">sohaybkezzouli2004@gmail.com</a></div><div>📱 +212 654 191 516</div><div>💼 <a href="https://linkedin.com/in/sohayb-kezzouli-006745340/" target="_blank" style="color:#38bdf8">LinkedIn</a> · <a href="https://github.com/Sohayb1011" target="_blank" style="color:#38bdf8">GitHub</a></div>`,
          whoami: `<div>Sohayb Kezzouli — Ingénieur Cybersécurité & Réseaux, 5e année EMSI Rabat.</div>`,
          sudo: `<div style="color:#ef4444">Permission refusée : Sohayb est l'administrateur exclusif 🔒</div>`,
          ping: `<div>PING emsi.ma : 64 octets, icmp_seq=1 ttl=56 temps=2.84 ms — Connexion stable.</div>`,
          clear: null,
        };

        if (cmd === 'clear') {
          if (th) th.innerHTML = '';
          const ini = document.getElementById('term-initial-output');
          if (ini) ini.style.display = 'none';
          return;
        }

        const out = stdCmds[cmd];
        entry.innerHTML = `
          <div class="term-line prompt-line" style="margin-top:8px">
            <span class="prompt-prefix">sohayb@cybersec:~$</span>
            <span class="prompt-cmd">${escHtml2(cmd)}</span>
          </div>
          ${out !== undefined
            ? `<div class="term-output-block" style="margin:6px 0 10px">${out}</div>`
            : `<div class="term-output-block" style="color:#ef4444;margin:4px 0 8px">Commande inconnue: '${escHtml2(cmd)}'. Tapez <span class="term-highlight">'help'</span>.</div>`
          }`;
      }

      if (th) th.appendChild(entry);
      if (ts) ts.scrollTop = ts.scrollHeight;
    });
  }

  // Re-wire cmd pills to work with new input
  document.querySelectorAll('.cmd-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const ti = document.getElementById('terminal-input') || document.querySelector('#terminal-screen ~ * input, .term-interactive-line input');
      const newTi = document.querySelector('.term-interactive-line input');
      if (newTi) {
        newTi.value = pill.getAttribute('data-cmd') || '';
        newTi.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      }
    });
  });

  // =================================================================
  // 14. CYBER DEFENSE SKILLS RADAR CHART (SECOPS & NIST MATRIX)
  // =================================================================
  function initCyberRadar() {
    const canvas = document.getElementById('cyber-radar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radarAxes = [
      {
        id: 'arch',
        labelFr: 'Architecture & NGFW',
        labelEn: 'Network Arch & NGFW',
        catFr: 'Défense Périmétrique',
        catEn: 'Perimeter Defense',
        score: 94,
        lvlFr: 'Avancé',
        lvlEn: 'Advanced',
        descFr: "Conception de topologies segmentées (VLAN, DMZ), règles de filtrage d'état, pare-feu pfSense & Cisco ASA, tunnels VPN IPsec.",
        descEn: "Segmented network topology design (VLANs, DMZ), stateful inspection rules, pfSense & Cisco ASA firewalls, IPsec VPN tunnels.",
        proofFr: "Projets SNRT & Topologies EMSI validées",
        proofEn: "SNRT internship & EMSI validated topologies",
        metricFr: "Filtrage d'état L3-L7",
        metricEn: "L3-L7 Stateful Filtering",
        chips: ['pfSense', 'Cisco ASA', 'VLAN 802.1Q', 'VPN IPsec', 'ACL'],
        keywords: ['pfsense', 'cisco asa', 'vlan', 'vpn', 'acl', 'filtrage', 'dmz', 'routage']
      },
      {
        id: 'soc',
        labelFr: 'Supervision & SOC/SIEM',
        labelEn: 'SOC/SIEM & Monitoring',
        catFr: 'Détection Continue',
        catEn: 'Continuous Detection',
        score: 92,
        lvlFr: 'Opérationnel',
        lvlEn: 'Operational',
        descFr: "Agrégation et corrélation d'alertes via Zabbix API, triage des incidents de sécurité (Disaster/High), limitation de la fatigue d'alerte.",
        descEn: "Alert aggregation & correlation via Zabbix API, incident severity triage, reduction of alert fatigue.",
        proofFr: "Projet majeur SecureVision à la CDG",
        proofEn: "Major SecureVision project at CDG",
        metricFr: "Surveillance & Triage SOC",
        metricEn: "Real-time SOC Monitoring",
        chips: ['Zabbix API', 'SOC/SIEM', 'Syslog', 'Audit Logs', 'Monitoring'],
        keywords: ['zabbix', 'soc', 'siem', 'alertes', 'supervision', 'audit']
      },
      {
        id: 'bastion',
        labelFr: 'Durcissement & Bastion',
        labelEn: 'Hardening & Bastion',
        catFr: 'Contrôle Zero Trust',
        catEn: 'Zero Trust Control',
        score: 95,
        lvlFr: 'Expert',
        lvlEn: 'Expert',
        descFr: "Configuration de passerelles d'administration isolées avec ProxyJump SSH, paires de clés asymétriques, hachage bcrypt et filtrage d'adresses.",
        descEn: "Isolated administration gateway setup using SSH ProxyJump, asymmetric key pairs, bcrypt hashing, and strict IP filtering.",
        proofFr: "Bastion d'accès durci développé pour la TGR",
        proofEn: "Hardened Bastion gateway built for TGR",
        metricFr: "Isolation stricte des flux SSH",
        metricEn: "Strict SSH Tunnel Isolation",
        chips: ['SSH ProxyJump', 'Linux Hardening', 'Zero Trust', 'Active Directory'],
        keywords: ['ssh', 'bastion', 'linux', 'ubuntu', 'active directory', 'windows server']
      },
      {
        id: 'audit',
        labelFr: 'Analyse Réseau & Audit',
        labelEn: 'Packet Analysis & Audit',
        catFr: 'Inspection & Diagnostic',
        catEn: 'Inspection & Diagnostics',
        score: 88,
        lvlFr: 'Avancé',
        lvlEn: 'Advanced',
        descFr: "Capture et décodage de flux réseau avec Wireshark et Nmap, identification d'anomalies de trafic (ARP poisoning, scans SYN, failles protocolaires).",
        descEn: "Traffic capture and packet decoding with Wireshark & Nmap, detecting network anomalies (ARP poisoning, SYN scans, protocol flaws).",
        proofFr: "Audits en laboratoires EMSI & Kali Linux",
        proofEn: "EMSI network labs & Kali Linux audits",
        metricFr: "Inspection profonde de paquets",
        metricEn: "Deep Packet Inspection",
        chips: ['Wireshark', 'Nmap', 'Kali Linux', 'Modèle OSI', 'TCP/IP'],
        keywords: ['wireshark', 'nmap', 'kali', 'osi', 'tcp/ip', 'paquets']
      },
      {
        id: 'dev',
        labelFr: 'Scripting & DevSecOps',
        labelEn: 'Scripting & DevSecOps',
        catFr: 'Outils sur-mesure',
        catEn: 'Custom Tooling',
        score: 90,
        lvlFr: 'Avancé',
        lvlEn: 'Advanced',
        descFr: "Développement d'outils de sécurité en Python, dashboards full-stack de visualisation (React, Node.js), consommation d'APIs REST et cryptographie appliquée.",
        descEn: "Security tool development with Python, full-stack visualization dashboards (React, Node.js), REST API ingestion and applied crypto.",
        proofFr: "Plateformes SecureVision & Outils internes",
        proofEn: "SecureVision platforms & internal tools",
        metricFr: "APIs REST & Scripts automatisés",
        metricEn: "REST APIs & Automations",
        chips: ['Python', 'React.js', 'Node.js', 'JWT / bcrypt', 'REST APIs'],
        keywords: ['python', 'react', 'node', 'jwt', 'bcrypt', 'crypto', 'django', 'laravel']
      },
      {
        id: 'cloud',
        labelFr: 'Cloud Sec & Systèmes',
        labelEn: 'Cloud Sec & Systems',
        catFr: 'Infrastructure & Virtualisation',
        catEn: 'Infra & Virtualization',
        score: 86,
        lvlFr: 'Opérationnel',
        lvlEn: 'Operational',
        descFr: "Administration de serveurs Linux (Ubuntu/Debian) & Windows Server, virtualisation sous VMware ESXi, principes de sécurité Cloud Oracle & Google.",
        descEn: "Linux (Ubuntu/Debian) & Windows Server admin, VMware ESXi virtualization, Oracle & Google Cloud security standards.",
        proofFr: "Certifications Oracle & Google Cloud validées",
        proofEn: "Oracle & Google Cloud certifications validated",
        metricFr: "Environnements virtualisés & Cloud",
        metricEn: "Virtualized & Cloud Environments",
        chips: ['Linux Server', 'VMware ESXi', 'Oracle Cloud', 'Google Cloud'],
        keywords: ['linux', 'windows server', 'vmware', 'virtualbox', 'oracle', 'cloud']
      }
    ];

    let activeIndex = 0;
    let animProgress = 0;
    let animRunning = false;
    let pulseTime = 0;
    let isIntersected = false;
    let dpr = 1;
    let cw = 460;
    let ch = 460;
    let cx = 230;
    let cy = 230;
    let radius = 170;

    function isEnglish() {
      return localStorage.getItem('portfolio_lang') === 'en';
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.min(rect.width || 440, 480);
      const displayHeight = displayWidth;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(displayWidth * dpr);
      canvas.height = Math.round(displayHeight * dpr);
      canvas.style.height = `${displayWidth}px`;

      cw = canvas.width;
      ch = canvas.height;
      cx = cw / 2;
      cy = ch / 2;
      radius = Math.min(cw, ch) * 0.35;
    }

    function getAngle(index, total) {
      return (Math.PI * 2 / total) * index - (Math.PI / 2);
    }

    function draw() {
      ctx.clearRect(0, 0, cw, ch);
      const total = radarAxes.length;
      const isEn = isEnglish();

      // 1. Draw web grid (5 concentric polygons)
      const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
      levels.forEach((lvl, idx) => {
        ctx.beginPath();
        for (let i = 0; i < total; i++) {
          const angle = getAngle(i, total);
          const r = radius * lvl;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        ctx.strokeStyle = (idx === levels.length - 1)
          ? 'rgba(0, 245, 212, 0.35)' 
          : 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = (idx === levels.length - 1 ? 1.5 : 1) * dpr;
        ctx.stroke();

        // Level percentage badge on top vertical axis
        if (idx > 0) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
          ctx.font = `${9 * dpr}px 'JetBrains Mono', monospace`;
          ctx.textAlign = 'center';
          ctx.fillText(`${Math.round(lvl * 100)}%`, cx, cy - radius * lvl + (10 * dpr));
        }
      });

      // 2. Draw radial axis lines
      for (let i = 0; i < total; i++) {
        const angle = getAngle(i, total);
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = (i === activeIndex) 
          ? 'rgba(0, 245, 212, 0.45)' 
          : 'rgba(56, 189, 248, 0.15)';
        ctx.lineWidth = (i === activeIndex ? 1.5 : 1) * dpr;
        ctx.stroke();
      }

      // 3. Draw active sector beam
      const activeAngle = getAngle(activeIndex, total);
      const halfStep = Math.PI / total;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, activeAngle - halfStep, activeAngle + halfStep);
      ctx.closePath();
      const beamGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
      beamGrad.addColorStop(0, 'rgba(0, 245, 212, 0.12)');
      beamGrad.addColorStop(1, 'rgba(0, 245, 212, 0)');
      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // 4. Calculate polygon points
      const points = [];
      for (let i = 0; i < total; i++) {
        const angle = getAngle(i, total);
        const targetR = (radarAxes[i].score / 100) * radius;
        const currentR = targetR * animProgress;
        points.push({
          x: cx + Math.cos(angle) * currentR,
          y: cy + Math.sin(angle) * currentR,
          angle: angle,
          outerX: cx + Math.cos(angle) * (radius + 24 * dpr),
          outerY: cy + Math.sin(angle) * (radius + 24 * dpr),
          score: radarAxes[i].score
        });
      }

      // 5. Draw data polygon fill & stroke
      if (points.length > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();

        // Glowing gradient fill
        const polyGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
        polyGrad.addColorStop(0, 'rgba(0, 245, 212, 0.35)');
        polyGrad.addColorStop(0.7, 'rgba(59, 130, 246, 0.22)');
        polyGrad.addColorStop(1, 'rgba(14, 23, 42, 0.1)');
        ctx.fillStyle = polyGrad;
        ctx.fill();

        // Neon outline
        ctx.shadowColor = '#00f5d4';
        ctx.shadowBlur = 14 * dpr;
        ctx.strokeStyle = '#00f5d4';
        ctx.lineWidth = 2.2 * dpr;
        ctx.stroke();
        ctx.restore();
      }

      // 6. Draw vertices and pulsing rings
      points.forEach((pt, idx) => {
        const isActive = (idx === activeIndex);

        // Outer pulsing ring for active
        if (isActive) {
          const pulseR = (8 + Math.sin(pulseTime * 4) * 3) * dpr;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseR, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 245, 212, 0.25)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseR + 4 * dpr, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 245, 212, 0.5)';
          ctx.lineWidth = 1 * dpr;
          ctx.stroke();
        }

        // Inner vertex dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, (isActive ? 5.5 : 4) * dpr, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#ffffff' : '#00f5d4';
        ctx.shadowColor = '#00f5d4';
        ctx.shadowBlur = (isActive ? 12 : 6) * dpr;
        ctx.fill();
        ctx.restore();

        // 7. Axis Label & Score
        const axis = radarAxes[idx];
        const labelText = isEn ? axis.labelEn : axis.labelFr;
        const alignAngle = pt.angle;

        ctx.save();
        ctx.font = `${(isActive ? 12 : 11) * dpr}px 'JetBrains Mono', monospace`;
        ctx.textAlign = Math.abs(Math.cos(alignAngle)) < 0.25 ? 'center' : (Math.cos(alignAngle) > 0 ? 'left' : 'right');
        ctx.textBaseline = Math.sin(alignAngle) > 0.4 ? 'top' : (Math.sin(alignAngle) < -0.4 ? 'bottom' : 'middle');

        if (isActive) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00f5d4';
          ctx.shadowBlur = 8 * dpr;
        } else {
          ctx.fillStyle = 'rgba(226, 232, 240, 0.75)';
        }

        ctx.fillText(labelText, pt.outerX, pt.outerY);

        // Score below or beside label
        ctx.font = `bold ${10 * dpr}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = isActive ? '#00f5d4' : 'rgba(56, 189, 248, 0.7)';
        const scoreOffsetY = Math.sin(alignAngle) < -0.4 ? -(14 * dpr) : (14 * dpr);
        ctx.fillText(`${axis.score}%`, pt.outerX, pt.outerY + (Math.abs(Math.sin(alignAngle)) < 0.4 ? (13 * dpr) : scoreOffsetY));
        ctx.restore();
      });
    }

    function updateDiagnosticPanel(index) {
      if (index < 0 || index >= radarAxes.length) return;
      activeIndex = index;
      const axis = radarAxes[index];
      const isEn = isEnglish();

      const catEl = document.getElementById('radar-diag-category');
      const scoreNumEl = document.querySelector('#radar-diag-score .diag-score-num');
      const scoreLvlEl = document.querySelector('#radar-diag-score .diag-score-lvl');
      const titleEl = document.getElementById('radar-diag-title');
      const barEl = document.getElementById('radar-diag-bar');
      const descEl = document.getElementById('radar-diag-desc');
      const proofEl = document.getElementById('radar-diag-proof');
      const metricEl = document.getElementById('radar-diag-metric');
      const chipsEl = document.getElementById('radar-diag-chips');

      if (catEl) catEl.textContent = isEn ? axis.catEn : axis.catFr;
      if (scoreNumEl) scoreNumEl.textContent = `${axis.score}%`;
      if (scoreLvlEl) scoreLvlEl.textContent = isEn ? axis.lvlEn : axis.lvlFr;
      if (titleEl) titleEl.textContent = isEn ? axis.labelEn : axis.labelFr;
      if (barEl) barEl.style.width = `${axis.score}%`;
      if (descEl) descEl.textContent = isEn ? axis.descEn : axis.descFr;
      if (proofEl) proofEl.textContent = isEn ? axis.proofEn : axis.proofFr;
      if (metricEl) metricEl.textContent = isEn ? axis.metricEn : axis.metricFr;

      if (chipsEl) {
        chipsEl.innerHTML = '';
        axis.chips.forEach(chipName => {
          const chip = document.createElement('span');
          chip.className = 'diag-chip-item';
          chip.textContent = chipName;
          chip.title = `Cliquer pour voir la compétence dans le tableau`;
          chip.addEventListener('click', () => {
            const domainGrid = document.querySelector('.skills-domain-grid');
            if (domainGrid) {
              domainGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
          chipsEl.appendChild(chip);
        });
      }

      // Synchronize highlighting with the grid below
      const allGridChips = document.querySelectorAll('.skills-domain-grid .skill-chip');
      allGridChips.forEach(chip => {
        const text = chip.textContent.toLowerCase();
        const matches = axis.keywords.some(kw => text.includes(kw));
        if (matches) {
          chip.classList.add('chip-radar-active');
        } else {
          chip.classList.remove('chip-radar-active');
        }
      });
    }

    function animateEntrance(startTime) {
      const now = performance.now();
      const elapsed = (now - startTime) / 1000;
      const duration = 1.2;

      if (elapsed < duration) {
        const t = elapsed / duration;
        animProgress = 1 - Math.pow(1 - t, 3);
        pulseTime = elapsed;
        draw();
        requestAnimationFrame(() => animateEntrance(startTime));
      } else {
        animProgress = 1;
        animRunning = false;
        loopContinuousPulse();
      }
    }

    function loopContinuousPulse() {
      pulseTime += 0.035;
      draw();
      requestAnimationFrame(loopContinuousPulse);
    }

    function handlePointer(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) * dpr;
      const y = (clientY - rect.top) * dpr;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20 * dpr) return;

      let angle = Math.atan2(dy, dx);
      angle = (angle + Math.PI / 2);
      if (angle < 0) angle += Math.PI * 2;

      const total = radarAxes.length;
      const step = (Math.PI * 2) / total;
      let closestIdx = Math.round(angle / step) % total;

      if (closestIdx !== activeIndex) {
        updateDiagnosticPanel(closestIdx);
      }
    }

    canvas.addEventListener('mousemove', (e) => {
      handlePointer(e.clientX, e.clientY);
    });

    canvas.addEventListener('click', (e) => {
      handlePointer(e.clientX, e.clientY);
    });

    canvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('resize', () => {
      resizeCanvas();
      draw();
    });

    window.addEventListener('portfolioLanguageChanged', () => {
      updateDiagnosticPanel(activeIndex);
      draw();
    });

    // IntersectionObserver to start animation on scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isIntersected) {
          isIntersected = true;
          resizeCanvas();
          updateDiagnosticPanel(0);
          animRunning = true;
          animateEntrance(performance.now());
        }
      });
    }, { threshold: 0.15 });

    observer.observe(canvas);

    // Initial setup
    resizeCanvas();
    updateDiagnosticPanel(0);
  }

  // Initialize the cyber radar showcase
  initCyberRadar();

});

