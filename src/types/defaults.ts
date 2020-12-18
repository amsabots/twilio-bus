declare global {
  namespace NodeJs {
    interface ProcessEnv {
      PORT?: number;
      DB_NAME?: string;
      DB_PASSWORD?: string;
      DB_USERNAME?: string;
    }
  }
}

export {};
