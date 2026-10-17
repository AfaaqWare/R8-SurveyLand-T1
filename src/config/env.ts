// config/env.ts

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "https://survey.afaaqware.com/api",

  API_TIMEOUT: Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 10000),

  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "Survey Land",

  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || "v1.0",

  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || "development",

  ACCESS_TOKEN_KEY: process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || "accessToken",

  REFRESH_TOKEN_KEY: process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || "refreshToken",
};
