export interface JobListInterface {
  id: number;
  companyLogo: string;
  companyName: string;
  reference: string;
  title: string;
}

export interface JobDetailsInterface {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string;
}
