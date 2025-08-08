import dotenv from "dotenv";

dotenv.config();

export class AppConfig {
  static get getBaseUrl(): string {
    return this.getEnv("API_BASE_URL");
  }

  private static getEnv(key: string): string {
    const val = process.env[key];
    if (!val) {
      throw new Error(`Environment variable ${key} is not set.`);
    }
    return val;
  }
}
