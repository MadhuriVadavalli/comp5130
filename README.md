Bookstore Inventory Management System:
This is a full-stack web application designed to manage and display a bookstore's inventory. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase for user authentication.

Features:
1.Browse and view books with detailed information.
2.Admin dashboard to manage books.
3.User authentication with Firebase (sign-up, login, and logout).
4.Book details, promo codes, and book PDF links.
5.Responsive design using Tailwind CSS.

Technologies Used:
Frontend: React.js, React Router, Tailwind CSS, Vite
Backend: Express.js, MongoDB, Firebase (authentication), Node.js
Tools: Postman (API testing), Git for version control

Prerequisites:
Before running the project, ensure you have the following installed:

Node.js (v16+)
MongoDB (v5+)
Firebase account for authentication
Git 

Project Setup:
1. Clone the Repository
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/yourusername/Comp5130.git
cd Comp5130

2. Backend Setup (Server)
a. Install Backend Dependencies
Navigate to the backend directory:

bash
Copy code
cd Server
Install required Node.js dependencies:

bash
Copy code
npm install

b. Configure Firebase Authentication
Set up a Firebase project on Firebase Console.
Create a new Web app and configure Firebase Authentication.
Obtain the Firebase config object and add it to your backend environment file (.env).

c. Run the Backend Server
Once everything is configured, run the backend server:

bash
Copy code
npm start
The backend should now be running on https://localhost:5000.

3. Frontend Setup (Client)
a. Install Frontend Dependencies
Navigate to the client directory:

bash
Copy code
cd client
Install required dependencies using:

bash
Copy code
npm install
b. Configure Environment Variables
Create a .env file in the client directory and add the Firebase config details

c. Run the Frontend
Start the frontend server:

bash
Copy code
npm run dev
The frontend should now be running on https://localhost:5173.

4. Accessing the Application
Open your browser and go to https://localhost:5173 to view the application.
Ensure the backend server is running on https://localhost:5173 for the API to function correctly.

How to Use the Application:

1. Accessing the Application
Open the application in your web browser at https://localhost:5173 (for local development).
Upon visiting the homepage, you can browse the books, view detailed information, and use the navigation options available.

3. User Authentication
Sign Up
Click on the Sign Up button to create a new user account.
Enter your email, password, and any other required details.
Click Submit to create your account.

Log In
Click on the Log In button to access your account.
Enter your credentials (email and password).
After successful login, you will be redirected to the homepage.

Log Out
Click on the Log Out button in the top-right corner to log out of your account.

5. Browsing Books
The homepage displays a list of books.
Scroll through the list and click on any book to view more detailed information, including:
Book Title
Author
Description
Book PDF link (if available)

7. Dashboard 
Once logged in, you will have access to the Dashboard where you can manage the bookstore's inventory.
From the dashboard, Users can:
Add New Books: Add new books to the inventory by filling out a form with the book’s details.
Manage Books: Update or delete existing books.
View User List: See the list of registered users in the system.

8. Mobile View
The application is fully responsive and designed to work well on mobile devices.
On smaller screens, the layout will adjust to fit the screen size for better navigation.

