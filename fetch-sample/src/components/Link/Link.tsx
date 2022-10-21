import styles from './styles.module.scss';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  href: NextLinkProps['href'];
  children: ReactNode;
};

/**
 * Link
 *
 * @param props
 * @returns
 */
export const Link = (props: Props) => {
  const { href, children } = props;

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
