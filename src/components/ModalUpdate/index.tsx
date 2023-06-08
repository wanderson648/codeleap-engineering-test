import * as Dialog from '@radix-ui/react-dialog'
import { useState, ChangeEvent } from 'react'
import { Post } from '../../@types/Types'
import { updatedPost } from '../../api/routes'

import { Overlay, Content, CloseButton, Title } from './styles'


interface UpdateProps {
  post: Post
}

export function ModalUpdate({ post }: UpdateProps) {
  const [titleUpdate, setTitleUpdate] = useState(post.title)
  const [contentUpdate, setContentUpdate] = useState(post.content)


  function handleTitleUpdate(event: ChangeEvent<HTMLInputElement>) {
    setTitleUpdate(event.target.value)
  }

  function handleContentUpdate(event: ChangeEvent<HTMLTextAreaElement>) {
    setContentUpdate(event.target.value)
  }


  const handleUpdatePost = () => {
    updatedPost(post.id, titleUpdate, contentUpdate)
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Edit item</Title>

        <form>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type="text"
            value={titleUpdate}
            onChange={handleTitleUpdate}
            placeholder="Hello world"
            required
          />

          <label htmlFor="content">Content</label>
          <textarea
            id='content'
            value={contentUpdate}
            onChange={handleContentUpdate}
            placeholder="Content here"
            required
          />

          <CloseButton>
            <button type="button" className='btn-cancel'>
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleUpdatePost}
            >
              Save
            </button>
          </CloseButton>
        </form>
      </Content>
    </Dialog.Portal>
  )
} 