// SocketTest.js
"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketTest = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const socket = io('http://localhost:5000'); // Connect to your server address

    // Event listener for connection
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // socket.on('newUser', (newUser) => {
    //   // Update the users state with the new user
    //   setUsers((prevUsers: any) => [...prevUsers, newUser]);
    // });
    // Event listener for disconnection
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    socket.on('getUsers', (updatedUsers) => {
      setUsers(updatedUsers);
    });
    fetchUsers()
    // Cleanup function
    return () => {
      socket.disconnect(); // Disconnect when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs once
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user');
      setUsers(response.data.message);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>

    </div>
  );
};

export default SocketTest;
