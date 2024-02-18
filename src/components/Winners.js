// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap"; // Import Carousel component from react-bootstrap

const Winners = () => {
  const [itemName, setItemName] = useState("");
  const [sportsItems, setSportsItems] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // Retrieve and parse admin status

  useEffect(() => {
    // Fetch sports items from the backend
    fetchSportsItems();
  }, []);

  const fetchSportsItems = async () => {
    try {
      const response = await axios.get(
        "https://kreedacbit.onrender.com/api/auth/sportsItems"
      );
      setSportsItems(response.data);
    } catch (error) {
      console.error("Error fetching sports items:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAddItem = async () => {
    try {
      // Create a FormData object to send both text and file data
      const formData = new FormData();
      formData.append("name", itemName); // Ensure name is appended to the FormData
      formData.append("image", selectedFile);

      await axios.post("https://kreedacbit.onrender.com/api/auth/sportsItems", formData);
      // After adding the item, fetch the updated list
      fetchSportsItems();
      // Reset input fields
      setItemName("");
      setSelectedFile(null);
      // Close the modal
      setShowAddItemModal(false);
    } catch (error) {
      console.error("Error adding sports item:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(
        `https://kreedacbit.onrender.com/api/auth/sportsItems/${itemId}`
      );
      // After deleting the item, fetch the updated list
      fetchSportsItems();
    } catch (error) {
      console.error("Error deleting sports item:", error);
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h2>ALL LIVEMATCHES</h2>

      {isAdmin && ( // Conditionally render add new item button and form if user is admin
        <div className="mt-3">
          <button
            className="btn btn-success me-2"
            onClick={() => setShowAddItemModal(true)}
          >
            Add New Item
          </button>
        </div>
      )}

      {showAddItemModal && isAdmin && (
        <div className="mt-3">
          <h3>Add New Sports Item</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Item Name:</label>
              <input
                type="text"
                className="form-control"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image:</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddItem}
            >
              Add Item
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => setShowAddItemModal(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}

      <div className="mt-4">
        <h3>Sports Items List</h3>
        <Carousel>
          {sportsItems.map((item) => (
            <Carousel.Item key={item._id}>
              {item.image && (
                <img
                  className="d-block w-100"
                  src={`data:image/png;base64,${item.image}`}
                  alt={item.name}
                />
              )}
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {isAdmin && ( // Conditionally render delete button if user is admin
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteItem(item._id)}
                  >
                    Delete
                  </button>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Winners;
