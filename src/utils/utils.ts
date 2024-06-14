import { iCompany, iPipeline, iStatus, iTableCompany, iUser} from '../models/interfaces';
import { typeNames, typeParsCompanies } from '../models/types';

type typeParam = iPipeline[] | iUser[] | iStatus[] | iCompany[];

const getNames = (data: typeParam): typeNames => {
  return data.reduce((names, item) => {
    names[item.id] = item.name;
    return names;
  }, {} as typeNames);
};

const getNamesStatuses = (allPipelines: iPipeline[]): typeNames => {
  return allPipelines.reduce((acc, pipeline) => {
    const names = getNames(pipeline._embedded.statuses);
    return {...acc, ...names};
  }, {})
} 

const getParsCompanies = (data: iTableCompany[]) => {
  return data.reduce((names, item) => {
    names[item.id] = {
      name: item.name,
      address: item.address,
    };
    return names;
  }, {} as typeParsCompanies);
}

const formatDate = (unixTimestamp: number): string => {
  if (unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString();
  }
  return 'Сделка не закрыта';
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Первичный контакт':
      return 'processing'
    case 'Переговоры':
      return 'purple'
    case 'Принимают решение':
      return 'orange'
    case 'Согласование договора':
      return 'lime'
    case 'Закрыто и не реализовано':
      return 'green'
    case 'Успешно реализовано':
      return 'magenta'
    default:
      return '';
  }
}

export { getNames, formatDate, getNamesStatuses, getStatusColor, getParsCompanies };

