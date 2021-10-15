import { darkColors, lightColors } from "../utils/colors";

export const getImageBlob = async () => {
  await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};

export const getThemeColors = (isDark) => {
  const colors = {
    main: isDark ? darkColors.main : lightColors.main,
    primary: isDark ? darkColors.primary : lightColors.primary,
    blue: isDark ? darkColors.lightBlue : lightColors.mediumBlue,
    containerColor: isDark ? darkColors.darkGrey : lightColors.offWhite,
    borderColor: isDark ? darkColors.darkGrey : lightColors.lightGrey,
    darkBlueText: isDark ? darkColors.aceBlue : lightColors.darkBlue,
    dividerColor: isDark ? darkColors.secondary : lightColors.darkGrey,
  };

  return colors;
};
