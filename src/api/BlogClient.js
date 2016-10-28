import Blog from "../common/Blog";

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
    return new Promise((resolve, reject) => {
      const result = hardCodedPosts.filter(p => category === Blog.Category.ALL || p.category.toUpperCase() === category);
      resolve(result);
    });
  }
};
