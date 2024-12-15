import React from 'react';

const HelpPage = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-teal-700 mb-10">Help Page!!</h2>
        
        <div className="space-y-12">
          {/* Dashboard Features Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Dashboard Features</h3>
            <p className="text-lg text-gray-700">
              <strong className="text-teal-700">1. Manage Books</strong>
              <ul className="list-disc pl-8 mt-2 text-gray-600">
                <li><strong>View Books:</strong> The dashboard allows you to view all available books in your inventory.</li>
                <li><strong>Edit Books:</strong> You can edit the details of any book, including title, author and description.</li>
                <li><strong>Delete Books:</strong> Remove a book from the inventory by clicking the "Delete" button.</li>
                <li><strong>Upload Books:</strong> To add a new book, fill out the form with details like title, author, and price, and click "Upload Book".</li>
              </ul>
            </p>
            <p className="mt-6 text-lg text-gray-700">
              <strong className="text-teal-700">2. Users List</strong>
              <ul className="list-disc pl-8 mt-2 text-gray-600">
                <li><strong>View Users:</strong> See a list of users who have registered and are using the bookstore.</li>
        
              </ul>
            </p>
          </section>

          {/* Authentication Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Authentication</h3>
            <p className="text-lg text-gray-700">
              <strong className="text-teal-700">1. Login:</strong> To access your account, simply enter your email and password. After logging in, you can access your dashboard.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              <strong className="text-teal-700">2. Signup:</strong> New users can create an account by filling out the signup form. Once registered, users can log in to access the dashboard.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              <strong className="text-teal-700">3. Logout:</strong> You can log out from your account by clicking the "Logout" button available in your dashboard.
            </p>
          </section>

          {/* Search Bar Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Search Bar</h3>
            <p className="text-lg text-gray-700">
              Use the search bar on the "Shop" page to find books by title. Simply type the book's name and hit enter to see the results.
              The system filters books based on your query and displays matching results.
            </p>
          </section>

          {/* Book PDF URL Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Book PDF URL</h3>
            <p className="text-lg text-gray-700">
              Each book has a PDF URL that provides additional details, such as title, author, and description. Clicking on the "Book URL" button redirects you to 
              <strong className="text-teal-700"> Goodreads</strong>, where you can read reviews, find more details, and purchase the book.
            </p>
          </section>

          {/* Promo Codes Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Promo Codes</h3>
            <p className="text-lg text-gray-700">
              <strong className="text-teal-700">1. Get Promo Codes:</strong> Promo codes are available for discounts or special offers. Check the Promo Page for available codes.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              <strong className="text-teal-700">2. Enter Promo Code:</strong> At checkout, enter the promo code to apply discounts to your purchase.
            </p>
          </section>

          {/* Need Help Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Need Help?</h3>
            <p className="text-lg text-gray-700">
              If you're having trouble using any part of the system, please contact our support team at 
              <strong className="text-teal-700"> support@bookstore.com</strong>. We're happy to assist you!
            </p>
          </section>

          {/* FAQs Section */}
          <section>
            <h3 className="text-4xl font-semibold text-teal-600 mb-4">Frequently Asked Questions (FAQs)</h3>
            <p className="text-lg text-gray-700">
              <strong className="text-teal-700">1. How can I add a new book to the inventory?</strong><br />
              Navigate to the "Upload Books" section on the dashboard, enter the book details, and click "Save" to add it.
            </p>
            <p className="mt-6 text-lg text-gray-700">
              <strong className="text-teal-700">2. How can I edit an existing book?</strong><br />
              Click "Edit" next to the book you want to update, modify the details, and click "Save" to update it.
            </p>
            <p className="mt-6 text-lg text-gray-700">
              <strong className="text-teal-700">3. How can I find a specific book?</strong><br />
              Use the search bar on the "Shop" page to search by title. Filter results by other criteria if needed.
            </p>
            <p className="mt-6 text-lg text-gray-700">
              <strong className="text-teal-700">4. Can I use promo codes for discounts?</strong><br />
              Yes! Check the Promo Page for available codes, and enter them during checkout to apply the discount.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
