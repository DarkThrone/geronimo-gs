import Highlight, { defaultProps, Language } from 'prism-react-renderer';

const getLanguage = (className: string): Language =>
  className?.replace(/language-/, '') as Language;

const Code = ({
  children,
  className: cn,
}: {
  children: string;
  className: string;
}) => (
  <Highlight {...defaultProps} code={children} language={getLanguage(cn)}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          // eslint-disable-next-line react/jsx-key
          <div {...getLineProps({ line, key: i })}>
            <span>{i}</span>
            {line.map((token, key) => (
              // eslint-disable-next-line react/jsx-key
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Code;
