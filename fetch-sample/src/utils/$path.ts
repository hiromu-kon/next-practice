export const pagesPath = {
  "add_post": {
    $url: (url?: { hash?: string }) => ({ pathname: '/add-post' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
