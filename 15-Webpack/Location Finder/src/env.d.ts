declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_MAP_API_KEY: string;
      MY_ENV_VAR_1: string;
    }
  }
}

export {};
