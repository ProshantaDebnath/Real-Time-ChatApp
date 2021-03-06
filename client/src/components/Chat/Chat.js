import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log(room, name)
        console.log(location.search)


        socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });
        setName(name);
        setRoom(room);

        console.log(socket);

        socket.emit('join', { name, room });

    }, [ENDPOINT, location.search])
    return (
        <h1>Chat</h1>
    )
}

export default Chat;