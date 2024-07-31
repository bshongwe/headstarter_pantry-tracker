# 🥫 Headstarter Pantry Tracker

Welcome to the **Headstarter Pantry Tracker** project! This application helps users keep track of their pantry items by adding, updating, and removing items. It also features search functionality and recipe suggestions based on pantry contents.

## 🛠 Tech Stack

- **Frontend**: Next.js, React, Material UI
- **Backend**: Firebase
- **Deployment**: Vercel, Google Cloud Platform (GCP)
- **CI/CD**: GitHub Actions, Google Cloud Build
- **Extras**: OpenAI API for recipe suggestions, GCP Vertex AI for image classification


## 🚀 Features

- **Add, Update, Delete Pantry Items**: Manage your pantry inventory easily.
- **Search Functionality**: Quickly find items in your pantry.
- **Recipe Suggestions**: Get recipes based on the items you have.
- **Image Upload and Classification**: Use your camera to take pictures of pantry items and classify them.
- **Responsive Design**: User-friendly interface across devices.

## 🛠 Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/headstarter-pantry-tracker.git
   cd headstarter-pantry-tracker
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Check and Install Missing Packages**:
   ```bash
   npm run check-packages
   ```

4. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   OPENAI_API_KEY=your_openai_api_key
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🌐 Deployment

### Vercel

1. **Deploy to Vercel**:
   ```bash
   npm run deploy:vercel
   ```

### Google Cloud Platform (GCP)

1. **Build and Deploy to GCP**:
   ```bash
   npm run build
   npm run deploy:gcloud
   ```

## 🔧 CI/CD

- **GitHub Actions**: Automated testing and deployment.
- **Google Cloud Build**: Continuous integration and deployment.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact

For any questions or suggestions, please reach out to us at [your-email@example.com](mailto:your-email@example.com).

