import { create } from 'zustand';
import { User } from 'firebase/auth';
import { UserProfile } from './auth';

export interface Project {
  id: string;
  userId: string;
  title: string;
  sourceUrl?: string;
  sourceVideoFile?: File;
  clips: Clip[];
  createdAt: string;
  updatedAt: string;
  status: 'uploading' | 'processing' | 'completed' | 'failed';
  progress: number;
}

export interface Clip {
  id: string;
  projectId: string;
  startTime: number;
  endTime: number;
  caption: string;
  transcript: string;
  viralScore: number;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'all';
  videoUrl?: string;
  exported: boolean;
  createdAt: string;
}

interface AppStore {
  // Auth state
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setUserProfile: (profile: UserProfile | null) => void;

  // Project state
  currentProject: Project | null;
  projects: Project[];
  setCurrentProject: (project: Project | null) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  setProjects: (projects: Project[]) => void;

  // UI state
  isLoading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // Clips state
  clips: Clip[];
  selectedClips: string[];
  setClips: (clips: Clip[]) => void;
  toggleClipSelection: (clipId: string) => void;
  clearSelection: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  // Auth state
  user: null,
  userProfile: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setUserProfile: (userProfile) => set({ userProfile }),

  // Project state
  currentProject: null,
  projects: [],
  setCurrentProject: (project) => set({ currentProject: project }),
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),
  updateProject: (project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === project.id ? project : p)),
      currentProject: state.currentProject?.id === project.id ? project : state.currentProject,
    })),
  setProjects: (projects) => set({ projects }),

  // UI state
  isLoading: false,
  error: null,
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  // Clips state
  clips: [],
  selectedClips: [],
  setClips: (clips) => set({ clips }),
  toggleClipSelection: (clipId) =>
    set((state) => ({
      selectedClips: state.selectedClips.includes(clipId)
        ? state.selectedClips.filter((id) => id !== clipId)
        : [...state.selectedClips, clipId],
    })),
  clearSelection: () => set({ selectedClips: [] }),
}));
