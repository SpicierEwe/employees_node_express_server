const pool = require("../config/database");

// Read a specific event by ID
module.exports = async function getEmployeeById(id) {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM employees WHERE id = ?",
      [id]
    );
    return rows[0]; // Assuming ID is unique, return the first (and only) row
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};
