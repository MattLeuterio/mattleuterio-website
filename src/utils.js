import {
  BgBeachDark,
  BgCloudsDark,
  BgDaylightDark,
  BgRocksDark,
  BgBeachLight,
  BgCloudsLight,
  BgDaylightLight,
  BgRocksLight,
} from "./ui/assets/img/backgrounds";

export const backgroundChoice = (theme, nameBg) => {
  let background;
  switch (nameBg) {
    case "rocks":
      background = theme === "dark" ? BgRocksDark : BgRocksLight;
      break;
    case "beach":
      background = theme === "dark" ? BgBeachDark : BgBeachLight;
      break;
    case "clouds":
      background = theme === "dark" ? BgCloudsDark : BgCloudsLight;
      break;
    case "daylight":
      background = theme === "dark" ? BgDaylightDark : BgDaylightLight;
      break;
    default:
      background = theme === "dark" ? BgRocksDark : BgRocksLight;
  }
  return background;
};