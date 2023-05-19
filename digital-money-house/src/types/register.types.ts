export interface RegisterData {
  dni: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
}

export interface RegisterResponse {
  account_id: string;
  email: string;
  user_id: string;
  error: string
  status: number;
}
