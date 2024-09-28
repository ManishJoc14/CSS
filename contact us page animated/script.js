const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".form");
let clicks = 0;

const msg = `<div class="message">
<p><span class="material-symbols-outlined"> task_alt </span></p>
<h2>Message Received Successfully!</h2>
<p>Thanks for your message, we will get back to you as
    soon as possible.</p>
<button id="submit" type="submit">
<span>SEND ANOTHER MESSAGE</span><span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>`;

const inp = `<div class="inputs">
<h2>Let's Talk!</h2>
<input type="text" name="full_name" placeholder="Full Name" />
<input type="email" name="email" placeholder="Email" />
<textarea name="message" rows="6" placeholder="Type your message.."></textarea>
<button id="submit" type="submit">
<span>send</span><span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();

  clicks = clicks + 1;
  const inputs = form.querySelector(".inputs");
  const message = form.querySelector(".message");

  // clicks is used to know clicked status
  if (clicks % 2 === 0) {
    // Checking for browser support
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        handleDomMutation(inp, message);
      });
      // Alternative if no brower support do without animation
    } else {
      handleDomMutation(inp, message);
    }
  } else {
    // Checking for browser support
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // DOM mutation
        handleDomMutation(msg, inputs);
      });
    }
    // Alternative if no browser support do without animation
    else {
      handleDomMutation(msg, inputs);
    }
  }
});

function handleDomMutation(elemToAppend, elemToRemove) {
  elemToRemove.remove();
  form.innerHTML += elemToAppend;
}
