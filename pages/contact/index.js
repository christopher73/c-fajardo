import React from "react";
export default function ContactMe() {
  return (
    <form className='d-flex flex-column justify-content-center align-items-stretch flex-grow-1'>
      <h5 className='form-group p-4 text-secondary'>
        You can reach me at{" "}
        <a
          className='text-decoration-none'
          href='mailto: christopher.fajardo@gmail.com'
        >
          christopher.fajardo@gmail.com
        </a>{" "}
        <br />
        or send me a quick message below.
      </h5>
      <div className='form-group px-4'>
        <label htmlFor='exampleInputEmail1'>Email address:</label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <small id='emailHelp' className='form-text text-muted float-right'>
          I'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group px-4'>
        <label htmlFor='exampleInputName'>Name:</label>
        <input
          type='name'
          className='form-control'
          id='exampleInputName'
          aria-describedby='nameHelp'
        />
      </div>
      <div className='form-group px-4'>
        <label htmlFor='exampleInputNumber'>Phone number:</label>
        <input type='number' className='form-control' />
        <small id='emailNumber' className='form-text text-muted float-right'>
          Optional
        </small>
      </div>
      <div className='form-group px-4'>
        <label htmlFor='exampleInputMessage'>Message:</label>
        <textarea type='text' className='form-control' />
      </div>
      <button
        type='submit'
        className='btn btn-primary float-right w-25 mx-auto'
      >
        Send
      </button>
    </form>
  );
}
