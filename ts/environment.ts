declare namespace NodeJS {
  interface ProcessEnv {
    SENDGRID_API_KEY: string;
    ADMIN_EMAIL: string;
    ADMIN_EMAIL_PASSWORD: string;
    HYGRAPH_ENDPOINT: string;
    HYGRAPH_TOKEN: string;
    MONGODB_URI: string;
    AUTH0_SECRET: string;
    AUTH0_BASE_URL: string;
    AUTH0_ISSUER_BASE_URL: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_CLIENT_SECRET: string;
  }
}
