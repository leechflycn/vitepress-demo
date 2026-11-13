import { createContentLoader } from 'vitepress'

const catMap = [
  { prefix: '/ai/', name: 'AI', icon: '🤖' },
  { prefix: '/tinkering/', name: '折腾', icon: '🛠️' },
  { prefix: '/side-biz/', name: '副业', icon: '💼' }
]

const skip = ['/', '/privacy', '/disclaimer', '/openclaw-service', '/about']

export default createContentLoader('**/*.md', {
  excerpt: true,
  transform(raw) {
    const posts = raw
      .filter((p) => !skip.includes(p.url) && p.frontmatter?.title && !p.frontmatter?.draft)
      .map((p) => {
        const cat = catMap.find((c) => p.url.startsWith(c.prefix)) || { name: '笔记', icon: '📝' }
        const rawDate = p.frontmatter.date
        const d = rawDate ? new Date(rawDate) : null
        return {
          url: p.url,
          title: p.frontmatter.title,
          desc: (p.frontmatter.description || p.excerpt || '')
            .replace(/<[^>]+>/g, '')
            .replace(/&ZeroWidthSpace;|&#8203;/g, '')
            .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
            .replace(/&[a-zA-Z]+;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 90),
          cat: cat.name,
          icon: cat.icon,
          date: d && !isNaN(d) ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '',
          short: d && !isNaN(d) ? `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '',
          ts: d && !isNaN(d) ? d.getTime() : 0,
          minutes: Math.max(3, Math.round((p.html?.length || 1200) / 500))
        }
      })
      .sort((a, b) => b.ts - a.ts)

    return posts
  }
})
