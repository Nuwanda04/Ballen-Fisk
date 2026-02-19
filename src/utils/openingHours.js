/**
 * Opening hours for Ballen Fisk.
 *
 * ===== HOW TO UPDATE =====
 * Just edit the `schedule.seasons` array below.
 * Each season entry has:
 *   - name:  Label (used internally / for display)
 *   - from:  [month, day] start date (inclusive)
 *   - to:    [month, day] end date (inclusive)
 *   - days:  Which weekdays are open (0=Sun, 1=Mon, ... 6=Sat)
 *   - open:  Opening time "HH:MM"
 *   - close: Closing time "HH:MM"
 * ===========================
 */

// ===== SCHEDULE CONFIG — Edit this when hours change =====
const schedule = {
  seasons: [
    {
      name: 'Højsæson',
      from: [4, 1],   // April 1
      to: [10, 31],   // Oct 31
      days: [0, 1, 2, 3, 4, 5, 6], // All days
      open: '10:00',
      close: '18:00',
    },
    // Example: Add shoulder season when needed
    // {
    //   name: 'Forsæson',
    //   from: [5, 1],
    //   to: [5, 31],
    //   days: [4, 5, 6, 0], // Thu-Sun
    //   open: '11:00',
    //   close: '16:00',
    // },
  ],
};
// ===== END CONFIG =====

const DAY_NAMES = {
  da: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
};

const LABELS = {
  da: {
    closedSeason: 'Lukket for sæsonen',
    closedToday: 'Lukket i dag',
    opensAt: 'Åbner kl.',
    today: 'I dag',
    allDays: 'Alle dage',
  },
  en: {
    closedSeason: 'Closed for the season',
    closedToday: 'Closed today',
    opensAt: 'Opens at',
    today: 'Today',
    allDays: 'Daily',
  },
  de: {
    closedSeason: 'Saisonbedingt geschlossen',
    closedToday: 'Heute geschlossen',
    opensAt: 'Öffnet um',
    today: 'Heute',
    allDays: 'Täglich',
  },
};

/**
 * Parse "HH:MM" to minutes since midnight.
 */
function parseTime(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + m;
}

/**
 * Get Denmark's current time.
 */
function getDenmarkNow() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Copenhagen' }));
}

/**
 * Check if a date falls within a season entry.
 */
function isInSeason(month, day, season) {
  const current = month * 100 + day;
  const start = season.from[0] * 100 + season.from[1];
  const end = season.to[0] * 100 + season.to[1];
  return current >= start && current <= end;
}

/**
 * Find the active season for a given date, or null.
 */
function getActiveSeason(month, day, weekday) {
  for (const season of schedule.seasons) {
    if (isInSeason(month, day, season) && season.days.includes(weekday)) {
      return season;
    }
  }
  return null;
}

/**
 * Find a season that covers this date (regardless of weekday).
 */
function getSeasonForDate(month, day) {
  for (const season of schedule.seasons) {
    if (isInSeason(month, day, season)) {
      return season;
    }
  }
  return null;
}

/**
 * Returns detailed status info for the UI.
 */
export const getDetailedStatus = (language = 'da') => {
  const now = getDenmarkNow();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekday = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const l = LABELS[language] || LABELS.da;

  // Check if today is an active day in any season
  const todaySeason = getActiveSeason(month, day, weekday);

  if (todaySeason) {
    const openMin = parseTime(todaySeason.open);
    const closeMin = parseTime(todaySeason.close);
    const isOpen = currentMinutes >= openMin && currentMinutes < closeMin;

    return {
      isOpen,
      todayHours: `${todaySeason.open} – ${todaySeason.close}`,
      hint: isOpen
        ? `${l.today}: ${todaySeason.open} – ${todaySeason.close}`
        : currentMinutes < openMin
          ? `${l.opensAt} ${todaySeason.open}`
          : l.closedToday,
    };
  }

  // Check if we're in a season but today's weekday is off
  const dateSeason = getSeasonForDate(month, day);
  if (dateSeason) {
    return {
      isOpen: false,
      todayHours: null,
      hint: l.closedToday,
    };
  }

  // Completely off-season
  return {
    isOpen: false,
    todayHours: null,
    hint: l.closedSeason,
  };
};
