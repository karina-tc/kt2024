export const timeOfDayColors = {
  dawn: {
    gradient1: { position: '50% 0%', color: '#483246' },
    gradient2: { position: '0% 50%', color: '#8b5e54' },
    gradient3: { position: '100% 80%', color: '#e6c8e0' }
  },
  day: {
    gradient1: { position: '50% 0%', color: '#e6c8e0' },
    gradient2: { position: '0% 50%', color: '#f0c09c' },
    gradient3: { position: '100% 50%', color: '#9893a6' }
  },
  dusk: {
    gradient1: { position: '50% 0%', color: '#9893a6' },
    gradient2: { position: '0% 50%', color: '#967e8e' },
    gradient3: { position: '100% 50%', color: '#7b7491' }
  },
  night: {
    gradient1: { position: '50% 0%', color: '#1a1930' },
    gradient2: { position: '0% 50%', color: '#2a2940' },
    gradient3: { position: '100% 50%', color: '#0f0f20' }
  }
} as const;

export type Theme = keyof typeof timeOfDayColors;
