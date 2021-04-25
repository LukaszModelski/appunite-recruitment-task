import { reducer } from "./reducer";
import { appendArticlesList } from "./actions";

const testStores = [
  {
    desc: 'Articles should be appended to existing list',
    before: {
      articles: []
    },
    after: {
      articles: [1,2,3]
    },
    actionCreator: appendArticlesList,
    actionPayload: [1,2,3]
  },
  {
    desc: 'Articles should be appended to existing list',
    before: {
      articles: [{title: 'title 1'}, {title: 'title 2'}]
    },
    after: {
      articles: [{title: 'title 1'}, {title: 'title 2'}, {title: 'title 3'}, {title: 'title 4'}, {title: 'title 5'}]
    },
    actionCreator: appendArticlesList,
    actionPayload: [{title: 'title 3'}, {title: 'title 4'}, {title: 'title 5'}]
  },
]

describe('Reducer tests', () => {

  testStores.forEach(testCase => {
    test(testCase.desc, () => {
      expect(reducer(testCase.before, testCase.actionCreator(testCase.actionPayload))).toStrictEqual(testCase.after);
    });
  });
})
