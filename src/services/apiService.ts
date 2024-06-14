import api from './axiosInstance';
import { iCompany, iLead, iPipeline, iTableCompany, iTableLead, iUser } from '../models/interfaces';

const fetchData = async <T>(endpoint: string): Promise<T> => {
  console.log(`---- start fetch ${endpoint}`);
  try {
    const response = await api.get(endpoint);
    return response.data._embedded;
  } catch (error) {
    console.error(`Ошибка при выполнении запроса к ${endpoint}`, error);
    throw error;
  }
}

const fetchLeads = async (): Promise<iTableLead[]> => {
  try {
    const data = await fetchData<{ leads: iLead[] }>('/leads');
    console.log('data', data)
    return data.leads.map((lead: iLead) => ({
      id: lead.id,
      name: lead.name,
      price: lead.price,
      responsible_user_id: lead.responsible_user_id,
      group_id: lead.group_id,
      status_id: lead.status_id,
      pipeline_id: lead.pipeline_id,
      created_by: lead.created_by,
      updated_by: lead.updated_by,
      created_at: lead.created_at,
      updated_at: lead.updated_at,
      closed_at: lead.closed_at,
      company: lead._embedded.companies[0].id,
    }));
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    throw error;
  }
}


const fetchCompanies = async (): Promise<iTableCompany[]> => {
  try {
    const data = await fetchData<{ companies: iCompany[] }>('/companies');
    return data.companies.map((company: iCompany) => {
      return ({
      id: company.id,
      name: company.name,
      address: company.custom_fields_values?.[0]?.values?.[0]?.value || 'Адресс не указан',
    })});
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    throw error;
  }
}

const fetchUsers = async () => fetchData<{ users: iUser[] }>('/users').then(data => data.users);
const fetchPipelines = async () => fetchData<{ pipelines: iPipeline[] }>('/leads/pipelines').then(data => data.pipelines);

export { fetchLeads, fetchUsers, fetchPipelines, fetchCompanies };