# Hospital-Api
Basic API to keep track and generate report of patients in Covid-19 time.

# How to set it up on your local Computer?
1. Clone the Package to your local System
2. Navigate to the folder wherein the project has been cloned
3. Open Terminal and type npm install [Make sure node is already installed in your system!]
4. Type node index.js
5. The app should run on port 8005.

# Basic Features
1. Register Doctor with username, password.
2. Login(authenticate) User using passport-local and returns a jwt-token to be to access(authorize) protected routes.
3. After logging-in the doctor can do various things such as : register patient, generate a report of patient, view all reports of a particular patient, filter all the reports by status.
4. Generation of report(protecte by jwt) : A doctor has to enter the status for a particular patient and can generate the report according to it.
5. View all reports of a patient(protected by jwt) : A doctor can view all the reports of a patient.
6. View all the reports filtered by status(protected by jwt) : A doctor can view all reports present in database filtered by status.

# Folder Structure
1. Entry point : index.js.
2. config : Contains configuration files of Mongoose and Passport Authentication Strategies.
3. Controllers\api : The controllers for various API's like Doctor API or Patient API or Report API.
4. Models : Mongoose Models for the Doctors, Patients and reports!
5. routes : index.js which manages routes efficiently to have a scalable project.
