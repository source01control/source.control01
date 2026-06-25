"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "onClick"
> & {
  href: string;
  children: ReactNode;
};

function openInNewTab(href: string) {
  window.open(href, "_blank", "noopener");
}

export function ExternalLink({
  href,
  children,
  ...props
}: ExternalLinkProps) {
  if (href === "#") {
    return (
      <a
        href={href}
        {...props}
        onClick={(event) => event.preventDefault()}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }

        event.preventDefault();
        openInNewTab(href);
      }}
    >
      {children}
    </a>
  );
}
