import React,{useState} from "react";

const ContactUs = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    window.alert('Form submitted successfully');
    // e.preventDefault();
  }

  
 

  return (
    <>
    <h2 style={{textAlign:'center',color:'midnightblue',fontWeight:'bold'}}>Contact Us</h2>
    
    <div className=" d-flex align-items-center justify-content-center">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" >Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}


export default ContactUs;