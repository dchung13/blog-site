const deletePostButtonHandler = async (event) => {

  event.preventDefault();

  const id = event.target.dataset.id;

  if (id) {
    const response = await fetch(`/api/blogPost/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Oof, cannot delete me, I am too slick.');
    }
  }
};

document
  .querySelector('#delete-blogpost-button')
  .addEventListener('click', deletePostButtonHandler);
