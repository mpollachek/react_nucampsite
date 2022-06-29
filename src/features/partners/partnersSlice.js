import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from '../../app/shared/PARTNERS';

const initialState = {
  partnersArray: PARTNERS
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState
});

export const partnersReducer = partnersSlice.reducer;

// export const selectAllPartners = () => {
//   return PARTNERS;
// };

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

// export const selectFeaturedPartners = () => {
//   return PARTNERS.find((partner) => partner.featured);
// };

export const selectFeaturedPartners = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};