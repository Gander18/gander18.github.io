const SPOTIFY_URL = 'https://open.spotify.com/playlist/6IWrQPPMRPdiVHdEldgzyk?si=895dd11543534ada';
const LPB_REPO_URL = 'https://github.com/Gander18/Lite-Pixel-Blood';

const translations = {
  ru: {
    nav_about: 'Кто я',
    nav_skills: 'Навыки',
    nav_bf1: 'Battlefield 1',
    nav_projects: 'Творения',
    nav_plans: 'Планы',
    nav_contacts: 'Контакты',
    hero_greeting: 'Привет, я',
    hero_lead: 'Делаю моды для игр, ковыряюсь в железе и софте, пишу код на C#, C++ и Lua, иногда моделю в Blender. Выжимаю максимум FPS из скромного железа и перекраиваю системы под себя.',
    aka_label: 'Также известен как:',
    aka_more: 'и т.д.',
    rig_title: 'ПК и софт',
    rig_hw_k: 'ПК:',
    rig_sw_k: 'Софт:',
    sec_skills: 'Что я делаю',
    skill_1_title: 'Моддинг и геймдев',
    skill_1_desc: 'Пишу моды в основном под People Playground, в планах взяться за другие игры. Ковыряюсь в Godot Engine и собираю базовые 3D-модели в Blender.',
    skill_2_title: 'Оптимизация и твикинг',
    skill_2_desc: 'Настраиваю систему, делаю конфиги, патчи и фиксы для игр, чтобы всё работало плавно даже на слабом железе.',
    skill_3_title: 'Игры и музыка',
    skill_3_desc: 'Зависаю в Battlefield 1 и Fortnite. Слушаю тяжёлый метал, альтернативу и саундтреки из японских игр.',
    bgm_btn: 'Spotify Playlist',
    sec_bf1: 'Battlefield 1',
    stat_kills: 'Убийства',
    stat_win: 'Победы',
    stat_spm: 'Очки / мин',
    stat_time: 'В игре',
    stat_class: 'Класс',
    bf1_main_k: 'Основное оружие:',
    bf1_main_weapon: 'M1917 MG (Лёгкий / Линза — по карте)',
    bf1_top_k: 'Больше всего убийств:',
    sec_projects: 'Мои творения',
    proj_lpb_desc: 'Мод для People Playground с оптимизированной пиксельной кровью и гибкими настройками. Более 15 000 подписчиков в мастерской.',
    proj_lpb_btn: 'GitHub Репозиторий',
    proj_subs_label: 'подписчиков',
    sec_plans: 'Планы',
    status_active: 'В работе',
    status_planned: 'В планах',
    status_idea: 'Идея',
    plan_1_desc: 'Полный перенос оригинального LPB на язык Lua.',
    plan_2_desc: 'Визуальная модель крови вместо стандартной физики: фонтаны с затуханием, следы по конечностям и слияние луж без лишней нагрузки на PhysX.',
    plan_3_title: 'Переработка жидкостей в PPG',
    plan_3_desc: 'Обновление поведения и физики жидкостей в People Playground (название ещё в разработке).',
    plan_4_title: 'Развитие этого сайта',
    plan_4_desc: 'Дорабатывать интерфейс, добавлять ссылки на проекты и улучшать разделы.',
    sec_contacts: 'Контакты',
    contacts_desc: 'Открой профиль или скопируй ник в буфер обмена:',
    copy_discord: 'Discord · Копировать',
    copy_epic: 'Epic Games · Копировать',
    copied_ok: 'Скопировано!',
    copied_err: 'Ошибка',
    bf1_syncing: '[SYNCING...]',
    bf1_live: '[LIVE API]',
    bf1_err: '[SYNC ERROR]',
    bf1_na: 'N/A'
  },
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_bf1: 'Battlefield 1',
    nav_projects: 'Projects',
    nav_plans: 'Plans',
    nav_contacts: 'Contacts',
    hero_greeting: 'Hi, I am',
    hero_lead: 'Making game mods, tweaking hardware and software, coding in C#, C++ and Lua, occasionally modeling in Blender. Squeezing max FPS out of modest hardware and tuning systems to fit me.',
    aka_label: 'Also known as:',
    aka_more: 'etc.',
    rig_title: 'PC & Software',
    rig_hw_k: 'PC:',
    rig_sw_k: 'Software:',
    sec_skills: 'What I do',
    skill_1_title: 'Modding & Gamedev',
    skill_1_desc: 'Making mods mostly for People Playground, planning to explore other games. Tinkering with Godot Engine and building basic 3D models in Blender.',
    skill_2_title: 'Optimization & Tweaking',
    skill_2_desc: 'Tuning system settings, configs, patches, and fixes so games run smooth even on lower-end hardware.',
    skill_3_title: 'Games & Music',
    skill_3_desc: 'Playing Battlefield 1 and Fortnite. Listening to heavy metal, alternative rock, and Japanese game OSTs.',
    bgm_btn: 'Spotify Playlist',
    sec_bf1: 'Battlefield 1',
    stat_kills: 'Kills',
    stat_win: 'Win rate',
    stat_spm: 'Score / min',
    stat_time: 'Playtime',
    stat_class: 'Top class',
    bf1_main_k: 'Main weapon:',
    bf1_main_weapon: 'M1917 MG (Low Weight / Telescopic — map dependent)',
    bf1_top_k: 'Top by kills:',
    sec_projects: 'My creations',
    proj_lpb_desc: 'People Playground mod with optimized pixel blood and flexible settings. Over 15,000 subscribers on the Steam Workshop.',
    proj_lpb_btn: 'GitHub Repository',
    proj_subs_label: 'subscribers',
    sec_plans: 'Plans',
    status_active: 'In progress',
    status_planned: 'Planned',
    status_idea: 'Idea',
    plan_1_desc: 'Porting the original LPB mod to Lua.',
    plan_2_desc: 'Visual blood model instead of standard physics: decaying sprays, limb trails, and puddle merging with zero extra PhysX load.',
    plan_3_title: 'PPG Liquid Rework',
    plan_3_desc: 'Reworking liquid behavior and physics in People Playground (working title).',
    plan_4_title: 'Website Updates',
    plan_4_desc: 'Improving layout, adding project links, and refining sections.',
    sec_contacts: 'Contacts',
    contacts_desc: 'Open a profile or copy a handle to clipboard:',
    copy_discord: 'Discord · Copy',
    copy_epic: 'Epic Games · Copy',
    copied_ok: 'Copied!',
    copied_err: 'Failed',
    bf1_syncing: '[SYNCING...]',
    bf1_live: '[LIVE API]',
    bf1_err: '[SYNC ERROR]',
    bf1_na: 'N/A'
  }
};

let currentLang = localStorage.getItem('gander18_lang') || 'ru';
const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gander18_lang', lang);
  document.documentElement.lang = lang;

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'ru' ? 'RU / EN' : 'EN / RU';
  }

  const dict = translations[lang];
  for (let i = 0; i < i18nElements.length; i++) {
    const el = i18nElements[i];
    const key = el.getAttribute('data-i18n');
    const nextHtml = dict[key];
    if (nextHtml !== undefined && el.innerHTML !== nextHtml) {
      el.innerHTML = nextHtml;
    }
  }
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ru' ? 'en' : 'ru';
    applyLanguage(nextLang);
    loadBF1Stats();
  });
}

function fallbackCopy(text) {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const ok = document.execCommand('copy');
      if (ok) resolve();
      else reject(new Error('execCommand returned false'));
    } catch (err) {
      reject(err);
    } finally {
      document.body.removeChild(textArea);
    }
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return fallbackCopy(text);
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const textToCopy = btn.getAttribute('data-copy');
    const valSpan = btn.querySelector('.contact-val');
    if (!valSpan) return;

    const originalText = valSpan.textContent;
    const dict = translations[currentLang];

    copyToClipboard(textToCopy)
      .then(() => {
        valSpan.textContent = dict.copied_ok;
      })
      .catch(() => {
        valSpan.textContent = dict.copied_err;
      })
      .finally(() => {
        setTimeout(() => {
          valSpan.textContent = originalText;
        }, 1500);
      });
  });
});

function renderBF1Data(data, statusLabel, state) {
  const locale = currentLang === 'ru' ? 'ru-RU' : 'en-US';

  if (data.rank !== undefined) {
    document.getElementById('bf1-rank').textContent = `RANK ${data.rank}`;
  }
  if (data.killDeath !== undefined) {
    document.getElementById('bf1-kd').textContent = data.killDeath;
  }
  if (data.winPercent !== undefined) {
    document.getElementById('bf1-win').textContent = data.winPercent;
  }
  if (data.scorePerMinute !== undefined) {
    document.getElementById('bf1-spm').textContent = Number(data.scorePerMinute).toLocaleString(locale, {
      maximumFractionDigits: 2
    });
  }
  if (data.kills !== undefined) {
    document.getElementById('bf1-kills').textContent = Number(data.kills).toLocaleString(locale);
  }
  if (data.secondsPlayed !== undefined) {
    const hours = Math.floor(data.secondsPlayed / 3600);
    document.getElementById('bf1-time').textContent = currentLang === 'ru' ? `${hours} ч` : `${hours}h`;
  }
  if (data.bestClass) {
    document.getElementById('bf1-class').textContent = data.bestClass.toUpperCase();
  }
  if (Array.isArray(data.weapons) && data.weapons.length > 0) {
    const topWeapon = [...data.weapons].sort((a, b) => b.kills - a.kills)[0];
    if (topWeapon && topWeapon.weaponName) {
      document.getElementById('bf1-weapon').textContent = `${topWeapon.weaponName} (${Number(topWeapon.kills).toLocaleString(locale)} kills)`;
    }
  }

  const syncEl = document.getElementById('bf1-sync');
  if (syncEl) {
    syncEl.textContent = statusLabel;
    syncEl.classList.toggle('live', state === 'live');
    syncEl.classList.toggle('error', state === 'error');
  }
}

function renderBF1Unavailable() {
  const dict = translations[currentLang];
  const na = dict.bf1_na;

  document.getElementById('bf1-rank').textContent = na;
  document.getElementById('bf1-kd').textContent = na;
  document.getElementById('bf1-win').textContent = na;
  document.getElementById('bf1-spm').textContent = na;
  document.getElementById('bf1-kills').textContent = na;
  document.getElementById('bf1-time').textContent = na;
  document.getElementById('bf1-class').textContent = na;
  document.getElementById('bf1-weapon').textContent = na;

  const syncEl = document.getElementById('bf1-sync');
  if (syncEl) {
    syncEl.textContent = dict.bf1_err;
    syncEl.classList.remove('live');
    syncEl.classList.add('error');
  }
}

async function loadBF1Stats() {
  const dict = translations[currentLang];
  const apiLang = currentLang === 'ru' ? 'ru-ru' : 'en-us';
  const cacheKey = `gander18_bf1_${apiLang}`;
  const CACHE_TTL = 15 * 60 * 1000;
  const FETCH_TIMEOUT = 5000;

  try {
    const cachedRaw = localStorage.getItem(cacheKey);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && cached.data && typeof cached.timestamp === 'number') {
        if (Date.now() - cached.timestamp < CACHE_TTL) {
          renderBF1Data(cached.data, dict.bf1_live, 'live');
          return;
        }
        localStorage.removeItem(cacheKey);
      } else {
        localStorage.removeItem(cacheKey);
      }
    }
  } catch (e) {
    try { localStorage.removeItem(cacheKey); } catch (_) {}
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  const apiUrl = `https://api.gametools.network/bf1/stats/?name=PrimaGander18&platform=pc&lang=${apiLang}`;

  try {
    const response = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data: data
    }));

    renderBF1Data(data, dict.bf1_live, 'live');
  } catch (err) {
    clearTimeout(timeoutId);
    renderBF1Unavailable();
  }
}

applyLanguage(currentLang);
loadBF1Stats();