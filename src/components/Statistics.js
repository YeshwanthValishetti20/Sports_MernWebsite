import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const Statistics = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // Retrieve and parse admin status

  const [statistics, setStatistics] = useState([]);
  const [selectedStatistic, setSelectedStatistic] = useState(null);
  const [formData, setFormData] = useState({
    branchName: "",
    wins: 0,
    list: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, []);

  useEffect(() => {
    if (statistics.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      renderBarChart();
    }
  }, [statistics]);

  const fetchStatistics = () => {
    axios
      .get("http://localhost:5000/api/auth/getAllStatistics")
      .then((response) => setStatistics(response.data))
      .catch((error) => console.error(error));
  };

  const handleRowClick = (statistic) => {
    setSelectedStatistic(statistic);
    setFormData({
      branchName: statistic.branchName,
      wins: statistic.wins,
      list: statistic.list.join(", "),
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { branchName, wins, list } = formData;
    const data = {
      branchName,
      wins: parseInt(wins),
      list: list.split(",").map((item) => item.trim()),
    };

    if (selectedStatistic) {
      axios
        .put(
          `http://localhost:5000/api/auth/updateStatistic/${selectedStatistic._id}`,
          data
        )
        .then(() => {
          fetchStatistics();
          setSelectedStatistic(null);
          // setShowForm(false);
        })
        .catch((error) => console.error(error));
    } else {
      axios
        .post("http://localhost:5000/api/auth/addStatistic", data)
        .then(() => {
          fetchStatistics();
          setFormData({
            branchName: "",
            wins: 0,
            list: "",
          });
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDelete = () => {
    if (selectedStatistic) {
      axios
        .delete(
          `http://localhost:5000/api/auth/deleteStatistic/${selectedStatistic._id}`
        )
        .then(() => {
          fetchStatistics();
          setSelectedStatistic(null);
          setShowForm(false);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setFormData({
        branchName: "",
        wins: 0,
        list: "",
      });
      setSelectedStatistic(null);
    }
  };

  const handleclearform = () => {
    if (showForm) {
      setFormData({
        branchName: "",
        wins: 0,
        list: "",
      });
      setSelectedStatistic(null);
    }
  };

  const renderBarChart = () => {
    const ctx = document.getElementById("barChart");
    if (ctx) {
      const branchNames = statistics.map((statistic) => statistic.branchName);
      const wins = statistics.map((statistic) => statistic.wins);

      const newChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: branchNames,
          datasets: [
            {
              label: "Wins",
              data: wins,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Statistics</h1>
      {isAdmin && (
        <button onClick={handleToggleForm} className="btn btn-secondary mb-3">
          {showForm ? "Hide" : "Enter"}
        </button>
      )}

      {isAdmin && showForm && (
        <div className="row">
          <div className="col-md-4">
            <label>Branch Name:</label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <label>Wins:</label>
            <input
              type="number"
              name="wins"
              value={formData.wins}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <label>List of Wins:</label>
            <input
              type="text"
              name="list"
              value={formData.list}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
          </div>

          <div className="col-md-12 mt-3">
            <button onClick={handleSubmit} className="btn btn-primary mr-2">
              {selectedStatistic ? "Update" : "Add"}
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button
              onClick={handleclearform}
              className="btn btn-secondary ml-2"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="row mt-3">
        <div className="col-md-6">
          <canvas id="barChart"></canvas>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Branch Name</th>
                <th>Wins</th>
                <th>List of Wins</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((statistic, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(statistic)}
                  className={`${
                    selectedStatistic &&
                    selectedStatistic._id === statistic._id
                      ? "active"
                      : ""
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>{statistic.branchName}</td>
                  <td>{statistic.wins}</td>
                  <td>{statistic.list.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
