export class Account {
  id: number;
  name: string;
  details: string | null;
  type: 'checking' | 'savings' | 'credit' | 'loan' | null;
  initialBalance: number;
}