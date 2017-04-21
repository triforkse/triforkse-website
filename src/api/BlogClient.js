import Blog from '../common/Blog';
import * as contentful from 'contentful/dist/contentful.js';

const client = contentful.createClient({
  space: '1btpypa7gfpn',
  accessToken: '4dbe56c6bebec54e51b9e97240f7e361ba57550e237488fcf76d1426eddfaa4a',
});

export default {
  get(category = Blog.Category.ALL, since = null) {
    const filters = {
      'content_type': 'blogPost',
    };

    if (category !== Blog.Category.ALL) {
      filters['fields.category'] = category.toLowerCase();
    }

    return client.getEntries(filters)
      .then(json => {console.log(json); return json;})
      .then(json => json.items.map(toData));
  },

  getBySlug(slug) {
    return client.getEntries({
      'content_type': 'blogPost',
      'fields.slug': slug
    })
      .then(json => toData(json.items[0]));
  }
};

function toData(item) {
  return {
    id: item.sys.id,
    title: item.fields.title,
    createdAt: new Date(item.sys.createdAt),
    updatedAt: new Date(item.sys.updatedAt),
    content: item.fields.content,
    slug: item.fields.slug,
    category: item.fields.category,
    authorId: 'thb',
    authorName: 'Thomas Anagrius',
    authorTwitter: 'anagrium',
  };
}
