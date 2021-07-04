import markdownStyles from './markdown-styles.module.css';

type PropsMdx = {
  children: JSX.Element;
};
const PostBody = ({ children }: PropsMdx) => (
  <div className="max-w-2xl mx-auto">
    <div className={markdownStyles.markdown}>{children}</div>
  </div>
);

export default PostBody;
