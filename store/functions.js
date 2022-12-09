export const setACookie = (cName, cValue, exDays, path = "/") => {
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  let expires = d.toUTCString();
  document.cookie = `${cName}=${cValue};expires=${expires};path=${path}`;
};

export const getACookieValueByName = (cName) => {
  if (typeof cName === "string") {
    const cookies = document.cookie;
    if (cookies.indexOf(`${cName}=`) === -1) return "";
    else {
      const start = cookies.indexOf(`${cName}=`) + `${cName}=`.length;
      const end =
        cookies.indexOf(";", start) === -1
          ? undefined
          : cookies.indexOf(";", start);
      return cookies.slice(start, end);
    }
  } else {
    console.error(
      `getACookieValueByName function require a string parameter, but get ${cName} type is ${typeof cName}`
    );
  }
};
