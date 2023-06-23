import { TOGGLE_SIDEBAR } from "./ActionType";

export default function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarClose: !action.payload };
    default:
      throw new Error();
  }
}
