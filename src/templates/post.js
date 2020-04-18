import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme } from '@styles';
import Helmet from 'react-helmet';
const { colors } = theme;

const StyledPostContainer = styled(Main)`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: ${colors.lightSlate};
  }
`;

const DisqusComp = ({ fullUrl, id }) => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script';
    const sd = document.getElementById(DISQUS_SCRIPT);
    let disqus_config;

    if (!sd) {
      disqus_config = function() {
        this.page.url = fullUrl;
        this.page.identifier = id;
      };

      const d = document;
      const s = d.createElement('script');
      s.src = 'https://sandipan-blog.disqus.com/embed.js';
      s.id = DISQUS_SCRIPT;
      s.async = true;
      s.setAttribute('data-timestamp', +new Date());

      d.body.appendChild(s);
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      });
    }
  }, []);
  return <div id="disqus_thread"></div>;
};

DisqusComp.propTypes = {
  fullUrl: PropTypes.string,
  id: PropTypes.string,
};

const PostTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags, slug } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Blog | Sandipan Dey</title>
      </Helmet>
      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-title">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
        <DisqusComp fullUrl={`https://sandipan.dev/blog/${slug}`} id={`${slug}`} />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;
