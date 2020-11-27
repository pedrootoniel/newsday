import React, { useRef, useState } from 'react';
import api from '../../services/api';
import { NewsStyled } from './style';
import Logo from '../../assents/era.png';
import {useAuth} from '../../App'


const News = ({ id = "modal", onClose = () => { } }) => {

  const { authUser} = useAuth()

  const refInputFile = useRef();
  const [fileName, setFilename] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const closed = (e) => {
    if (e.target.id === id) onClose();
  };

  const submitNews = () => {
    if (!title || !content || !refInputFile.current || !refInputFile.current.files[0]) {
      return alert('All fields must be Filled');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', refInputFile.current.files[0]);
    formData.append('user_id', authUser.userId);
    

    api.post('/news/', formData).then((resp) => {

      if (resp.data.success) {
        onClose(false);
        return alert('News added Successfully');
      }
      alert(resp.data.message);

    }).catch((err) => {
      console.log(err);
      alert('Error adding News');
    });
  };

  return (
    <NewsStyled>
      <div className="center" id={id} onClick={closed}>
        <div className="form">
          <img src={Logo} className="img" />
          <p>Fill  in the fields below to add a new News</p>
          <div className="search-img">
            <input
              ref={refInputFile}
              type="file"
              hidden
              accept='image/png, image/jpeg'
              onChange={() => {
                setFilename(refInputFile.current.files[0].name);
              }}
            />
            <input
              value={fileName}
              placeholder="Image and news..."
              type="text"
              readOnly
            />
            <button
              className="search"
              onClick={() => {
                refInputFile.current.click();
              }}>Choose</button>
          </div>
          <div className="add-news">
            <input
              value={title}
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
            <textarea
              value={content}
              type="text"
              placeholder="content..."
              onChange={(event) => {
                setContent(event.currentTarget.value);
              }}
            />
            <button onClick={submitNews}>Add</button>
          </div>
        </div>
      </div>
    </NewsStyled>
  )
}

export default News;