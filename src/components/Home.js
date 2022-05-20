import "../App.css";
import React from 'react'
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home text-4xl font-bold">
        <h1>Hangman Game</h1>
        <br />  
        <div className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
            <img src="https://mgsrizqi.com/my-games/hangmangame/sprites/7.gif" alt='gif'/>
        </div>
        <div>
            <Link to="/player-screen">
                    <button>Player</button>
            </Link>
        </div>
        <br />
        <div>
            <Link to="/player-screen">
                    <button>Bot</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
