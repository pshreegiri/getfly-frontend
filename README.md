# Construction Field Management App (Frontend Task)

This project is a frontend implementation of a Construction Field Management application built using React.js. It includes core screens such as Login, Project List, and Daily Progress Report (DPR) Form.

## Tech Stack

- React.js (Vite)
- React Router v6
- JavaScript
- CSS
- Axios 

## Features Implemented

### Login Screen
- Email and password login
- Mock authentication
- Valid credentials:
  - Email: test@test.com
  - Password: 123456
- Error message for invalid login
- Redirects to Project List on success

### Project List Screen
- Displays static list of construction projects
- Shows project name, status, start date, and location
- Status badges with color indicators
- Button to open DPR form for each project

### DPR Form Screen
- Project selection dropdown
- Date picker
- Weather dropdown (Sunny / Cloudy / Rainy)
- Work description textarea
- Worker count input
- Image upload (max 3 images)
- Image preview thumbnails
- Form validation
- Success message after submission
- Navigation back to Project List

### Responsive Design
- Mobile-first layout
- Works on mobile, tablet, and desktop
- No horizontal scrolling

## Project Structure
src
├ components
│ ├ Login.jsx
│ ├ Projects.jsx
│ ├ DPRForm.jsx
│
├ data
│ └ projects.js
│
├ styles
│ ├ login.css
│ ├ project.css
│ └ dpr.css


## How to Run the Project

1. Clone the repository: git clone https://github.com/pshreegiri/getfly-frontend.git

2. Install dependencies: npm install

3. Start the development server: npm run dev

The application will run at: http://localhost:5173


## Known Limitations

- Authentication is mock-based (no backend)
- Data is stored locally (static JSON)
- Image uploads are not persisted

## Author

Frontend internship task submission.