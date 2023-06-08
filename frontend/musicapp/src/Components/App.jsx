import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Favourites from "./Favorites";
import Feed from "./Feed";
import Library from "./Library";
import Player from "./Player";
import Trending from "./Trending";


function App(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/favorites" element={<Favourites/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/player" element={<Player/>}/>
                <Route path="/trending" element={<Trending/>}/>
                

            </Routes>
       </BrowserRouter>
    );
}

export default App;