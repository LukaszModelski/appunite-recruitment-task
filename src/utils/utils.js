export const formatAuthor = (authorString) => {
  if(authorString.includes('http')) {
    const lastPartOfUrl = authorString.split('/').pop();
    return lastPartOfUrl.replace('-', ' ');
  } 
  return authorString;
}
