# 🔍 Look for Worker

**Look for Worker** is a full-stack web application that connects customers with skilled workers like carpenters, painters, electricians, and more. Workers can register themselves on the platform and be hired on an hourly pay basis. The website offers user-friendly features for both workers and customers, including profile management, filters, support, and secure authentication.

---

## 🌟 Features

- 🏠 **Home Page**: Landing page with registration and sign-in popups for users and workers.
- 🛠️ **Worker Registration Form**: Workers can register by selecting their skill category and subcategory, and uploading profile images.
- 🔍 **Find Worker Page**: Customers can filter workers based on skill type, pay rate, and availability.
- 👤 **User Profile Page**: Customers can manage their profile and view their activity.
- 👷 **Worker Profile Page**: Workers can view their job progress and manage their availability.
- 🆘 **Support Page**: For general help and complaints.
- 🔐 **Secure Login & Registration**: Using JWT for session management and bcrypt for password hashing.
- ☁️ **Image Uploads**: Images are uploaded and stored using Cloudinary.

---

## 🧰 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap
- ReactJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- Cloudinary – For image uploads
- JSON Web Token (JWT) – For secure authentication
- bcrypt – For password hashing

---

## 📸 Screenshots

> _Add your own screenshots in a `screenshots/` folder and update paths here._

| Home Page | Find Worker Page |
|-----------|------------------|
| ![Home](screenshots/home.png) | ![FindWorker](screenshots/findworker.png) |

| Worker Profile | Register Popup |
|----------------|----------------|
| ![Worker Profile](screenshots/worker-profile.png) | ![Register](screenshots/register-popup.png) |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/look-for-worker.git
cd look-for-worker

### 2. Install Dependencies
cd backend
npm install
