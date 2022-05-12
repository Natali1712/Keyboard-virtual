/* eslint-disable import/extensions */

import {
    keyboardWrapper, keyboardTitle, keyboardTextarea, keyboardDescriptional, keyboardLanguage,
  } from './variables.js';
import { Keyboard, keyboardBody } from './keyboard.js';
import "../styles/css/style.css";
  
  const getBody = () => {
    keyboardTextarea.classList.add('keyboard__text-area');
    keyboardTextarea.id = 'textarea';
    keyboardTextarea.rows = 5;
    keyboardTextarea.cols = 50;
  
    keyboardBody.classList.add('keyboard__body');
    keyboardBody.classList.add('keyboard');
    keyboardBody.id = 'keyboard';
  
    keyboardWrapper.classList.add('wrapper');
  
    keyboardTitle.innerText = 'RSS Virtual Keybord for Windows';
    keyboardTitle.classList.add('keyboard__title');
  
    keyboardTextarea.classList.add('keyboard__text-area');
    keyboardTextarea.id = 'textarea';
    keyboardTextarea.rows = 5;
    keyboardTextarea.cols = 50;
    
    keyboardLanguage.textContent = 'To change the language press the left ctrl + alt combination';
    keyboardLanguage.classList.add('keyboard__language');
  
    document.body.prepend(keyboardWrapper);
    keyboardWrapper.append(keyboardTitle);
    keyboardWrapper.append(keyboardTextarea);
    keyboardWrapper.append(keyboardBody);
    keyboardWrapper.append(keyboardDescriptional);
    keyboardWrapper.append(keyboardLanguage);
  };
  
  const keyboardContainer = new Keyboard(keyboardBody, keyboardTextarea);
  getBody();
  keyboardContainer.getKey();
  keyboardContainer.keyEventListener();
  keyboardContainer.mouseEventListener();
  changeColor();
  
  keyboardTextarea.onblur = () => keyboardTextarea.focus();
  keyboardTextarea.focus();
  
