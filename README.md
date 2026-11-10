# Account Check

A full-stack web application that simulates checking whether a mobile number is registered on different online platforms. Users can view account registration statuses, retry failed checks, and download the results as a PDF report.

## Live Demo

[Account Check – Live Application](https://account-check-frontend.vercel.app/)

## Features

- **Mobile Number Validation:** Accepts valid 10-digit Indian mobile numbers starting with 6, 7, 8, or 9.
- **Account Status Check:** Simulates checking registration status across 12 platforms.
- **Platform Categories:** Displays results under four categories:
  - Social Media
  - E-commerce
  - Food Delivery
  - Travel
- **Loading State:** Displays a loading indicator while the account check is processing.
- **Status Indicators:** Shows one of three statuses:
  - Registered
  - Not registered
  - Check failed
- **Summary:** Displays the total number of registered accounts and the total platforms checked.
- **Retry Failed Checks:** Allows users to retry platforms whose status is Check failed.
- **PDF Download:** Generates and downloads a PDF report containing the account check results.
- **Responsive Design:** Provides a responsive interface for desktop and mobile devices.
- **Error Handling:** Handles invalid input and API request failures.

## Tech Stack

### Frontend
- Next.js
- React.js
- JavaScript
- CSS

### Backend
- Node.js
- Next.js API Routes

### Libraries
- jsPDF
- jsPDF-AutoTable

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Deepikav123/Account-Check.git
```

**2. Navigate to the project directory**

```bash
cd Account Check
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit:

```text
http://localhost:3000
```

## API Documentation

The application uses Next.js API routes to handle account-check requests.

### 1. Check Account Status

**Endpoint:** `POST /api/check-account`

Accepts a mobile number and returns simulated account registration results for 12 platforms.

**Request Body:**

```json
{
  "mobile": "9876543210"
}
```

**Functionality:**
- Validates the mobile number on the backend.
- Returns an error response for invalid input.
- Simulates a processing delay of 1–2 seconds.
- Generates mock registration statuses for 12 platforms.
- Randomly assigns exactly one platform the status `Check failed`.

### 2. Retry Failed Checks

**Endpoint:** `PUT /api/check-account`

Accepts the platforms that previously returned `Check failed` and retries their status checks.

**Request Body:**

```json
{
  "failedData": [
    {
      "platform": "Example Platform",
      "status": "Check failed"
    }
  ]
}
```

**Functionality:**
- Validates the failed data received from the client.
- Processes the retry request.
- Returns updated platform statuses.
- Allows the frontend to update the results without performing a completely new account check.

## Project Structure

```text
Account Check/
│
├── app/
│   ├── api/
│   │   └── check-account/
│   │       └── route.js
│   │
│   ├── components/
│   │   ├── SummaryCard.jsx
│   │   └── ResultsTable.jsx
│   │
│   ├── icons/
│   │
│   ├── page.js
│   ├── layout.js
│   ├── globals.css
│   └── generatePDF.js
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

## Important Notes

- This project uses mock data to simulate account registration checks.
- No external platform APIs are integrated.
- The backend is implemented using Next.js API routes, running on the Node.js runtime.
- The application is intended to demonstrate frontend development, backend API handling, validation, state management, and error handling.

## Author

**Deepika V.**

- GitHub: [Deepikav123](https://github.com/Deepikav123)
- LinkedIn: [deepikav09](https://www.linkedin.com/in/deepikav09/)
