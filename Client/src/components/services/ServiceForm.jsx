import React, { useState } from "react";

const ServiceForm = ({ onCreate }) => {
  // The ServiceForm component takes a prop called onCreate, which is a function that is called when a new service is created.
  const [formData, setFormData] = useState({
    // formData is an object with three properties: name, description, and price. The useState hook is used to initialize the state of the form data.
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    // The handleSubmit function is an asynchronous function that is called when the form is submitted. It takes an event object as an argument.
    e.preventDefault(); // Prevents the default form submission behavior.

    await onCreate(formData); // Calls the onCreate prop function with the form data as an argument.

    setFormData({
      // Resets the form data to an empty state.
      name: "", // The name property is set to an empty string.
      description: "", // The description property is set to an empty string.
      price: "", // The price property is set to an empty string.
    });
  };

  return (
    // The return statement renders a form with input fields for the service name, description, and price. The form has an onSubmit event handler that calls the handleSubmit function when the form is submitted.
    <form className="service-form" onSubmit={handleSubmit}>
      {" "}
      {/* The form has a class name of "service-form" and an onSubmit event handler that calls the handleSubmit function when the form is submitted. */}
      <h2>Add New Service</h2>
      <input // The input field for the service name has a placeholder text of "Service Name" and an onChange event handler that updates the name property of the form data when the input value changes.
        type="text" // The type attribute of the input field is set to "text".
        placeholder="Service Name" // The placeholder attribute of the input field is set to "Service Name".
        value={formData.name} // The value attribute of the input field is set to the name property of the form data.
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} // The onChange event handler updates the name property of the form data with the new value entered by the user.
        required
      />
      <textarea // The textarea field for the service description has a placeholder text of "Service Description" and an onChange event handler that updates the description property of the form data when the input value changes.
        placeholder="Service Description" // The placeholder attribute of the textarea field is set to "Service Description".
        value={formData.description} // The value attribute of the textarea field is set to the description property of the form data.
        onChange={
          (e) => setFormData({ ...formData, description: e.target.value }) // The onChange event handler updates the description property of the form data with the new value entered by the user.
        }
        required // The required attribute of the textarea field is set to true
      />
      <input // The input field for the service price has a placeholder text of "Service Price" and an onChange event handler that updates the price property of the form data when the input value changes.
        type="text" // The type attribute of the input field is set to "text".
        placeholder="Service Price" // The placeholder attribute of the input field is set to "Service Price".
        value={formData.price} // The value attribute of the input field is set to the price property of the form data.
        onChange={(e) => setFormData({ ...formData, price: e.target.value })} // The onChange event handler updates the price property of the form data with the new value entered by the user.
        required // The required attribute of the input field is set to true.
      />
      <button type="submit">Add Service</button>{" "}
      {/* The form has a submit button with the text "Add Service". */}
    </form>
  );
};

export default ServiceForm; // The ServiceForm component is exported as the default export of the file.
