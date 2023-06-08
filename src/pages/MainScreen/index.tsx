import * as Dialog from '@radix-ui/react-dialog'
import { useState, useEffect, ChangeEvent } from 'react'
import { Trash, PencilLine, SignOut } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { api } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import { PostsData } from '../../@types/Types'
import { ModalUpdate } from '../../components/ModalUpdate'
import { ModalDelete } from '../../components/ModalDelete'
import { createPost } from '../../api/routes'

import { Container, Content, Card } from './styles'
import { ScrollTopButton } from '../ScrollTopButton'



export function MainScreen() {
  const username = useSelector((state: RootState) => state.username)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [data, setData] = useState<PostsData>()

  const isFieldsEmpty = title.length === 0

  function handleCreateTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleCreateContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
  }


  const getPosts = async () => {
    const response = await api.get('/careers/')
    setData(response.data)
  }

  const handleCreatePost = () => {
    createPost(username.username, title, content)
    setTitle('')
    setContent('')
    getPosts()
  }

  // useEffect(() => {
  //   getPosts()
  // }, [])

  useEffect(() => {
    getPosts()
  }, [handleCreatePost])


  return (
    <Container>
      <header>
        CodeLeap Network
        <NavLink to='/'>
          <SignOut size={32} />
        </NavLink>
      </header>

      <Content>
        <form>
          <strong>What's on your mind?</strong>

          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type="text"
            value={title}
            onChange={handleCreateTitle}
            placeholder='Hello world'
          />

          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={handleCreateContent}
            placeholder='Content here'
          />
          <button
            type='submit'
            onClick={handleCreatePost}
            disabled={isFieldsEmpty}
          >
            Create
          </button>
        </form>
      </Content>


      {data && data?.results.map((post, index) => (
        <Card key={index}>
          <header>
            <h1>{post.title}</h1>
            <div>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Trash
                    size={24}
                    className='trash'
                  />
                </Dialog.Trigger>

                <ModalDelete
                  id={post.id}
                />
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <PencilLine
                    size={24}
                    className='edit'
                  />
                </Dialog.Trigger>

                <ModalUpdate
                  post={post}
                />
              </Dialog.Root>
            </div>
          </header>

          <div>
            <strong>{post.username}</strong>
            <span>
              {formatDistanceToNow(new Date(post.created_datetime), {
                addSuffix: true,
                locale: enUS,
              })}
            </span>
          </div>

          <p>{post.content}</p>
        </Card>
      ))}
      <ScrollTopButton />
    </Container>
  )
}