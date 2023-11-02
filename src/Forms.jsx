import React, { useState, useEffect } from 'react';
import './App.css';

const Forms = ({ toggle }) => {
  const [isTextSelected, setTextSelected] = useState(false);
  const [isFileSelected, setFileSelected] = useState(false);
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (text) {
      setTextSelected(false);
      setFileSelected(true);
    } else if (file) {
      setTextSelected(true);
      setFileSelected(false);
    } else {
      setTextSelected(false);
      setFileSelected(false);
    }
  }, [text, file]);
  

  return (
    <form className='wrapper'>
      <p>Сообщение в свободной форме</p>
      <label className='field'>Ваше имя
        <input required type='text'></input>
      </label>
      <label className='field'>Компания
        <input required type='text'></input>
      </label>
      <label className='field'>Телефон
        <input required type='number'></input>
      </label>
      <label className='field'>Электронная почта
        <input required type='email'></input>
      </label>
      <div className='textareaWrapper'>
        <button className='info' onClick={() => toggle(false)}>
          ?
        </button>
        <textarea
          placeholder="Напишите текст сообщения"
          disabled={isTextSelected}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <label className='file-label'>
          или прикрепите файл
          <input
            type='file'
            className='file-input'
            disabled={isFileSelected}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </div>

      <div className='bottom'>
      <label className='radio-label'>
        <input required type='radio' className='old-radio' checked={isChecked} onClick={()=> setIsChecked(!isChecked)}></input>
        <span className={`custom-radio${isChecked ? ' custom-radio-checked' : ''}`}></span>
        <span>согласен на обработку моих <br /> <a className='link' href='#'>персональных данных</a></span>
      </label>
        <button className='big_btn'>Отправить</button>
      </div>
    </form>
  )
};

export default Forms;
