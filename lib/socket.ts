"use client";

import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

/**
 * Returns a singleton socket connected to whatever origin this page was
 * loaded from — so it works identically whether opened as
 * http://localhost:3000 on the server laptop or http://<LAN_IP>:3000 on
 * the client laptop.
 */
export function getSocket(): Socket {
  if (!socket) {
    socket = io({
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 500,
    });
  }
  return socket;
}
