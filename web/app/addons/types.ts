export interface Addon {
  id: number;
  name: {
    ['en-US']: string;
  }
  [key: string]: unknown;
}
