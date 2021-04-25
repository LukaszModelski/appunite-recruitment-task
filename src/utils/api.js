import axios from "axios";

const apiConfig = {
  // apiKey: '952b9e3300774610ab0cb967e5045981',
  apiKey: '0d0dccb095de430481fb5a2014024e40',
  apiEndpooint: 'https://newsapi.org/v2/everything',
  pageSize: 6
}

export const fetchArticles = (page, topic, sortBy, time) => {
  const url = new URL(apiConfig.apiEndpooint);
  if (topic) { url.searchParams.set('q', topic); }
  if (sortBy) { url.searchParams.set('sortBy', sortBy); }
  if (time) { url.searchParams.set('from', time); }
  url.searchParams.set('pageSize', apiConfig.pageSize);
  url.searchParams.set('page', page);
  url.searchParams.set('apiKey', apiConfig.apiKey);
  return axios.get(url.href);
}

export const fetchArticleByTitle = title => {
  const url = new URL(apiConfig.apiEndpooint);
  if (title) { url.searchParams.set('qInTitle', title); }
  url.searchParams.set('apiKey', apiConfig.apiKey);
  return axios.get(url.href);
}
