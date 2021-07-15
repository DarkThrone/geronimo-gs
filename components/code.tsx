import Highlight, { Prism, defaultProps, Language } from 'prism-react-renderer';
import cx from 'classnames';
import customTheme from '../utils/prism-themes/rouge-theme';
import addRust from '../utils/prism-rust';

addRust(Prism);

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

const getLanguage = (className: string): Language =>
  className?.replace(/language-/, '') as Language;

const isHighlightedLine = (line: Token[], mark = '// highlight-next-line') =>
  line?.some((prevLine) => prevLine?.content === mark);

const Code = ({
  children,
  className: cn,
}: {
  children: string;
  className: string;
}) => {
  const language = getLanguage(cn);
  return (
    <Highlight
      {...defaultProps}
      theme={customTheme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cx(className, 'rounded-lg p-5')}
          style={style}
          data-language={language}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            const classNameArr = [lineProps.className];

            if (isHighlightedLine(line)) {
              return null;
            }

            if (isHighlightedLine(tokens?.[i - 1])) {
              classNameArr.push('gatsby-highlight-code-line');
            }

            const finalLineProps = {
              ...lineProps,
              className: classNameArr.join(' '),
            };

            return (
              // eslint-disable-next-line react/jsx-key
              <div {...finalLineProps}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
