import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MusicPage from "./pages/MusicPage";
import SearchPage from "./pages/SearchPage";

import { UA, VIRAL, ROCK, OPERA } from "./constants/playLists";
import { spotifyData } from "./utils/spotifyData";

function App() {
  spotifyData.auth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MusicPage playList={UA} />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="viral-top" element={<MusicPage playList={VIRAL} />} />
        <Route path="rock-classics" element={<MusicPage playList={ROCK} />} />
        <Route path="opera" element={<MusicPage playList={OPERA} />} />
        <Route path="*" element={<MusicPage playList={UA} />} />
      </Route>
    </Routes>
  );
}

export default App;
