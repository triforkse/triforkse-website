import * as contentful from 'contentful/dist/contentful.js';

const client = contentful.createClient({
  space: '1btpypa7gfpn',
  accessToken: '4dbe56c6bebec54e51b9e97240f7e361ba57550e237488fcf76d1426eddfaa4a',
});

export default {
  get() {
    const filters = {
      'content_type': 'course',
    };

    return client.getEntries(filters)
      .then(json => json.items.map(toData));
  },

  getBySlug(slug) {
    return new Promise((resolve, reject) => {
        return client.getEntries({
          'content_type': 'course',
          'fields.slug': slug
        })
        .then(json => {
          if (json.items.length === 0) { reject("Course Not Found"); }
          else { resolve(toData(json.items[0])); }
        });
    });
  }
};

function toData(item) {
  return {
    id: item.sys.id,
    title: item.fields.title,
    abstract: item.fields.abstract,
    slug: item.fields.slug,
    dates: item.fields.dates ? item.fields.dates.map(toDate) : []
  };
}

function toDate(item) {
  return {
    id: item.sys.id,
    date: item.fields.date,
  };
}
