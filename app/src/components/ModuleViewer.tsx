import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  content: string
}

export function ModuleViewer({ content }: Props) {
  return (
    <div className="prose-dt max-w-[72ch] mx-auto py-6">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  )
}
