(function (window) {
  window["env"] = window["env"] || {};
  // Environment variables
  window["env"]["production"] = "${IS_PRODUCTION}" || true;
  window["env"]["environmentName"] = "${ENVIRONMENT_NAME}" || "production";
  window["env"]["BACKEND_API_URL"] = "https://auth-api.onedpo-poc.com";
  // window["env"]["BACKEND_API_URL"] = "${BACKEND_API_URL}" || "https://auth-api.onedpo-poc.com";
  })(this);