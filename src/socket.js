import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempt: 'Infinity',
    timeout: 100000,
    transports: ['websocket'],
  };
  return io(process.env.VERCEL_URL, options);
};
