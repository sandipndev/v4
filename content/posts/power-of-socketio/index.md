---
title: Why SocketIO is so much more than WebSockets!
description: Power of SocketIO, bye-bye WebSockets
date: '2020-08-03'
draft: false
slug: '/blog/power-of-socketio'
tags:
  - socketio
  - realtime
---

Sockets are need of the hour whenever we require any form of realtime communication. Traditional `HTTP Protocol` doesn't support constantly keeping a connection intact between the client and the server for a long time. There are techniques to do that, yes, namely `Long Polling` but it doesn't work in a model in which the server can continuously send a message to the client over the same connection. Fear not, WebSockets have come to the rescue!

### Need of WebSockets

Imagine you're building a chat application in which `Client 1` sends a message to `Client 2` and both are online. This means both the clients have connected to the server. Now, `Client 1` send a "Hi". How will `Client 2` get this "Hi" message?

`Client 2` can retry hitting the server to check if there is any new messages for him. That would be a solution, yes, but there would be thousands of requests for just one client only that the server would have to handle. This is bad. Here is where `WebSockets` would come to rescue!

### WebSocket

WebSocket, much like HTTP, is a communication protocol that allows clients to stay connected to a server over a single TCP connection. It is designed to support messages to-and-fro the browser and the server. It is very much compatible with the HTTP protocol because of some special http headers listed below and also allows proxies to pass through traffic.

```http
GET ws://websocket.example.com/ HTTP/1.1
Origin: http://example.com
Connection: Upgrade
Upgrade: websocket #highlight-line
Host: websocket.example.com
```

### SocketIO

SocketIO is a wrapper library around WebSockets which supports both `Polling` as well as the use of `WebSockets`. It also creates well-defined events which either end can use. It solves all problems with WebSockets. Oh yes, and if you have worked on this stuff, you know how complicated it is to handle a "disconnect" event with plain websockets. SocketIO just makes it available as an event. Trust me, it's almost like a God's gift!

Out of the box, SocketIO first creates polling requests to see if the server is present and if everything goes as planned, it transfers it's requests to websockets, as you can see below from the Google Chrome Developer Tools.

![Polling to WebSockets](https://i.imgur.com/IXVW9sp.png)

These are the reasons why you should always use SocketIO and just not plainly rely of WebSockets. I have faced situations in which for some reason the websockets were not running but socketio didn't fail. It continuously used polling requests to see if server had sent him anything.
