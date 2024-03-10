# OE: Deployment project

### Overview

This project aims to provide a simplified version solution for uses to deploy thier web applications, allowing users to submit their GitHub repository URLs for React/Vite projects along with the desired domain. The system will then hit an API server, which will spin up a Docker container from the image already uploaded to Azure Container Repository. The Docker container will clone the repository, perform npm install, and npm run build. Finally, the built files will be pushed to a storage bucket in Azure.

### How It Works

1. User Submission: Users submit their GitHub repository URLs for React projects along with the desired domain via the provided interface.
2. API Server: Upon submission, the system hits the API server with the provided information.
3. Docker Container: The API server spins up a Docker container from the image already uploaded to Azure Container Repository.
4. Cloning Repository: The Docker container clones the specified GitHub repository.
5. Building: The Docker container performs npm install and npm run build to generate the build files.
6. Storage: Finally, the built files are pushed to a storage bucket in Azure.
7. Reverse proxy server: Now when the user will hit the server with "subdomain.deployfor.me", then the reverse proxy server will serve the respective build/static files from the storage bucket.
8. Automated Testing: Selenium is employed for automated testing. It will deploy boilerplate and React projects to verify functionality.
9. Continuous Integration/Deployment (CI/CD): GitHub Actions are utilized for CI/CD. Upon each commit or push to the API, server test server, and the React front-end, a rebuild is triggered followed by automated testing to ensure project stability and functionality.
10. DB Integration: MongoDB for user authentication and data persistence, providing a secure and reliable storage solution for user-related information.


### Architecture
 ![Deployfor me Architecture](https://github.com/Ganeshshinde-2003/OE-Vercel-Project/assets/96219910/0821c07c-8bbe-41a9-a92d-e32f56f287a7)

### Figma Design
[Click here to view](https://www.figma.com/file/U5ASL9F0MakVyns28J5y5r/OE-Project)
