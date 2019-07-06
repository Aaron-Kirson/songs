import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "shut up", duration: "2:30" },
    { title: "animal", duration: "6:30" },
    { title: "all star", duration: "7:30" }
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer
});
