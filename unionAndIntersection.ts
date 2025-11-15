//Union or(|)
type UserRole = "admin" | "user" | "guest";
const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    console.log(role);
    return "Admin Dashboard";
  } else if (role === "user") {
    console.log(role);
    return "User Dashboard";
  } else {
    console.log(role);
    return "Guest Dashboard";
  }
};
getDashboard("guest");

//Intersection &
type Employee = {
  id: string;
  name: string;
  phonNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;
const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phonNo: "089789675765",
  designation: "Manager",
  teamSize: 12,
};
