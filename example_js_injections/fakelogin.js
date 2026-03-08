(function() {
  // Create overlay container
  const overlay = document.createElement('div');
  overlay.id = 'fake-login-overlay';
  
  // Styles for overlay (full‑screen dark background)
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '9999';
  overlay.style.fontFamily = 'Arial, sans-serif';

  // Create the login card
  const card = document.createElement('div');
  card.style.backgroundColor = 'white';
  card.style.padding = '30px 40px';
  card.style.borderRadius = '8px';
  card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  card.style.width = '320px';
  card.style.textAlign = 'center';
  card.style.position = 'relative';

  // Close button (X)
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '15px';
  closeBtn.style.fontSize = '24px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.color = '#888';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.onclick = () => document.body.removeChild(overlay);
  closeBtn.onmouseover = () => closeBtn.style.color = '#333';
  closeBtn.onmouseout = () => closeBtn.style.color = '#888';

  // Title
  const title = document.createElement('h2');
  title.textContent = 'Sign In';
  title.style.marginBottom = '20px';
  title.style.color = '#333';

  // Username field
  const username = document.createElement('input');
  username.type = 'text';
  username.placeholder = 'Username';
  username.style.width = '100%';
  username.style.padding = '12px';
  username.style.margin = '8px 0';
  username.style.border = '1px solid #ccc';
  username.style.borderRadius = '4px';
  username.style.boxSizing = 'border-box';

  // Password field
  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'Password';
  password.style.width = '100%';
  password.style.padding = '12px';
  password.style.margin = '8px 0';
  password.style.border = '1px solid #ccc';
  password.style.borderRadius = '4px';
  password.style.boxSizing = 'border-box';

  // Login button
  const loginBtn = document.createElement('button');
  loginBtn.textContent = 'Log In';
  loginBtn.style.width = '100%';
  loginBtn.style.padding = '12px';
  loginBtn.style.margin = '20px 0 10px';
  loginBtn.style.backgroundColor = '#4CAF50';
  loginBtn.style.color = 'white';
  loginBtn.style.border = 'none';
  loginBtn.style.borderRadius = '4px';
  loginBtn.style.fontSize = '16px';
  loginBtn.style.cursor = 'pointer';
  loginBtn.onclick = () => {
    alert('This is a fake login page. No data was sent.');
    // Optionally remove overlay after alert
    document.body.removeChild(overlay);
  };
  loginBtn.onmouseover = () => loginBtn.style.backgroundColor = '#45a049';
  loginBtn.onmouseout = () => loginBtn.style.backgroundColor = '#4CAF50';

  // Optional small note
  const note = document.createElement('p');
  note.textContent = 'Contact your company\'s administrator if you require corporate access.'
  note.style.fontSize = '12px';
  note.style.color = '#777';
  note.style.marginTop = '10px';

  // Assemble the card
  card.appendChild(closeBtn);
  card.appendChild(title);
  card.appendChild(username);
  card.appendChild(password);
  card.appendChild(loginBtn);
  card.appendChild(note);

  // Add card to overlay, overlay to body
  overlay.appendChild(card);
  document.body.appendChild(overlay);
})();
