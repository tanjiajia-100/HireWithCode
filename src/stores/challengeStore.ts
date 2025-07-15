// src/stores/challengeStore.ts
import { defineStore } from 'pinia'

export const useChallengeStore = defineStore('challenge', {
  state: () => ({
    githubId: '',
    email: '',
    repoUrl: '',
    vercelUrl: '',
  }),
  actions: {
    saveChallenge(data: Partial<ChallengeState>) {
      Object.assign(this, data)
    },
  },
})

interface ChallengeState {
  githubId: string
  email: string
  repoUrl: string
  vercelUrl: string
}
