/* ============================================================
   POST HUMAN TECHNOLOGIES — main.js (vanilla, sin dependencias)
   Patrones DANTI adaptados: reveals (§1), Lenis (§2), marquee (§3),
   header con scroll (§4), micro-interacciones (§6) + formulario.
   ============================================================ */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var I18n = window.PostHumanI18n || null;

  /* ---------- Lenis: smooth scroll con inercia (DANTI §2) ----------
     Solo con puntero fino y sin prefers-reduced-motion; si el vendor
     no cargó, el CSS scroll-behavior sigue funcionando (silencioso) */
  var lenis = null;
  if (!prefersReducedMotion && finePointer && typeof window.Lenis === 'function') {
    try {
      lenis = new window.Lenis({ autoRaf: true, anchors: true });
      document.documentElement.classList.add('lenis');
    } catch (e) {
      /* Lenis no disponible: se mantiene el smooth scroll de CSS */
    }
  }

  function scrollToTarget(target) {
    if (lenis) {
      lenis.scrollTo(target, { offset: -70 });
    } else if (typeof target === 'string') {
      var el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  }

  /* ---------- Barra de progreso de scroll (única línea del header) ---------- */
  var progress = document.getElementById('scrollProgress');

  function onScroll() {
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    if (I18n) navToggle.setAttribute('aria-label', I18n.t('nav.menu_close'));
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    if (I18n) navToggle.setAttribute('aria-label', I18n.t('nav.menu_open'));
  }

  navToggle.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  /* ---------- Selector de idioma ---------- */
  document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (I18n) I18n.setLang(btn.getAttribute('data-lang'));
    });
  });

  /* ---------- Revelado al scroll (DANTI §1) ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target); /* una sola vez: no re-anima */
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  /* ---------- Contadores animados ---------- */
  var counters = document.querySelectorAll('[data-count]');

  function setFinalValues() {
    counters.forEach(function (el) {
      el.textContent = el._value != null ? el._value : el.getAttribute('data-count');
    });
  }

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    counters.forEach(function (el) {
      el._value = parseInt(el.getAttribute('data-count'), 10);
    });
    setFinalValues();
  } else {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        countObserver.unobserve(el);

        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 1800;
        var startTime = null;

        function tick(now) {
          if (startTime === null) startTime = now;
          var progressCount = Math.min((now - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progressCount, 3);
          el._value = Math.round(target * eased);
          el.textContent = el._value;
          if (progressCount < 1) {
            requestAnimationFrame(tick);
          } else {
            el._value = target;
            el.textContent = target;
          }
        }

        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) {
      el._value = 0;
      el.textContent = '0';
      countObserver.observe(el);
    });
  }

  /* ---------- Enlace activo en la navegación ---------- */
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('main section[id]');

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Tilt magnético del mockup del hero ---------- */
  var heroBrowser = document.getElementById('heroBrowser');

  if (heroBrowser && !prefersReducedMotion && finePointer) {
    var rafId = null;

    heroBrowser.addEventListener('mousemove', function (e) {
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        var rect = heroBrowser.getBoundingClientRect();
        var relX = (e.clientX - rect.left) / rect.width - 0.5;
        var relY = (e.clientY - rect.top) / rect.height - 0.5;
        heroBrowser.style.transform =
          'rotateY(' + (relX * 7).toFixed(2) + 'deg) rotateX(' + (-relY * 7).toFixed(2) + 'deg)';
        rafId = null;
      });
    });

    heroBrowser.addEventListener('mouseleave', function () {
      heroBrowser.style.transform = '';
    });
  }

  /* ---------- Elegir plantilla: pre-rellena el formulario ---------- */
  var form = document.getElementById('contactForm');
  var serviceSelect = document.getElementById('fService');
  var msgInput = document.getElementById('fMsg');

  document.querySelectorAll('.tpl-choose').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tpl = btn.getAttribute('data-template');
      if (serviceSelect) serviceSelect.value = 'template';

      if (tpl && msgInput && msgInput.value.indexOf(tpl) === -1) {
        var prefix = I18n
          ? I18n.t('form.template_prefix')
          : 'Me interesa la plantilla';
        msgInput.value = prefix + ' ' + tpl + '. ' + msgInput.value;
      }

      scrollToTarget('#contacto');
      var nameInput = document.getElementById('fName');
      if (nameInput && !msgInput.value) nameInput.focus({ preventScroll: true });
    });
  });

  /* ---------- FAQ: cerrar los demás al abrir uno ---------- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ---------- Formulario de contacto (mensajes vía i18n) ---------- */
  var formSuccess = document.getElementById('formSuccess');
  var formReset = document.getElementById('formReset');
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function msg(key, fallback) {
    return I18n ? I18n.t(key) : fallback;
  }

  function setError(input, message) {
    var field = input.closest('.field');
    var errorEl = field.querySelector('.field-error');
    field.classList.add('has-error');
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(input) {
    input.closest('.field').classList.remove('has-error');
  }

  function validateField(input) {
    var value = input.value.trim();

    if (input.hasAttribute('required') && !value) {
      setError(input, msg('form.error_required', 'Este campo es obligatorio.'));
      return false;
    }

    if (input.type === 'email' && value && !emailRegex.test(value)) {
      setError(input, msg('form.error_email', 'Ingresa un correo electrónico válido.'));
      return false;
    }

    clearError(input);
    return true;
  }

  if (form) {
    var inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(function (input) {
      input.addEventListener('blur', function () {
        validateField(input);
      });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('has-error')) {
          validateField(input);
        }
      });
      input.addEventListener('change', function () {
        if (input.closest('.field').classList.contains('has-error')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var allValid = true;
      inputs.forEach(function (input) {
        if (!validateField(input)) {
          allValid = false;
        }
      });

      if (!allValid) {
        var firstError = form.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      form.hidden = true;
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    });
  }

  if (formReset) {
    formReset.addEventListener('click', function () {
      form.reset();
      form.hidden = false;
      formSuccess.hidden = true;
      form.querySelectorAll('.field.has-error').forEach(function (field) {
        field.classList.remove('has-error');
      });
    });
  }

  /* ---------- Cambio de idioma: re-validar errores visibles ---------- */
  document.addEventListener('posthuman:langchange', function () {
    if (form) {
      form.querySelectorAll('.field.has-error').forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        if (input) validateField(input);
      });
    }
  });

  /* ---------- Halo bajo el cursor (hero) ----------
     Resplandor suave (lima → violeta) que sigue al puntero con inercia.
     Solo puntero fino y sin prefers-reduced-motion; se pausa cuando el
     hero sale de pantalla. */
  var heroEl = document.querySelector('[data-hero]');
  var heroCursor = document.querySelector('.hero-cursor');

  if (heroEl && heroCursor && !prefersReducedMotion && finePointer) {
    var curX = window.innerWidth / 2;
    var curY = window.innerHeight * 0.35;
    var tgtX = curX;
    var tgtY = curY;
    var cursorRaf = null;

    function cursorLoop() {
      curX += (tgtX - curX) * 0.16;
      curY += (tgtY - curY) * 0.16;
      heroCursor.style.setProperty('--mx', curX.toFixed(1) + 'px');
      heroCursor.style.setProperty('--my', curY.toFixed(1) + 'px');
      cursorRaf = requestAnimationFrame(cursorLoop);
    }

    function startCursor() {
      if (cursorRaf === null) cursorRaf = requestAnimationFrame(cursorLoop);
    }

    function stopCursor() {
      if (cursorRaf !== null) {
        cancelAnimationFrame(cursorRaf);
        cursorRaf = null;
      }
    }

    heroEl.addEventListener('pointermove', function (e) {
      var rect = heroEl.getBoundingClientRect();
      tgtX = e.clientX - rect.left;
      tgtY = e.clientY - rect.top;
      heroCursor.classList.add('is-on');
      startCursor();
    }, { passive: true });

    heroEl.addEventListener('pointerleave', function () {
      heroCursor.classList.remove('is-on');
    });

    if ('IntersectionObserver' in window) {
      var cursorIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) stopCursor();
        });
      }, { threshold: 0.05 });
      cursorIO.observe(heroEl);
    }
  }

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
