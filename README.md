# Student Information App

## Project Title

Student Information Portal

## Team Members

| Student | Role | Responsibilities |
|---|---|---|
| Namratha R | Team Lead / Developer | Repository creation, base application, integration, pull request management and merging |
| Ajanya Vinayan | UI Developer | User interface design, student card styling and contact information |
| Yash Barjatya | JavaScript Developer | JavaScript functionality, student search and application title implementation |

## Project Description

The Student Information Portal is a simple web application developed to demonstrate a collaborative Git and GitHub workflow.

The application provides an easy-to-use interface for viewing student information, searching for students, viewing student profiles and accessing contact information.

The main objective of this project is to demonstrate collaborative software development using Git branches, meaningful commits, pull requests, merging and merge conflict resolution.

## Features

- Student information display
- Student search functionality
- Student profile details
- Responsive and modern user interface
- Dark and light mode
- Contact information
- Notification functionality
- Interactive JavaScript features

## Technologies Used

- **HTML5** – Used to structure the web application
- **CSS3** – Used for styling, layout and responsive design
- **JavaScript** – Used to implement interactive functionality and student search
- **Git** – Used for version control and branch management
- **GitHub** – Used for remote repository hosting and collaborative development

## Git Branching Strategy

The project follows a feature-branch based Git workflow.

### Main Branch

`main`

The main branch contains the integrated and stable version of the application.

### Feature Branches

- `feature/ui` – Used for UI improvements and student card styling
- `feature/javascript` – Used for JavaScript functionality and student search
- `feature/contact` – Used for adding contact information
- `feature/student-name` – Used for updating the application heading
- `feature/app-title` – Used for updating the application title and demonstrating merge conflict resolution

Each feature was developed independently and then merged into the `main` branch through pull requests.

## Pull Requests Created

The following pull requests were created during the development process:

| Pull Request | Feature | Status |
|---|---|---|
| #3 | Improve student card UI | Merged |
| #4 | Add contact information | Merged |
| #5 | Add student details functionality | Merged |
| #7 | Update application heading | Merged |
| #6 | Update application title | Merged |

Pull requests were reviewed and merged into the `main` branch as part of the collaborative GitHub workflow.

## Merge Conflict

### Cause of the Conflict

A merge conflict was intentionally created while working on the application heading.

Two feature branches modified the same heading in `index.html`:

- `feature/student-name` changed the heading to **Student Management System**
- `feature/app-title` changed the same heading to **MCA Student Information Portal**

The `feature/student-name` branch was merged into `main` first. When `feature/app-title` was later merged, Git detected conflicting changes to the same section of `index.html`.

### Conflict Resolution

The conflict was resolved locally on the `feature/app-title` branch.

The following commands were used:

```bash
git checkout main
git pull origin main
git checkout feature/app-title
git merge main
