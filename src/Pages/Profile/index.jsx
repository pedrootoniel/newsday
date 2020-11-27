import React, { useState, useEffect, useRef } from 'react'
import Header from '../../Components/Header'
import ProfileImg from '../../assents/profile.jpg'
import { MdAddAPhoto, MdClose } from 'react-icons/md'
import { FiAlertTriangle } from 'react-icons/fi'
import {ContainerProfile,Wrapper,Span,ImgProfile,Inputs,Input,Button} from '../../Pages/Profile/style'
import api from '../../services/api'
import {useAuth} from '../../App'


  function Profile({ match }) {

    const {authUser} = useAuth()

    const inputFile = useRef(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('')
    const [removePhoto, setRemovePhoto] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confNewPass, setConfNewPass] = useState('')
  
    useEffect(() => {
      api.get(`/users/${authUser.userId}`).then(resp => {
        setName(resp.data.user.name)
        setEmail(resp.data.user.email)
        setFile(resp.data.user.image)
      })
    }, [match.params.id])
  
    const submitSave = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('file', inputFile.current.files[0])
      formData.append('newPassword', newPassword)
      api.put(`/users/${match.params.id}`, { name, email, file }).then(resp => {
        alert('Dados alterados')
      })
    }

  return (
    <>
      <Header />
      <ContainerProfile>
        <Wrapper>
          <Span>Meus dados</Span>

          <MdClose
            size={20}
            value={removePhoto}
            onChange={e => setRemovePhoto(e.target.value)}
            style={{
              marginRight: '100',
              color: 'var(--color-comments)',
              borderRadius: '50%',
              border: '1px solid #ccc', cursor: 'pointer'
            }} />
            
          <ImgProfile src={ProfileImg} />
          <Input
            type="file"
            ref={inputFile}
            placeholder="Adicionar foto"
            accept='image/png, image/jpeg'
            style={{ display: 'none' }}
            onChange={e => setFile(inputFile.current.files[0].name)}
          />

          <MdAddAPhoto
            size={20}
            onClick={() => inputFile.current.click()}
            style={{
              marginLeft: '100',
              color: 'var(--color-comments)', cursor: 'pointer'
            }} />

          <Input
            type="file"
            ref={inputFile}
            placeholder="Adicionar foto"
            accept='image/png, image/jpeg'
            style={{ display: 'none' }}
            onChange={e => setFile(inputFile.current.files[0].name)}
          />

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