module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // PostCSS writes base.css straight into the output dir, which Eleventy
  // doesn't watch. Without this, a CSS-only change never reloads the browser.
  eleventyConfig.setServerOptions({
    watch: ["docs/css/**/*.css"],
  });

  // Everything in src/posts is a post. Defined by folder rather than by a
  // shared tag, so `tags` in frontmatter stays purely topical.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md")
  );

  // Posts come from LinkedIn, where a single newline is a real line break.
  eleventyConfig.amendLibrary("md", (md) => md.set({ breaks: true }));

  // Puts each post in the first section whose tags it shares, newest first.
  // Posts that match no section land in a trailing "Everything else".
  const groupBySection = (posts, sections) => {
    const newest = [...posts].reverse();
    const claimed = new Set();
    const groups = sections.map(({ title, tags }) => {
      const matches = newest.filter(
        (p) => !claimed.has(p) && (p.data.tags || []).some((t) => tags.includes(t))
      );
      matches.forEach((p) => claimed.add(p));
      return { title, posts: matches };
    });
    groups.push({ title: "Everything else", posts: newest.filter((p) => !claimed.has(p)) });
    return groups.filter((g) => g.posts.length);
  };

  eleventyConfig.addFilter("groupBySection", groupBySection);

  // Where a post sits in the archive's reading order, and its neighbors.
  // Previous/next follow that order, continuing across section boundaries.
  eleventyConfig.addFilter("readingPosition", (posts, sections, url) => {
    const order = groupBySection(posts, sections).flatMap((g) =>
      g.posts.map((post, i) => ({ post, section: g.title, index: i + 1, total: g.posts.length }))
    );
    const i = order.findIndex((entry) => entry.post.url === url);
    if (i === -1) return null;
    return { ...order[i], prev: order[i - 1], next: order[i + 1] };
  });

  eleventyConfig.addFilter("readableDate", (date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
