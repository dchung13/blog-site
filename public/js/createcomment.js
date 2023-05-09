const commentHandler = async (event) => {

  event.preventDefault();

  const content = document.querySelector('#content').value.trim();
  const blog_id = document.location.pathname.split('/');

  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to comment on this you filthy casual ):<');
    }
  }
};

document
  .querySelector('#create-comment')
  .addEventListener('submit', commentHandler);
