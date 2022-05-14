import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import { TrackListContext } from "./context";
import MusicPage from "./pages/MusicPage";
import NewsPage from "./pages/NewsPage";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MusicPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="video" element={<VideoPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<MusicPage />} />
      </Route>
    </Routes>
  );
}

export default App;
