const editblogpostFormHandler = async (event) => {

  event.preventDefault();

  const id = event.target.dataset.id;
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  console.log(id);

  if (title && content) {
    const response = await fetch(`/api/blogPost/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to update your blog post ):<');
    }
  }
};

document
  .querySelector('#edit-blogpost-form')
  .addEventListener('submit', editblogpostFormHandler);
