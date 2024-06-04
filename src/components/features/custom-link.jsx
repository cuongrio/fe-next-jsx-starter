import Link from 'next/link';
import { parseContent } from '@/utils';

export default function ALink({ children = undefined, href="#", className = '', content = '', style = null, ...props }) {
  const preventDefault = (e) => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? (
    <Link href='#' {...props}>
      <a className={className} style={style} onClick={preventDefault} dangerouslySetInnerHTML={parseContent(content)}>
        {children}
      </a>
    </Link>
  ) : (
    <Link href='#' {...props}>
      <a className={className} style={style} onClick={preventDefault}>
        {children}
      </a>
    </Link>
  );
}
