let browserWindow = window as any;
export const environment = {
  production: true || browserWindow['env']['IS_PRODUCTION'],
  environmentName: "production" || browserWindow['env']['ENVIRONMENT_NAME'],
  BACKEND_API_URL: browserWindow['env']['BACKEND_API_URL']
};
