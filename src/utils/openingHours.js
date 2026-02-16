/**
 * Logic for Ballen Fisk opening hours.
 * Based on seasonal rules from open2day.dk and visitdenmark.
 *
 * Peak Season (June 1 - Sept 1): 10:00 - 18:00 DAILY
 * Shoulder/Off Season: Closed or limited.
 *
 * Currently defaults to closed outside peak season unless updated.
 */

export const getOpeningStatus = () => {
  const now = new Date();
  const denmarkTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Copenhagen' }));

  const month = denmarkTime.getMonth() + 1;
  const date = denmarkTime.getDate();
  const day = denmarkTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hours = denmarkTime.getHours();
  const minutes = denmarkTime.getMinutes();
  const currentTime = hours * 60 + minutes;

  const openTime = 10 * 60; // 10:00
  const closeTime = 18 * 60; // 18:00

  // Seasonal Check
  // High season: June (6) to August (8)
  const isHighSeason = month >= 6 && month <= 8;

  // Specific check for Sept 1st (as per typical seasonal end)
  const isPostSeason = month > 9 || (month === 9 && date > 1);
  const isPreSeason = month < 6;

  if (isHighSeason) {
    return currentTime >= openTime && currentTime < closeTime;
  }

  // Fallback for current date (Feb 16, 2026) - typically closed
  return false;
};

export const getHoursString = (language) => {
  // Can be expanded to return different strings based on season
  const labels = {
    da: { season: 'Højsæson (Juni-Aug)', hours: 'Alle dage: 10:00 - 18:00', off: 'Lukket for sæsonen' },
    en: { season: 'High Season (June-Aug)', hours: 'Daily: 10:00 AM - 6:00 PM', off: 'Closed for the season' }
  };

  const l = labels[language] || labels.da;
  const month = new Date().getMonth() + 1;

  if (month >= 6 && month <= 8) {
    return `${l.season}: ${l.hours}`;
  }
  return l.off;
};
