import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: true,
  teslaNewsData: [],
  totalLengthTeslaNews: "",
};
const teslaNewsSlice = createSlice({
  name: "teslaNews",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setTeslaNewsData(state, action) {
      state.teslaNewsData = [...state.teslaNewsData, ...action.payload];
    },
    setLengthOfTeslaNews(state, action) {
      state.totalLengthTeslaNews = action.payload;
    },
  },
});
export const { setLoading, setTeslaNewsData, setLengthOfTeslaNews } =
  teslaNewsSlice.actions;
export default teslaNewsSlice.reducer;

// redux thunk
export const fetchTeslaNewsData = (category) => {
  return async function fetchData(dispatch, getState) {
    try {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${category}&from=2022-10-11&sortBy=publishedAt&apiKey=fd1f88a4ca6d487c94e17b405c7fe7b5`
        )
        .then((res) => {
          console.log("redux- ", res.data);
          const scrollYPosition = localStorage.getItem("scrollYPosition");
          dispatch(setLoading(false));
          dispatch(setTeslaNewsData(res.data.articles));
          dispatch(setLengthOfTeslaNews(res.data.totalResults));
          window.scrollTo(0, scrollYPosition);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
};
