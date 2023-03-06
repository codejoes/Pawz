

const updatePostHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log('1=====================================');
  
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

  const commentHandler = async (event) => {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(id);
  
    const text = document.querySelector('#comment').value.trim();  
    // const post_id = id;

    const response = await fetch (`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify( { text } ),
      headers: {
        'Content-Type': 'application/json',
      }
    });
   
    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to post comment');
    }
  };


  const animalHandler = async (event) => {
    event.preventDefault();
  
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];
  
    // console.log(id);
  
    const animalName = document.querySelector('#animal-name').value.trim();
    const animalType = document.querySelector('#animal-type').value.trim();
    const animalText = document.querySelector('#animal-text').value.trim();
    // const post_id = id;

    const response = await fetch (`/api/animals/`, {
      method: 'POST',
      body: JSON.stringify( { animalName, animalType, animalText } ),
      headers: {
        'Content-Type': 'application/json',
      }
    });
   
    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to add animal');
    }
  };

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

  document
    .querySelector('#postCommentBtn')
    .addEventListener('click', (event) => { commentHandler(event) });

  document
    .querySelector('#addAnimalBtn')
    .addEventListener('click', (event) => { animalHandler(event) });