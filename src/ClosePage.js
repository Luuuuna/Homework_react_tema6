import React from 'react';

const ClosePage = () => {

//Закрытие окна, открытого пользователем с помощью JavaScript, считается угрозой безопасности, поэтому не все браузеры позволяют это сделать
 // Пробовала написать так   function handleClose() {
  //   window.open('', '_self').close();
  // } не сработало. 
  // Получилось только так :

  function handleClose() {
    window.open();
    setTimeout(function () {
      window.open('', '_self');
      window.close();
    }, 100);
  }
// окно не закрывается, а происходит переход на about:blank


  return (
    <div>
      <h2>Закрыть страницу</h2>
      <button onClick={handleClose}>Закрыть страницу</button>
    </div>
  );
}

export default ClosePage;


