import React from 'react';

function SplashPage() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center splash-screen'>
        <div className='col-8 text-center my-3'>
          <h1 className='text-light'>To-Do List</h1>
          <img
            //static assets in public folder can be accessed directly aka images
            src='checklist-svgrepo-com.svg'
            alt='checklist icon'
            className='checklist-icon'
          />
          <h3 className='text-light mt-3'>Start your list!</h3>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
