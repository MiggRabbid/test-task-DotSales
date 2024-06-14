import { typeLinks } from './types';

export interface iStatus {
  id: number;
  name: string;
  sort: number;
  is_editable: boolean;
  pipeline_id: number;
  color: string;
  type: number;
  account_id: number;
  _links: typeLinks;
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
    statuses: iStatus[];
  };
}

export interface iStatusRights {
  entity_type: string;
  pipeline_id: number;
  status_id: number;
  rights: object;
}

export interface iRights {
  leads: object;
  contacts: object;
  companies: object;
  tasks: object;
  mail_access: boolean;
  catalog_access: boolean;
  is_admin: boolean;
  is_free: boolean;
  is_active: boolean;
  group_id: number | null;
  role_id: number | null;
  status_rights: iStatusRights[];
}

export interface iUser {
  id: number;
  name: string;
  email: string;
  lang: 'ru' | 'en' | 'es';
  rights: iRights;
}

export interface iEmbeddedCompany {
  id: number;
  _links: typeLinks;
}
export interface iLead {
  id: number;
  name: string;
  price: number;
  responsible_user_id: number;
  group_id: number;
  status_id: number;
  pipeline_id: number;
  loss_reason_id: number | null;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  closed_at: number;
  closest_task_at: number | null;
  is_deleted: boolean;
  custom_fields_values: any | null;
  score: any | null;
  account_id: number;
  labor_cost: any | null;
  _links: Record<string, Record<string, string>>;
  _embedded: {
    tags: any[];
    companies: iEmbeddedCompany[];
  };
}

export interface iTableLead {
  id: number;
  name: string;
  price: number;
  responsible_user_id: number;
  group_id: number;
  status_id: number;
  pipeline_id: number;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  closed_at: number;
  company: number;
}

export interface iCompany {
  id: number;
  name: string;
  responsible_user_id: number;
  group_id: number;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  closest_task_at: number;
  custom_fields_values: any[] | null;
  is_deleted: boolean;
  account_id: number;
  _embedded: {
    tags?: Array<{
      id: number;
      name: string;
      color: null | string;
    }>;
    contacts?: Array<{
      id: number;
    }>;
    customers?: Array<{
      id: number;
    }>;
    leads?: Array<{
      id: number;
    }>;
    catalog_elements?: Array<{
      id: number;
      metadata: object;
      quantity: number;
      catalog_id: number;
      price_id: number;
    }>;
  };
}

export interface iTableCompany {
  id: number;
  name: string;
  address: string;
}
