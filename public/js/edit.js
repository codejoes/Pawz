

  const updatePostHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const title = document.querySelector('#updated-title').value.trim();
    const text = document.querySelector('#updated-text').value.trim();
  
  
    const response = await fetch (`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify( { title, text } ),
      headers: {
        'Content-Type': 'application/json',
      }
    });
   
    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to udpate post');
    }
  };

  // const commentHandler = async (event) => {
  //   event.preventDefault();

  //   const text = document.querySelector('#comment').value.trim();  
  //   console.log(text);

  //   const response = await fetch (`/api/comments/`, {
  //     method: 'POST',
  //     body: JSON.stringify( { text } ),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   });

  //   console.log(response);
   
  //   if (response.ok) {
  //     location.reload();
  //   } else {
  //     alert('Failed to post comment');
  //   }
  // };


  // const deleteCommentHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/comments/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete comment');
  //     }
  //   }
  // };

// const updateUserhandler = async (event) => {
//     event.preventDefault();
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];

//     const imageUrl = document.querySelector('#updated-title').value.trim();
  
  
//     const response = await fetch (`/api/posts/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify( { title, text } ),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });
   
//     if (response.ok) {
//       document.location.replace(`/post/${id}`);
//     } else {
//       alert('Failed to udpate post');
//     }
// };


//   document
//     .querySelector('#upload-photo')
//     .addEventListener('click', (event) => { updateUserhandler(event) });

document
  .querySelector('#submitEditBtn')
  .addEventListener('click', (event) => { updatePostHandler(event); });

// document
//   .querySelector('#postCommentBtn')
//   .addEventListener('click', (event) => { commentHandler(event) });


// document
//   .querySelector('.comment-list')
//   .addEventListener('click', (event) => { deleteCommentHandler(event) });