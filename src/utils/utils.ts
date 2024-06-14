import { iPipeline } from '../models/interfaces';

type typeNames = Record<number, string>;

const getNames = (data: iPipeline[]): typeNames => {
  return data.reduce((names, item) => {
    names[item.id] = item.name;
    return names;
  }, {} as typeNames);
};

const getDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString();
}

export { getNames, getDate };

