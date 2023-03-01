import { useDispatch, useSelector } from "react-redux";
import { useThemeMode } from "../../redux/themeMode/reducer";

export const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector(useThemeMode);

  return <div>{theme}</div>;
};
