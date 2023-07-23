import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const useThemeData = () => useContext(ThemeContext);

export default useThemeData;
