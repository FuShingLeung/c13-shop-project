declare namespace NodeJS {
  interface ProcessEnv {
    SENDGRID_API_KEY: string;
    ADMIN_EMAIL: string;
    ADMIN_EMAIL_PASSWORD: string;
  }
}