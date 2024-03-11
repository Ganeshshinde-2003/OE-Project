# OE: Deployment project

### Problem Statement
Deploying web applications traditionally involves purchasing or provisioning servers, whether on-premises or from cloud providers. Developers then need to configure and maintain these servers manually, including setting up PM2 for continuous running, opening inbound ports, installing dependencies, setting up reverse proxies using Nginx or Apache, and obtaining SSL certificates for HTTPS. This process is time-consuming, error-prone, and requires specialized knowledge. Our project aims to simplify this complex deployment process by automating these tasks, providing a user-friendly platform for developers to deploy their web applications seamlessly

### Background Study:

The complexity of manually deploying web applications, coupled with the increasing popularity of React and Vite technologies, necessitates a streamlined deployment platform. Automating the build, configuration, and deployment processes can significantly reduce developer effort and mitigate errors.

Challenges of Manual Deployment:

1. **Time-consuming:** Manual configuration and execution of deployment steps can significantly slow down development cycles.
2. **Error-prone:** The manual nature of the process increases the risk of errors during configuration and execution.
3. **Technical Barrier:** Setting up and managing deployment environments often requires technical expertise, limiting accessibility for new developers.
4. **Growth of Web Applications:** The global market for web application development is projected to reach $167 billion in 2023, with a continued growth rate exceeding 7% ([Link](https://www.statista.com/statistics/1009739/united-states-web-developers-digital-interface-designer-employment/)). This rapid growth highlights the increasing demand for efficient deployment solutions.


### Our Solution

Our project aims to provide a simplified version solution for uses to deploy thier web applications, allowing users to submit their GitHub repository URLs for React/Vite projects along with the desired domain. The system will then hit an API server, which will spin up a Docker container from the image already uploaded to Azure Container Repository. The Docker container will clone the repository, perform npm install, and npm run build. Finally, the built files will be pushed to a storage bucket in Azure. 

**In short:** You submit your Github repo URL of your React/Vite project along with your desired domain, we will deploy it for you on your desired domain!

### How It Works

1. **User Submission:** Users submit their GitHub repository URLs for React projects along with the desired domain via the provided interface.
2. **API Server:** Upon submission, the system hits the API server with the provided information.
3. **Docker Container:** The API server spins up a Docker container from the image already uploaded to Azure Container Repository.
4. **Cloning Repository:** The Docker container clones the specified GitHub repository.
5. **Building:** The Docker container performs npm install and npm run build to generate the build files.
6. **Storage:** Finally, the built files are pushed to a storage bucket in Azure.
7. **Reverse proxy server:** Now when the user will hit the server with "subdomain.deployfor.me", then the reverse proxy server will serve the respective build/static files from the storage bucket.
8. **Automated Testing:** Selenium is employed for automated testing. It will deploy boilerplate and React projects to verify functionality.
9. **Continuous Integration/Deployment (CI/CD):** GitHub Actions are utilized for CI/CD. Upon each commit or push to the API, server test server, and the React front-end, a rebuild is triggered followed by automated testing to ensure project stability and functionality.
10. **DB Integration:** MongoDB for user authentication and data persistence, providing a secure and reliable storage solution for user-related information.


### Architecture
[eraser.io link](https://app.eraser.io/workspace/5BOuL68hzj3ssSMm2WHm?origin=share)

### Design
[Figma link](https://www.figma.com/file/U5ASL9F0MakVyns28J5y5r/OE-Project)
