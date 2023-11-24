(function (window) {
  window["env"] = window["env"] || {};
  // Environment variables
  window["env"]["production"] = false;
  window["env"]["environmentName"] = "local";
  window["env"]["BACKEND_API_URL"] = "http://localhost:3000";
})(this);