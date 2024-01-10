# WatchTowr-Labs Cybersecurity Dashboard

## OVERVIEW

The objective of this task is to evaluate the vulnerability of the client's digital assets to cyberattacks by analyzing the technology employed in these assets.

## STEP 1: UNDERSTANDING THE REQUIREMENTS

I began by carefully reviewing the requirements of assignments, studied and identified the key components such as technical terms, data structure and diagram examples.

## STEP 2: PLANNING & ARCHITECTURE

### FEATURE IMPLEMENATIONS

1. **Design** This design showcases the summary data of assets and the security progression of the system. It features a dynamic table displaying all client assets.

2. **Data Structure** There two distinct tables for clients and their assets in data.json. Clients manage multiple assets, and the connection with the 'asset table' is established through the use of assetId.

3. **Features**

- Users can view detailed information about all assets, including port, IP, client, etc., in the table.
- The search bar allows users to filter and search for specific assets.
- The system highlights any asset using technology versions "8.6.0" and "8.6.1" in red, indicating vulnerability.
- Users can assign affected assets to "Hunt" by checking the checkbox.

4. **Challenge**
- The notable challenge encountered during this assessment was formulating an accurate and effective data structure that related to cybersecurity. The role extended to create an intuitive approach for visualizing and implementing this data onto the user interface. Addressing this challenge required a deep understanding of cybersecurity nuances and data integration that could be best represented and interacted with on the UI.

### Technology Stack

**Vite-React:** The project is built using Vite with React. Vite is chosen for its speed and lightweight development environment, making it easy to start and develop the project rapidly.
<br>

**TypeScript:** TypeScript has been included in the technology stack to enhance type safety and prevent bugs. It provides static typing, which helps catch errors during development.

**Libraries/Tools (Zustand, React-Query, TailwindCSS, NEXT UI)** - to enhance the efficiency of the development process.

## INSTALLATION

### 1. Clone the Repository:

git clone https://github.com/julienheng/watchTowr-labs.git
<br>
cd watchTowr-labs

### 2. Install All Dependencies

pnpm install

## Running the Development Environment

### 1. Start the Server

pnpm run dev

### 2. Run the Data Server

json-server --watch data.json

### 3. Access the DE in your web browser at

http://localhost:5173
