const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#project-name').value.trim();
    const text = document.querySelector('#project-desc').value.trim();
    if (title && text) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    } 
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
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

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
document
    .querySelector('.post-list')
    .addEventListener('click', (event) => { delButtonHandler(event) }); 

document
  .querySelector('#addAnimalBtn')
  .addEventListener('click', (event) => { animalHandler(event) });