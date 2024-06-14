export interface iLead {
  name: string;
  price: number;
  responsible_user_id: number;
  status_id: number;
  pipeline_id: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
}

export interface iPipeline {
  id: number;
  name: string;
  sort: number;
  is_main: boolean;
  is_unsorted_on: boolean;
  is_archive: boolean;
  account_id: number;
  _embedded: {
    statuses: string[];
  };
}