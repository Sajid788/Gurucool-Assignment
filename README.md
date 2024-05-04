# Flow Distribution Algorithm

## Design Algorithm:
- The algorithm is designed to allocate users to astrologers in an equitable and balanced manner.
- It incorporates a mechanism to adjust the flow for top astrologers, enabling them to receive either more or fewer connections as needed.

## Tech Stack
- Node.js
- Express.js
- MongoDB

## Features
- astrologerModel.js and userModel.js define schemas for astrologers and users, respectively.
- astrologerController.js and userController.js manage requests associated with astrologers and users.
- flowDistributionService.js houses the algorithm for distributing users to astrologers.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Sajid788/Gurucool-Assignment.git
   ```

   . Navigate to the project directory:

   ```bash
   cd Gurucool-Assignment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### API Endpoints
`GET /user`: Fetch all users.

`POST /user`: Create a new user.

`GET /astrologer`: Fetch all astrologes.

`POST /astrologer`: Create a new astrologer.

`PATCH /astrologer/:id`: Update flow adjustment for a specific astrologer.

`DELETE /astrologer/:id`: Delete astrologer by id.
