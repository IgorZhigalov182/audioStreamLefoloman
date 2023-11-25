const MUSIC_PREF = 'MUSIC_PREF';

export const setMusicPreference = (prefMusic) => {
  localStorage.setItem(MUSIC_PREF, prefMusic);
};

export const getMusicPreference = () => {
  return localStorage.getItem(MUSIC_PREF);
};
