import React from 'react';
import { Message } from '../../types';
import { useAuthStore } from '../../store/useAuthStore';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const currentUser = useAuthStore((state) => state.user);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwn = message.senderId === currentUser?.id;
        return (
          <div
            key={message.id}
            className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                isOwn
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              {message.type === 'text' && <p>{message.content}</p>}
              {message.type === 'voice' && (
                <audio src={message.content} controls className="w-full" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}