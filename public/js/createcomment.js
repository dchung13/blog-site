const commentFormHandler = async (event) => {

  event.preventDefault();

  const content = document.querySelector('#content').value.trim();

  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to comment on this you filthy casual ):<');
    }
  }
};

document
  .querySelector('#create-comment-form')
  .addEventListener('submit', commentFormHandler);
