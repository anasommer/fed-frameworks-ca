export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='form-container'>
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label>
          Full Name <br />
          <input type='text' name='name' placeholder='Full Name' />
        </label>
        <label>
          Subject <br />
          <input type='text' name='subject' placeholder='Subject' />
        </label>
        <label>
          Email <br />
          <input type='email' name='email' placeholder='E-mail' />
        </label>
        <label>
          Message <br />
          <textarea placeholder='Message' />
        </label>

        <button>Send</button>
      </form>
    </div>
  );
}
