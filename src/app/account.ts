export class Account {
  id: number; // from cms
  name: string;
  details: string | null;
  type: 'checking' | 'savings' | 'credit' | 'loan' | null;
  initialBalance: number;
}