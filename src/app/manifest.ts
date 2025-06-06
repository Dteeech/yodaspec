import { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: 'Yodaspec',
    short_name: 'Yoda',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      { src: '/favicon.ico', sizes: 'any' }
    ]
  }
}
