# 🏥 HealthNexus – Hospital Information System (MERN Stack)

HealthNexus is a **Hospital Management Web Application** designed to streamline hospital operations and enhance communication between **doctors, patients, and administrators**.  
Developed during my internship at **Softpro India Computer Technologies Pvt. Ltd., Lucknow**, this project demonstrates full-stack development skills using the **MERN Stack**.

---

## 🚀 Project Overview

HealthNexus provides a common digital platform for hospital stakeholders.  
It allows patients to register, book appointments, and share feedback, while doctors and admins manage schedules, reports, and system operations.

### 🎯 **Objectives**
- Simplify hospital management and record-keeping.
- Enable secure login and role-based access.
- Improve communication between patients, doctors, and administrators.
- Automate report generation and notifications.

---

## 🧩 Features

✅ **User Roles**
- **Admin** – Manage doctors, patients, and announcements.  
- **Doctor** – View appointments, manage availability, and patient records.  
- **Patient** – Register, book appointments, and give feedback.

✅ **Core Modules**
- **Patient Management**
- **Doctor Management**
- **Appointment Scheduling**
- **Feedback & News Management**
- **Authentication (JWT + bcrypt)**
- **Email Integration (Nodemailer)**

✅ **Other Features**
- Secure login and signup.
- Responsive UI for all devices.
- Real-time notifications and updates.
- Easy-to-use dashboard.

---

## 🧠 Tech Stack

| Layer | Technology Used |
|--------|----------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript, Bootstrap |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt |
| **Email Service** | Nodemailer |
| **Tools** | VS Code, GitHub, Postman |

---

## ⚙️ Installation & Setup

Follow the steps below to run the project locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/anjalijaiswal04/HealthNexus.git
2️⃣ Navigate to the project folder
cd HealthNexus

3️⃣ Install dependencies for backend and frontend
cd server
npm install

cd ../client
npm install

4️⃣ Create a .env file in the root directory

Add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password

5️⃣ Start the development servers
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start

🧪 Testing APIs

You can test all backend routes using Postman.
Make sure your backend server is running and accessible on the specified port (e.g., http://localhost:5000).
