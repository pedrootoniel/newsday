import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import {
  ContainerProfile,
  Wrapper,
  Span,
  ImgProfile,
  Inputs,
  Input,
  Button
} from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdAddAPhoto, MdClose } from 'react-icons/md'
import { FiAlertTriangle } from 'react-icons/fi'
import ProfileImg from '../../assets/user.png'
import api from '../../services/api'
import { useAuth } from '../../App'

function Profile({ match }) {
  const { authUser } = useAuth()
  const inputFile = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')
  const [removePhoto, setRemovePhoto] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confNewPass, setConfNewPass] = useState('')

  const Success = () => toast.success("Dados alterados com sucesso!")
  const errorCamp = () => toast.error("Os dados não podem ficar em branco!")
  const errorPassword = () => toast.error("É necessário que seja preenchido todos os campos de senha!")

  useEffect(() => {
    api.get(`/users/${authUser.userId}`).then(resp => {
      setName(resp.data.user.name)
      setEmail(resp.data.user.email)
      setFile(resp.data.user.photo)
    })
  }, [match.params.id])

  const submitSave = () => {

    if (!name || !email) {
      return errorCamp()
    }

    if ((currentPassword || newPassword || confNewPass) && (!currentPassword || !newPassword || !confNewPass)) {
      return errorPassword()
    }

    const formData = new FormData()

    formData.append('user_id', authUser.userId)
    formData.append('name', name)
    formData.append('email', email)

    if (file) {
      formData.append('file', inputFile.current.files[0])
    }

    if (removePhoto) {
      formData.append('removePhoto', removePhoto)
    }

    if (currentPassword || newPassword || confNewPass) {
      formData.append('currentPassword', currentPassword)
      formData.append('newPassword', newPassword)
    }

    api.put(`/users`, formData).then(resp => {
      Success()
    })
  }
  return (
    <>
      <Header />
      <ToastContainer />
      <ContainerProfile>
        <Wrapper>
          <Span>Meus dados</Span>
          <MdClose
            size={20}
            value={removePhoto}
            onClick={e => {
              setFile(null)
              setRemovePhoto(true)}}
            style={{
              marginRight: '100',
              color: 'var(--color-comments)',
              borderRadius: '50%',
              border: '1px solid #ccc', cursor: 'pointer'
            }} />
          <ImgProfile src={file || ProfileImg} alt="Foto de perfil" />
          <Input
            type="file"
            ref={inputFile}
            accept='image/png, image/jpeg'
            style={{ display: 'none' }}
            onChange={e => {
              const linkImage = URL.createObjectURL(inputFile.current.files[0])
              setFile(linkImage)}}
          />
          <MdAddAPhoto
            size={20}
            onClick={() => inputFile.current.click()}
            style={{
              marginLeft: '100',
              color: 'var(--color-comments)', cursor: 'pointer'
            }} />
          <Inputs>
            <Input
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)} />
            <Input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <Span message> <FiAlertTriangle size={20} style={{ marginRight: '5' }} />
              Altere os dados abaixo somente para realizar alteração de senha</Span>
            <Input
              placeholder="Senha atual"
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)} />
            <Input
              placeholder="Nova senha"
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)} />
            <Input
              placeholder="Confirme a nova senha"
              type="password"
              value={confNewPass}
              onChange={e => setConfNewPass(e.target.value)} />
            <Button onClick={submitSave}>Salva</Button>
          </Inputs>
        </Wrapper>
      </ContainerProfile>
    </>
  )
}

export default Profile