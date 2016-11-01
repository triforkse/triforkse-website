import Blog from '../common/Blog';
import querystring from 'querystring';

const baseUrl = 'https://cdn.contentful.com/spaces/1btpypa7gfpn/entries';
const access_token = '4dbe56c6bebec54e51b9e97240f7e361ba57550e237488fcf76d1426eddfaa4a';
const content_type = 'blogPost';

const query = querystring.stringify({ access_token, content_type });

const hardCodedPosts = [
  {
    id: "post1",
    title: "This is a blog post",
    createdAt: new Date('2016-11-14T15:01:00.13+02:00'),
    updatedAt: new Date('2016-12-16T13:01:00.11+02:00'),
    authorId: "thb",
    authorName: "Thomas Anagrius",
    authorTwitter: "anagrium",
    category: "Engineering",
    content: `
      This is our first blog post! Hurray!
    `
  },
  {
    id: "post2",
    title: "Other Post",
    createdAt: new Date('2016-11-12T12:01:00.13+02:00'),
    updatedAt: new Date('2016-12-12T12:01:00.11+02:00'),
    authorId: "thb",
    authorName: "Thomas Anagrius",
    authorTwitter: "anagrium",
    category: "Business",
    content: `
      Awesome stuff.
    `
  }
];

export default {
  get(category = Blog.Category.ALL, since = null) {
    return fetch(baseUrl + '?' + query)
      .then(res => res.json())
      .then(json => mapResponseToData(json.items));
  },

  getMock(category = Blog.Category.ALL, since = null) {
    return new Promise((resolve, reject) => {
      const result = hardCodedPosts.filter(p => category === Blog.Category.ALL || p.category.toUpperCase() === category);
      resolve(result);
    });
  }
};

function mapResponseToData(items) {
  return items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    createdAt: new Date(item.sys.createdAt),
    updatedAt: new Date(item.sys.updatedAt),
    content: item.fields.content,
    category: 'Engineering',
    authorId: 'thb',
    authorName: 'Thomas Anagrius',
    authorTwitter: 'anagrium',
  }));
}
