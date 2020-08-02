const KEY_CODES = {
  ENTER: 13,
};

const searchEl = document.getElementById('search');

function search(query) {
  document.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function searchKeyPress(e) {
  const query = e.target.value;
  const keyCode = e.keyCode;

  if (keyCode === KEY_CODES.ENTER && query) {
    search(query);
  }
}

searchEl.addEventListener('keydown', searchKeyPress);