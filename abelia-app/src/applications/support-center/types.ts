export interface Customer {
  code: string;
  type: string;
  furiganaSei: string;
  furiganaMei: string;
  nameSei: string;
  nameMei: string;
  gender: string;
  birthDate: string;
  age: number;
  email: string;
  phone: string;
  fax: string;
  company: string;
  postalCode: string;
  address1: string;
  address2: string;
  note1: string;
  note2: string;
  note3: string;
  note4: string;
  note5: string;
  lastImportantInfo: string;
}

export interface Operator {
  id: string;
  name: string;
  profileImage: string;
  status: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}