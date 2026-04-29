const getParam = (name, defaultValue = null) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || defaultValue;
};

export const appParams = {
  appId: getParam("app_id"),
  token: getParam("access_token"),
  fromUrl: window.location.href,
};