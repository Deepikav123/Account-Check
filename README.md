# Account Check

A web application that allows users to check the registration status of a mobile number across multiple platforms. The results are displayed category-wise with a summary of registered, not registered, and failed checks.

## Features

- **Mobile Number Validation:** Accepts valid 10-digit Indian mobile numbers.
- **Account Checking:** Checks registration status across 12 mock platforms.
- **Category-wise Results:** Displays results under four categories:
  - Social Media
  - E-commerce
  - Food Delivery
  - Travel
- **Loading State:** Displays a loading indicator while fetching results.
- **Summary Dashboard:** Shows the total registered, not registered, and failed checks.
- **Retry Functionality:** Allows users to retry failed platform checks.
- **PDF Download:** Downloads the results and summary as a PDF report.
- **Responsive Design:** Supports desktop and mobile screens.

## Tech Stack

- **Frontend:** Next.js, React, JavaScript, CSS
- **Backend:** Node.js, Next.js API Routes
- **PDF Generation:** jsPDF, jsPDF-AutoTable

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Deepikav123/Account-Check.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd Account-Check
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:

   ```text
   http://localhost:3000
   ```

## API Endpoints

### 1. Check Account Status

**Endpoint:** `/api/check-account`

**Method:** `POST`

**Request Body:**

```json
{
  "mobile": "9876543210"
}
```

**Functionality:**
- Validates the Indian mobile number.
- Returns mock registration data for 12 platforms.
- Simulates a random delay of 1–2 seconds.
- Randomly assigns one platform the status `Check failed`.

### 2. Retry Failed Checks

**Endpoint:** `/api/check-account`

**Method:** `PUT`

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
- Accepts failed platform records.
- Reprocesses the failed checks.
- Returns updated registration statuses.

## Project Structure

```text
Account-Check/
├── app/
│   ├── api/
│   │   └── check-account/
│   │       └── route.js
│   ├── components/
│   │   ├── ResultsTable.jsx
│   │   └── SummaryCard.jsx
│   ├── icons/
│   ├── page.js
│   ├── layout.js
│   ├── globals.css
│   └── pdfGenerator.js
├── public/
├── package.json
└── README.md
```

## Important Note

This application uses mock data for demonstration purposes. It does not connect to any real platform, external API, or service to verify mobile number registrations.
