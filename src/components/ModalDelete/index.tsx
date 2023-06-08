import * as Dialog from '@radix-ui/react-dialog'
import { deletePost } from '../../api/routes'

import { Overlay, Content, CloseButton, Title } from './styles'

interface ModalDeleteProps {
  id: number
}

export function ModalDelete({ id }: ModalDeleteProps) {


  const handleDeletePost = () => {
    deletePost(id)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Are you sure you want to delete this item?</Title>

        <CloseButton>
          <button type="button" className='btn-cancel'>
            Cancel
          </button>
          <button
            onClick={handleDeletePost}
            type="submit"
          >
            Delete
          </button>
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
} 