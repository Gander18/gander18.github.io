const SPOTIFY_URL = 'https://open.spotify.com/playlist/6IWrQPPMRPdiVHdEldgzyk?si=895dd11543534ada';
const LPB_REPO_URL = 'https://github.com/Gander18/Lite-Pixel-Blood';
const BF1_CACHE_KEY = 'gander18_bf1_stats_v1';
const LANG_COOKIE_NAME = 'gander18_lang';

const translations = {
  ru: {
    nav_about: 'Кто я',
    nav_skills: 'Навыки',
    nav_bf1: 'Battlefield 1',
    nav_projects: 'Творения',
    nav_plans: 'Планы',
    nav_games: 'Игры 100%',
    nav_music: 'Музыка',
    nav_contacts: 'Контакты',
    hero_greeting: 'Привет, я',
    hero_lead: 'Делаю моды для игр, ковыряюсь в железе и софте, пишу на C#, C++ и Lua, иногда моделю в Blender. Выжимаю максимум FPS из скромного железа и перекраиваю системы под себя.',
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
    bgm_jump_btn: 'К плееру',
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
    ver_4: 'Версия 4',
    ver_3_1: 'Версия 3.1',
    ver_2_1: 'Версия 2.1',
    ver_1: 'Версия 1',
    yt_watch_btn: 'Смотреть на YouTube ▶',
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
    plan_4_title: 'Первая анимация в Unreal Engine',
    plan_4_desc: 'Собрать сцену и сделать первую анимацию в Unreal Engine.',
    sec_games: 'Игры · 100%',
    filter_all: 'Все',
    filter_100: '100% Ачивок',
    filter_fav: 'Любимые',
    steam_games_btn: 'Все игры в Steam',
    games_expand: 'Развернуть список',
    games_collapse: 'Свернуть список',
    sec_music: 'Музыка',
    music_card_title: 'Плейлист Spotify',
    music_card_desc: 'Тяжёлый метал, альтернатива и саундтреки из японских игр.',
    bgm_btn: 'Открыть в Spotify',
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
    nav_games: 'Игры 100%',
    nav_music: 'Music',
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
    bgm_jump_btn: 'Go to player',
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
    ver_4: 'Version 4',
    ver_3_1: 'Version 3.1',
    ver_2_1: 'Version 2.1',
    ver_1: 'Version 1',
    yt_watch_btn: 'Watch on YouTube ▶',
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
    plan_4_title: 'First Animation in Unreal Engine',
    plan_4_desc: 'Set up a scene and make a first animation in Unreal Engine.',
    sec_games: 'Games · 100%',
    filter_all: 'All',
    filter_100: '100% Achievements',
    filter_fav: 'Favorites',
    steam_games_btn: 'All Steam Games',
    games_expand: 'Expand list',
    games_collapse: 'Collapse list',
    sec_music: 'Music',
    music_card_title: 'Spotify Playlist',
    music_card_desc: 'Heavy metal, alternative rock, and Japanese game OSTs.',
    bgm_btn: 'Open in Spotify',
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

function getCookie(name) {
  const parts = document.cookie ? document.cookie.split('; ') : [];
  for (let i = 0; i < parts.length; i++) {
    const idx = parts[i].indexOf('=');
    if (idx > 0 && parts[i].slice(0, idx) === name) {
      return decodeURIComponent(parts[i].slice(idx + 1));
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

function readInitialLang() {
  const fromCookie = getCookie(LANG_COOKIE_NAME);
  if (fromCookie === 'ru' || fromCookie === 'en') return fromCookie;
  try {
    const fromStorage = localStorage.getItem('gander18_lang');
    if (fromStorage === 'ru' || fromStorage === 'en') return fromStorage;
  } catch (_) {}
  return 'ru';
}

let currentLang = readInitialLang();
let latestBF1Data = null;
const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));

function applyLanguage(lang) {
  currentLang = lang;
  setCookie(LANG_COOKIE_NAME, lang, 365);
  try {
    localStorage.setItem('gander18_lang', lang);
  } catch (_) {}
  document.documentElement.lang = lang;

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'ru' ? 'RU / EN' : 'EN / RU';
  }

  const dict = translations[lang];
  for (let i = 0; i < i18nElements.length; i++) {
    const el = i18nElements[i];
    const key = el.getAttribute('data-i18n');
    const nextText = dict[key];
    if (nextText !== undefined && el.textContent !== nextText) {
      el.textContent = nextText;
    }
  }
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ru' ? 'en' : 'ru';
    applyLanguage(nextLang);
    renderGamesList();
    if (latestBF1Data) {
      renderBF1Data(latestBF1Data, translations[currentLang].bf1_live, 'live');
    } else {
      loadBF1Stats();
    }
  });
}

const STEAM_GAMES_LIST = [
  { title: 'People Playground', hours: '527.6 ч', hoursEn: '527.6h', is100: true, isFav: true, noteRu: '17/17 ачивок · Моддинг', noteEn: '17/17 achievements · Modding' },
  { title: 'Hotline Miami 2: Wrong Number', hours: '53.7 ч', hoursEn: '53.7h', is100: true, isFav: true, noteRu: '29/29 ачивок', noteEn: '29/29 achievements' },
  { title: 'Far Cry 3', hours: '45 ч', hoursEn: '45h', is100: true, isFav: true, noteRu: '44/44 ачивок', noteEn: '44/44 achievements' },
  { title: 'Watch_Dogs 2', hours: '32.9 ч', hoursEn: '32.9h', is100: true, isFav: false, noteRu: '55/55 ачивок', noteEn: '55/55 achievements' },
  { title: 'Portal 2', hours: '32.1 ч', hoursEn: '32.1h', is100: true, isFav: false, noteRu: '51/51 ачивок', noteEn: '51/51 achievements' },
  { title: 'Everlasting Summer', hours: '14.4 ч', hoursEn: '14.4h', is100: true, isFav: false, noteRu: '14/14 ачивок', noteEn: '14/14 achievements' },
  { title: 'Pixel Gun 3D: PC Edition', hours: '13.7 ч', hoursEn: '13.7h', is100: true, isFav: false, noteRu: '16/16 ачивок', noteEn: '16/16 achievements' },
  { title: 'Hotline Miami', hours: '12.1 ч', hoursEn: '12.1h', is100: true, isFav: false, noteRu: '35/35 ачивок', noteEn: '35/35 achievements' },
  { title: 'My Friend Pedro', hours: '8.7 ч', hoursEn: '8.7h', is100: true, isFav: false, noteRu: '30/30 ачивок', noteEn: '30/30 achievements' },
  { title: 'BADLAND: Game of the Year Edition', hours: '8 ч', hoursEn: '8h', is100: true, isFav: false, noteRu: '78/78 ачивок', noteEn: '78/78 achievements' },
  { title: 'CARRION', hours: '7.6 ч', hoursEn: '7.6h', is100: true, isFav: false, noteRu: '21/21 ачивок', noteEn: '21/21 achievements' },
  { title: 'Deponia', hours: '7.6 ч', hoursEn: '7.6h', is100: true, isFav: false, noteRu: '19/19 ачивок', noteEn: '19/19 achievements' },
  { title: 'Edna & Harvey: The Breakout - Anniversary Edition', hours: '7.4 ч', hoursEn: '7.4h', is100: true, isFav: false, noteRu: '18/18 ачивок', noteEn: '18/18 achievements' },
  { title: 'QUICKERFLAK', hours: '6.6 ч', hoursEn: '6.6h', is100: true, isFav: false, noteRu: '9/9 ачивок', noteEn: '9/9 achievements' },
  { title: 'Distant Space', hours: '5.2 ч', hoursEn: '5.2h', is100: true, isFav: false, noteRu: '44/44 ачивок', noteEn: '44/44 achievements' },
  { title: 'Zup! XS', hours: '5.2 ч', hoursEn: '5.2h', is100: true, isFav: false, noteRu: '97/97 ачивок', noteEn: '97/97 achievements' },
  { title: 'Trip to Vinelands', hours: '5.1 ч', hoursEn: '5.1h', is100: true, isFav: false, noteRu: '5/5 ачивок', noteEn: '5/5 achievements' },
  { title: 'NEKOPARA Vol. 0', hours: '5 ч', hoursEn: '5h', is100: true, isFav: false, noteRu: '13/13 ачивок', noteEn: '13/13 achievements' },
  { title: 'Zup! 8', hours: '5 ч', hoursEn: '5h', is100: true, isFav: false, noteRu: '2220/2220 ачивок', noteEn: '2220/2220 achievements' },
  { title: 'TTV2', hours: '4.9 ч', hoursEn: '4.9h', is100: true, isFav: false, noteRu: '5/5 ачивок', noteEn: '5/5 achievements' },
  { title: 'Zup! S', hours: '4.4 ч', hoursEn: '4.4h', is100: true, isFav: false, noteRu: '800/800 ачивок', noteEn: '800/800 achievements' },
  { title: 'CHUCHEL', hours: '4.1 ч', hoursEn: '4.1h', is100: true, isFav: false, noteRu: '7/7 ачивок', noteEn: '7/7 achievements' },
  { title: 'Mouse (Sneaking)', hours: '3.8 ч', hoursEn: '3.8h', is100: true, isFav: false, noteRu: '2975/2975 ачивок', noteEn: '2975/2975 achievements' },
  { title: "DUSK '82", hours: '95 мин', hoursEn: '95m', is100: true, isFav: false, noteRu: '14/14 ачивок', noteEn: '14/14 achievements' },
  { title: 'Helltaker', hours: '91 мин', hoursEn: '91m', is100: true, isFav: false, noteRu: '10/10 ачивок', noteEn: '10/10 achievements' },
  { title: 'last seen online', hours: '41 мин', hoursEn: '41m', is100: true, isFav: false, noteRu: '11/11 ачивок', noteEn: '11/11 achievements' },
  { title: 'RetroMaze', hours: '28 мин', hoursEn: '28m', is100: true, isFav: false, noteRu: '232/232 ачивок', noteEn: '232/232 achievements' },
  { title: 'Run Zeus Run', hours: '13 мин', hoursEn: '13m', is100: true, isFav: false, noteRu: '170/170 ачивок', noteEn: '170/170 achievements' },
  { title: 'ВЗЛОМ ЖОПЫ', hours: '4 мин', hoursEn: '4m', is100: true, isFav: false, noteRu: '20/20 ачивок', noteEn: '20/20 achievements' },
  { title: 'Achievement Clicker 2019', hours: '—', hoursEn: '—', is100: true, isFav: false, noteRu: '5000/5000 ачивок', noteEn: '5000/5000 achievements' },
  { title: 'Miss Neko 3', hours: '—', hoursEn: '—', is100: true, isFav: false, noteRu: '100/100 ачивок', noteEn: '100/100 achievements' },
  { title: 'Pretty Neko', hours: '—', hoursEn: '—', is100: true, isFav: false, noteRu: '100/100 ачивок', noteEn: '100/100 achievements' },
  { title: 'Zup! 2', hours: '—', hoursEn: '—', is100: true, isFav: false, noteRu: '229/229 ачивок', noteEn: '229/229 achievements' },
  { title: 'PAYDAY 2', hours: '—', hoursEn: '—', is100: false, isFav: true, noteRu: 'Избранное', noteEn: 'Favorite' },
  { title: 'Brotato', hours: '—', hoursEn: '—', is100: false, isFav: true, noteRu: 'Избранное', noteEn: 'Favorite' },
  { title: 'Deus Ex: Human Revolution', hours: '—', hoursEn: '—', is100: false, isFav: true, noteRu: 'Избранное', noteEn: 'Favorite' },
  { title: 'The Binding of Isaac: Repentance+', hours: '82.1 ч', hoursEn: '82.1h', is100: false, isFav: true, noteRu: 'Синергии и забеги', noteEn: 'Synergies & runs' },
  { title: 'Battlefield 1', hours: '57 ч', hoursEn: '57h', is100: false, isFav: true, noteRu: 'Без HUD · Support', noteEn: 'No HUD · Support' }
];

const GAMES_COLLAPSED_LIMIT = 4;
let currentGameFilter = 'all';
let isGamesExpanded = false;

function renderGamesList() {
  const listEl = document.getElementById('games-list');
  if (!listEl) return;

  const dict = translations[currentLang];
  const filtered = STEAM_GAMES_LIST.filter(g => {
    if (currentGameFilter === '100') return g.is100;
    if (currentGameFilter === 'fav') return g.isFav;
    return true;
  });

  const expandBtn = document.getElementById('games-expand-btn');
  const visible = isGamesExpanded ? filtered : filtered.slice(0, GAMES_COLLAPSED_LIMIT);

  if (expandBtn) {
    if (filtered.length <= GAMES_COLLAPSED_LIMIT) {
      expandBtn.style.display = 'none';
    } else {
      expandBtn.style.display = 'inline-block';
      expandBtn.textContent = isGamesExpanded ? dict.games_collapse : dict.games_expand;
    }
  }

  listEl.innerHTML = '';
  visible.forEach(g => {
    const card = document.createElement('div');
    card.className = g.is100 ? 'game-item is-100' : 'game-item';

    const info = document.createElement('div');
    info.className = 'game-info';

    const title = document.createElement('span');
    title.className = 'game-title';
    title.textContent = g.title;

    const meta = document.createElement('span');
    meta.className = 'game-meta';
    const note = currentLang === 'ru' ? g.noteRu : g.noteEn;
    const hrs = currentLang === 'ru' ? g.hours : g.hoursEn;
    meta.textContent = g.is100 ? note : `${hrs} · ${note}`;

    info.appendChild(title);
    info.appendChild(meta);

    const badge = document.createElement('span');
    badge.className = g.is100 ? 'game-badge badge-100' : 'game-badge';
    badge.textContent = g.is100 ? '100%' : 'FAV';

    card.appendChild(info);
    card.appendChild(badge);
    listEl.appendChild(card);
  });
}

document.querySelectorAll('[data-game-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentGameFilter = btn.getAttribute('data-game-filter') || 'all';
    document.querySelectorAll('[data-game-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGamesList();
  });
});

// Мемный звук при копировании: "Vine Boom + 8-bit coin" на Web Audio API (без внешних файлов)
let sharedAudioCtx = null;

function playMemeCopySound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }

    const now = sharedAudioCtx.currentTime;

    // 1. Низкий мемный "VINE BOOM" удар
    const boomOsc = sharedAudioCtx.createOscillator();
    const boomGain = sharedAudioCtx.createGain();
    boomOsc.type = 'sine';
    boomOsc.frequency.setValueAtTime(145, now);
    boomOsc.frequency.exponentialRampToValueAtTime(34, now + 0.42);

    boomGain.gain.setValueAtTime(0.45, now);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    boomOsc.connect(boomGain);
    boomGain.connect(sharedAudioCtx.destination);
    boomOsc.start(now);
    boomOsc.stop(now + 0.46);

    // 2. Короткий 8-битный "дзынь" монетки поверх
    const coinOsc = sharedAudioCtx.createOscillator();
    const coinGain = sharedAudioCtx.createGain();
    coinOsc.type = 'square';
    coinOsc.frequency.setValueAtTime(987.77, now + 0.03);
    coinOsc.frequency.setValueAtTime(1318.51, now + 0.1);

    coinGain.gain.setValueAtTime(0.12, now + 0.03);
    coinGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    coinOsc.connect(coinGain);
    coinGain.connect(sharedAudioCtx.destination);
    coinOsc.start(now + 0.03);
    coinOsc.stop(now + 0.29);
  } catch (_) {}
}

const gamesExpandBtn = document.getElementById('games-expand-btn');
if (gamesExpandBtn) {
  gamesExpandBtn.addEventListener('click', () => {
    isGamesExpanded = !isGamesExpanded;
    renderGamesList();
  });
}

const lpbFrame = document.getElementById('lpb-yt-frame');
const verTabs = document.querySelectorAll('.ver-tab');

if (lpbFrame && verTabs.length > 0) {
  verTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const videoId = tab.getAttribute('data-yt');
      if (!videoId) return;

      verTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const nextSrc = `https://www.youtube.com/embed/${videoId}`;
      if (lpbFrame.getAttribute('src') !== nextSrc) {
        lpbFrame.setAttribute('src', nextSrc);
      }
    });
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
        playMemeCopySound();
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
  latestBF1Data = data;
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
  const CACHE_TTL = 15 * 60 * 1000;
  const FETCH_TIMEOUT = 5000;

  try {
    const cachedRaw = localStorage.getItem(BF1_CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && cached.data && typeof cached.timestamp === 'number') {
        if (Date.now() - cached.timestamp < CACHE_TTL) {
          renderBF1Data(cached.data, dict.bf1_live, 'live');
          return;
        }
        localStorage.removeItem(BF1_CACHE_KEY);
      } else {
        localStorage.removeItem(BF1_CACHE_KEY);
      }
    }
  } catch (e) {
    try { localStorage.removeItem(BF1_CACHE_KEY); } catch (_) {}
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  const apiUrl = 'https://api.gametools.network/bf1/stats/?name=PrimaGander18&platform=pc&lang=en-us';

  try {
    const response = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    localStorage.setItem(BF1_CACHE_KEY, JSON.stringify({
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
renderGamesList();
loadBF1Stats();