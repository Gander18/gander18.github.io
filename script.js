const SPOTIFY_URL = 'https://open.spotify.com/playlist/6IWrQPPMRPdiVHdEldgzyk?si=895dd11543534ada';
const LPB_REPO_URL = 'https://github.com/Gander18/Lite-Pixel-Blood';

document.querySelectorAll('.highlight-cut').forEach(el => {
  if (!el.getAttribute('data-text')) {
    el.setAttribute('data-text', el.textContent.trim());
  }
});

const translations = {
  ru: {
    nav_about: 'КТО_Я',
    nav_skills: 'НАВЫКИ',
    nav_bf1: 'BF1_СТАТА',
    nav_projects: 'ТВОРЕНИЯ',
    nav_plans: 'ПЛАНЫ',
    nav_contacts: 'СВЯЗЬ',
    hero_greeting: 'ПРИВЕТ, Я',
    hero_lead: '&gt; Делаю моды для игр, ковыряюсь в железе и софте, пишу код на C#, C++ и Lua, иногда моделю в Blender.<br>&gt; Выжимаю максимум FPS из скромного железа и перекраиваю системы под себя.',
    aka_label: '&gt; ТАКЖЕ ИЗВЕСТЕН КАК:',
    aka_more: 'и т.д.',
    cli_placeholder: 'введи help, bgm или take your heart...',
    sec_skills: 'ЧТО Я ДЕЛАЮ',
    skill_1_title: 'Моддинг и геймдев',
    skill_1_desc: 'Пишу моды (в основном под People Playground, в планах начать разбирать другие проекты), ковыряюсь в Godot Engine и собираю базовые 3D-модели в Blender.',
    skill_2_title: 'Оптимизация и твикинг',
    skill_2_desc: 'Ковыряюсь в системных настройках, делаю конфиги, патчи и фиксы для игр, чтобы всё работало плавно даже на слабом железе.',
    skill_3_title: 'Игры и музыка',
    skill_3_desc: 'Зависаю в Battlefield 1 и Fortnite. Слушаю тяжёлый метал, альтернативу и саундтреки из японских игр.',
    bgm_btn: 'BGM_ПОТОК // SPOTIFY ↗',
    sec_bf1: 'BATTLEFIELD 1 // ДОСЬЕ',
    bf1_main_weapon: 'M1917 MG (Лёгкий / Линза — по карте)',
    sec_projects: 'МОИ ТВОРЕНИЯ',
    proj_lpb_desc: 'Мод для People Playground с оптимизированной пиксельной кровью и гибкими настройками. Более 15 000 подписчиков в мастерской.',
    proj_lpb_btn: 'GITHUB РЕПОЗИТОРИЙ ↗',
    proj_subs_label: 'ПОДПИСЧИКОВ',
    sec_plans: 'ПЛАНЫ НА БУДУЩЕЕ',
    plan_1_desc: 'Полный перенос оригинального LPB на язык Lua.',
    plan_2_desc: 'Замена стандартной физики крови в People Playground на визуальную модель: артериальные фонтаны с затуханием, текстурные подтёки по конечностям и слияние луж с 0% нагрузки на PhysX.',
    plan_3_title: 'Переосмысление жидкостей в PPG (название в разработке)',
    plan_3_desc: 'Глобальная переработка поведения и физики жидкостей в People Playground.',
    plan_4_title: 'Развитие этого терминала',
    plan_4_desc: 'Докрутить интерфейс, подключить рабочие ссылки на проекты и расширить функционал.',
    sec_contacts: 'КАНАЛЫ СВЯЗИ',
    contacts_desc: '&gt; Выбери узел для прямого подключения или скопируй тег в буфер обмена:',
    footer_note: 'ЛИЧНЫЙ ТЕРМИНАЛ // GANDER18',
    cmd_help: 'Доступные команды: status, stack, bgm, repo, aliases, clear, take your heart',
    cmd_status: '[OK] Система стабильна. Физика крови переведена в 0% PhysX mode.',
    cmd_stack: 'Языки: C#, C++, Lua | Софт: Godot Engine, Blender, Visual Studio.',
    cmd_aliases: 'Известные позывные: Gander18, primagander18, gander, primagander228, gander18sus и др.',
    cmd_repo: `📦 REPO: <a href="${LPB_REPO_URL}" target="_blank" rel="noopener" style="color: var(--red-accent-text); text-decoration: underline;">GitHub / Lite-Pixel-Blood ↗</a>`,
    cmd_bgm: `🎵 BGM_STREAM: <a href="${SPOTIFY_URL}" target="_blank" rel="noopener" style="color: var(--red-accent-text); text-decoration: underline;">Открыть плейлист в Spotify ↗</a>`,
    cmd_heart: '⚡ CALLING CARD SENT: Похищаем ваш FPS и возвращаем в двойном объёме.',
    cmd_layout: '⚠️ Эй, гений, раскладку на английскую переключи! Терминал понимает только латиницу.',
    cmd_unknown: 'Команда "{cmd}" не найдена. Введи <b>help</b>.',
    copied_ok: 'СКОПИРОВАНО!',
    copied_err: 'ОШИБКА КОПИРОВАНИЯ',
    bf1_no_data: 'N/A',
    bf1_sync_err: '[SYNC ERROR]'
  },
  en: {
    nav_about: 'WHO_AM_I',
    nav_skills: 'SKILLS',
    nav_bf1: 'BF1_STATS',
    nav_projects: 'ARCHIVES',
    nav_plans: 'ROADMAP',
    nav_contacts: 'COMMS',
    hero_greeting: 'HEY, I AM',
    hero_lead: '&gt; Creating game mods, tweaking hardware and software, coding in C#, C++ and Lua, occasionally 3D modeling in Blender.<br>&gt; Squeezing maximum FPS out of modest hardware and customizing systems to my liking.',
    aka_label: '&gt; ALSO KNOWN AS:',
    aka_more: 'etc.',
    cli_placeholder: 'type help, bgm or take your heart...',
    sec_skills: 'WHAT I DO',
    skill_1_title: 'Modding & Gamedev',
    skill_1_desc: 'Developing mods (mostly for People Playground, planning to tear into other games soon), tinkering with Godot Engine, and making basic 3D models in Blender.',
    skill_2_title: 'Optimization & Tweaking',
    skill_2_desc: 'Digging into system settings, crafting configs, patches, and game fixes to keep everything running smooth even on low-end hardware.',
    skill_3_title: 'Games & Music',
    skill_3_desc: 'Grinding Battlefield 1 and Fortnite. Listening to heavy metal, alternative rock, and Japanese video game OSTs.',
    bgm_btn: 'BGM_STREAM // SPOTIFY ↗',
    sec_bf1: 'BATTLEFIELD 1 // DOSSIER',
    bf1_main_weapon: 'M1917 MG (Low Weight / Telescopic — map dependent)',
    sec_projects: 'MY CREATIONS',
    proj_lpb_desc: 'People Playground mod featuring optimized pixel blood and flexible settings. Over 15,000 subscribers on the Steam Workshop.',
    proj_lpb_btn: 'GITHUB REPOSITORY ↗',
    proj_subs_label: 'SUBSCRIBERS',
    sec_plans: 'FUTURE ROADMAP',
    plan_1_desc: 'Full port of the original LPB mod to Lua.',
    plan_2_desc: 'Replacing standard blood physics in People Playground with a visual model: decaying arterial sprays, limb blood trails, and puddle merging with 0% PhysX overhead.',
    plan_3_title: 'PPG Liquid Overhaul (Name TBD)',
    plan_3_desc: 'Complete rework of liquid behavior and physics in People Playground.',
    plan_4_title: 'Terminal Upgrades',
    plan_4_desc: 'Polishing the UI, linking active projects, and expanding terminal features.',
    sec_contacts: 'COMMS CHANNELS',
    contacts_desc: '&gt; Select a node for direct connection or click to copy tag to clipboard:',
    footer_note: 'PERSONAL TERMINAL // GANDER18',
    cmd_help: 'Available commands: status, stack, bgm, repo, aliases, clear, take your heart',
    cmd_status: '[OK] System nominal. Blood physics switched to 0% PhysX mode.',
    cmd_stack: 'Languages: C#, C++, Lua | Tools: Godot Engine, Blender, Visual Studio.',
    cmd_aliases: 'Known aliases: Gander18, primagander18, gander, primagander228, gander18sus, etc.',
    cmd_repo: `📦 REPO: <a href="${LPB_REPO_URL}" target="_blank" rel="noopener" style="color: var(--red-accent-text); text-decoration: underline;">GitHub / Lite-Pixel-Blood ↗</a>`,
    cmd_bgm: `🎵 BGM_STREAM: <a href="${SPOTIFY_URL}" target="_blank" rel="noopener" style="color: var(--red-accent-text); text-decoration: underline;">Open Spotify Playlist ↗</a>`,
    cmd_heart: '⚡ CALLING CARD SENT: Stealing your FPS and returning it doubled.',
    cmd_layout: '⚠️ Genius, switch your keyboard layout to English! This terminal only reads Latin characters.',
    cmd_unknown: 'Command "{cmd}" not found. Type <b>help</b>.',
    copied_ok: 'COPIED!',
    copied_err: 'COPY FAILED',
    bf1_no_data: 'N/A',
    bf1_sync_err: '[SYNC ERROR]'
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
    langBtn.textContent = `LANG: ${lang.toUpperCase()}`;
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

  const cliInput = document.getElementById('cli-input');
  if (cliInput) {
    cliInput.placeholder = dict.cli_placeholder;
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

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
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

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const textToCopy = btn.getAttribute('data-copy');
    const valSpan = btn.querySelector('.c-val');
    const originalText = valSpan.textContent;
    const dict = translations[currentLang];

    copyToClipboard(textToCopy)
      .then(() => {
        valSpan.textContent = dict.copied_ok;
        btn.style.backgroundColor = 'var(--white)';
        btn.style.color = 'var(--bg-dark)';
      })
      .catch(() => {
        valSpan.textContent = dict.copied_err;
        btn.style.backgroundColor = 'var(--red-main)';
        btn.style.color = 'var(--white)';
      })
      .finally(() => {
        setTimeout(() => {
          valSpan.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 1500);
      });
  });
});

const cliForm = document.getElementById('cli-form');
const cliInput = document.getElementById('cli-input');
const cliOutput = document.getElementById('cli-output');

if (cliForm && cliInput && cliOutput) {
  cliForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = cliInput.value.replace(/\s+/g, ' ').trim().toLowerCase();
    cliInput.value = '';

    if (!cmd) return;

    const dict = translations[currentLang];

    if (/[^\u0000-\u007F]/.test(cmd)) {
      cliOutput.innerHTML = `<span style="color: var(--red-accent-text)">&gt;</span> ${dict.cmd_layout}`;
      return;
    }

    if (cmd === 'clear') {
      cliOutput.textContent = '';
      return;
    }

    const commandMap = {
      'help': dict.cmd_help,
      'status': dict.cmd_status,
      'stack': dict.cmd_stack,
      'bgm': dict.cmd_bgm,
      'repo': dict.cmd_repo,
      'aliases': dict.cmd_aliases,
      'take your heart': dict.cmd_heart
    };

    if (commandMap[cmd]) {
      cliOutput.innerHTML = `<span style="color: var(--red-accent-text)">&gt;</span> ${commandMap[cmd]}`;
    } else {
      const errText = dict.cmd_unknown.replace('{cmd}', cmd);
      cliOutput.innerHTML = `<span style="color: var(--red-accent-text)">&gt;</span> ${errText}`;
    }
  });
}

const sessionTimerEl = document.getElementById('session-timer');
if (sessionTimerEl) {
  let seconds = 0;
  setInterval(() => {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    sessionTimerEl.textContent = `${hrs}:${mins}:${secs}`;
  }, 1000);
}

function renderBF1Data(data, statusLabel, state) {
  const locale = currentLang === 'ru' ? 'ru-RU' : 'en-US';

  if (data.rank !== undefined) {
    const baseRank = `RANK ${data.rank}`;
    const rawName = data.rankName ? data.rankName.trim() : '';
    const rankSuffix = (rawName && rawName.toUpperCase() !== baseRank)
      ? ` // ${rawName.toUpperCase()}`
      : '';
    document.getElementById('bf1-rank').textContent = `${baseRank}${rankSuffix}`;
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
    document.getElementById('bf1-time').textContent = `${hours}h`;
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
  const na = dict.bf1_no_data;

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
    syncEl.textContent = dict.bf1_sync_err;
    syncEl.classList.remove('live');
    syncEl.classList.add('error');
  }
}

async function loadBF1Stats() {
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
          renderBF1Data(cached.data, '[LIVE API]', 'live');
          return;
        }
        // Удаляем протухшую запись, чтобы не копился старый кэш
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

    renderBF1Data(data, '[LIVE API]', 'live');
  } catch (err) {
    clearTimeout(timeoutId);
    renderBF1Unavailable();
  }
}

applyLanguage(currentLang);
loadBF1Stats();