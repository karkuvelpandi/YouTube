import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
  relatedVideoReducer,
  searchedVideoReducer,
  subscribedChannelsReducer,
} from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideo: relatedVideoReducer,
  searchedVideo: searchedVideoReducer,
  subscribedChannels: subscribedChannelsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
