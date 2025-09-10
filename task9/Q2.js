function filterEmployeesByName(employees) {
  return employees.filter(emp => emp.name.toLowerCase().includes("am"));
}

module.exports = { filterEmployeesByName };