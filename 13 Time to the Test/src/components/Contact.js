const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <form>
        <input type="text" placeholder="name" className="m-5 p-3 border-4 border-sky-500" />
        <input type="password" placeholder="password" className="m-5 p-3 border-4 border-sky-500" />
        <button type="button" className="m-5 p-3 border-4 border-sky-500 rounded-md ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
