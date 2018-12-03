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
}