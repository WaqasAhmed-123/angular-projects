export interface LoginDto {
  id: string,
  name: string;
  email: string;
  role: string;
  token: string;
  Profile?: string;
}

export interface User{
  id: string,
  name: string,
  email: string,
  contact: string,
  profile: string,
}


export interface DataTable {
  data: any[];
  totalRecords: number;
  recordsFiltered: number;
}

export interface ResponseDto {
  data: any;
  status: boolean;
  message: string;
  statusCode: string;
}
