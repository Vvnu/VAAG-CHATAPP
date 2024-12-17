import { create } from 'zustand';

interface CallState {
  isInCall: boolean;
  isVideo: boolean;
  remoteStream: MediaStream | null;
  localStream: MediaStream | null;
  setIsInCall: (status: boolean) => void;
  setIsVideo: (status: boolean) => void;
  setRemoteStream: (stream: MediaStream | null) => void;
  setLocalStream: (stream: MediaStream | null) => void;
}

export const useCallStore = create<CallState>((set) => ({
  isInCall: false,
  isVideo: false,
  remoteStream: null,
  localStream: null,
  setIsInCall: (status) => set({ isInCall: status }),
  setIsVideo: (status) => set({ isVideo: status }),
  setRemoteStream: (stream) => set({ remoteStream: stream }),
  setLocalStream: (stream) => set({ localStream: stream }),
}));