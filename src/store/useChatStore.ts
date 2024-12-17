import { create } from 'zustand';
import { Message, ChatRoom, User } from '../types';

interface ChatState {
  activeChat: ChatRoom | null;
  chats: ChatRoom[];
  messages: Message[];
  setActiveChat: (chat: ChatRoom) => void;
  addMessage: (message: Message) => void;
  addChat: (chat: ChatRoom) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  activeChat: null,
  chats: [],
  messages: [],
  setActiveChat: (chat) => set({ activeChat: chat }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
}));