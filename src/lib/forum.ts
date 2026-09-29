// Forum types
export type Category = 'geral' | 'mecanica' | 'eletrica' | 'manutencao'

export interface Topic {
  id: string
  title: string
  body: string
  author: string
  category: Category
  createdAt: Date
  replies: number
}

export interface Reply {
  id: string
  topicId: string
  body: string
  author: string
  createdAt: Date
}

// Categories
export const CATEGORIES = [
  { key: 'geral' as const, label: 'Geral' },
  { key: 'mecanica' as const, label: 'Mecânica' },
  { key: 'eletrica' as const, label: 'Elétrica' },
  { key: 'manutencao' as const, label: 'Manutenção' },
]

// Mock data and functions
const topics: Topic[] = []
const replies: Map<string, Reply[]> = new Map()

export async function createTopic(
  data: Omit<Topic, 'id' | 'createdAt' | 'replies'>,
) {
  const topic: Topic = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date(),
    replies: 0,
  }
  topics.push(topic)
  replies.set(topic.id, [])
  return topic
}

export async function addReply(
  topicId: string,
  data: Omit<Reply, 'id' | 'topicId' | 'createdAt'>,
) {
  const reply: Reply = {
    ...data,
    id: Date.now().toString(),
    topicId,
    createdAt: new Date(),
  }
  const topicReplies = replies.get(topicId) || []
  topicReplies.push(reply)
  replies.set(topicId, topicReplies)

  // Update topic reply count
  const topic = topics.find((t) => t.id === topicId)
  if (topic) {
    topic.replies = topicReplies.length
  }

  return reply
}

export function watchTopics(
  callback: (topics: Topic[]) => void,
  onError: () => void,
) {
  // Simulate real-time updates
  callback(topics)
  return () => {} // Unsubscribe function
}

export function watchReplies(topicId: string, callback: (replies: Reply[]) => void) {
  // Simulate real-time updates
  callback(replies.get(topicId) || [])
  return () => {} // Unsubscribe function
}
