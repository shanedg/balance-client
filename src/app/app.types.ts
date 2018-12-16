export class Account {
  id: number; // from cms
  name: string;
  details: string | null;
  type: 'checking' | 'savings' | 'credit' | 'loan' | null;
  initialBalance: number;
}

export class Bucket {
  id: number; // from cms
  name: string;
}

export class PendingTransaction {
  name: string;
  amount: number;
  details: string;
  due: string;
  scheduled: string;
  effective: string;
  fromAccount: any;
  toAccount: any;
  bucket: any;
}

export class Transaction {
  id: number; // from cms
  name: string;
  amount: number;
  details: string;
  due: string;
  scheduled: string;
  effective: string;
  fromAccount: any;
  toAccount: any;
  bucket: any;
  updated_at?: string;
  created_at?: string;
}
