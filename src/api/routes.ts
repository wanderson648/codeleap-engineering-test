import { api } from "../services/api"



export const createPost = async (username: string, title: string, content: string) => {
  const response = await api.post('/careers/', {
    username, title, content
  })
  return response.data
}

export const updatedPost = async (id: number, title: string, content: string) => {
  const response = await api.patch(`/careers/${id}/`, {
    title, content
  })
  return response.data
}

export const deletePost = async (id: number) => {
  const response = await api.delete(`/careers/${id}/`)
  return response.data
}