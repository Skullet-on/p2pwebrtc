import {io} from 'socket.io-client';

const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transport: ['websocket']
}

const socket = io('http://localhost:3001', options);

export default socket;
