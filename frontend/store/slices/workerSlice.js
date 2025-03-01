import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const workerSlice = createSlice({
  name: "workers",
  initialState: {
    workers: [],
    allWorkers: [],
    loading: false,
    error: null,
    filters: {}, // Store filters
  },
  reducers: {
    requestForWorkers(state) {
      state.loading = true;
      state.error = null;
    },
    successForWorkers(state, action) {
      state.loading = false;
      state.workers = action.payload;
      if (state.allWorkers.length === 0) {
        state.allWorkers = action.payload; // Only update if it's empty
      }
      state.error = null;
    },

    failureForWorkers(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const {
  requestForWorkers,
  successForWorkers,
  failureForWorkers,
  setFilters,
} = workerSlice.actions;

// ✅ Fetch all workers on page load
export const fetchAllWorkers = () => async (dispatch) => {
  dispatch(requestForWorkers());
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/workers/getWorkers?"
    );
    dispatch(successForWorkers(response.data.data.worker));
  } catch (error) {
    dispatch(failureForWorkers(error.message));
  }
};

// ✅ Fetch filtered workers based on selected filters
export const fetchFilteredWorkers = () => async (dispatch, getState) => {
  dispatch(requestForWorkers());
  try {
    const { filters } = getState().workers; // Get filters from Redux

    // ✅ Convert category, city, and hourlyPay to string if they are arrays
    const queryParams = {
      ...filters,
      category: Array.isArray(filters.category)
        ? filters.category.join(",")
        : filters.category,
      city: Array.isArray(filters.city) ? filters.city.join(",") : filters.city,
      hourlyPay: Array.isArray(filters.hourlyPay)
        ? filters.hourlyPay.join(",")
        : filters.hourlyPay,
    };

    // ✅ Fix searchKeyword issue
    if (filters.searchKeyword) {
      queryParams.searchKeyword = filters.searchKeyword;
    }

    const response = await axios.get(
      "http://localhost:8000/api/v1/workers/getFilteredWorkers",
      {
        params: queryParams,
        withCredentials: true,
      }
    );

    console.log("Filtered Workers Response:", response.data);
    dispatch(successForWorkers(response.data?.data?.workers));
  } catch (error) {
    console.error(
      "Error fetching filtered workers:",
      error.response?.data || error.message
    );
    dispatch(failureForWorkers(error.message));
  }
};

export default workerSlice.reducer;
