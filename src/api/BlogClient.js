import Blog from '../common/Blog';
import querystring from 'querystring';

const baseUrl = 'https://cdn.contentful.com/spaces/1btpypa7gfpn/entries';
const access_token = '4dbe56c6bebec54e51b9e97240f7e361ba57550e237488fcf76d1426eddfaa4a';
const content_type = 'blogPost';

const query = querystring.stringify({ access_token, content_type });

export default {
  get(category = Blog.Category.ALL, since = null) {
    return fetch(baseUrl + '?' + query)
      .then(res => res.json())
      .then(json => mapResponseToData(json.items));
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
