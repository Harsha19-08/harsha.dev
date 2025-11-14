# Firebase Setup Instructions

This application uses Firebase for authentication and database functionality.

## Setup Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter your project name (e.g., "portfolio-website")
4. Follow the setup wizard

### 2. Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get Started"
3. Go to **Sign-in method** tab
4. Enable **Google** sign-in provider
5. Add your email to authorized domains if needed

### 3. Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Start in **test mode** (for development)
4. Choose your preferred location
5. Click "Enable"

### 4. Set Up Firestore Rules

Go to **Firestore Database** > **Rules** and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Guestbook messages - anyone can read, only authenticated users can write
    match /guestbook/{message} {
      allow read: if true;
      allow create: if request.auth != null 
        && request.resource.data.keys().hasAll(['name', 'email', 'message', 'createdAt'])
        && request.resource.data.message is string
        && request.resource.data.message.size() > 0
        && request.resource.data.message.size() <= 500;
      allow update, delete: if false;
    }
    
    // Newsletter subscriptions - anyone can read and write
    match /newsletter/{subscription} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['email', 'subscribedAt'])
        && request.resource.data.email is string
        && request.resource.data.email.matches('.*@.*');
      allow update, delete: if false;
    }
  }
}
```

### 5. Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web** icon (`</>`)
4. Register your app with a nickname
5. Copy the Firebase configuration object

### 6. Update Your Application

Open `src/lib/firebase.ts` and replace the placeholder values with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 7. Environment Variables (Recommended for Production)

For better security, create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then update `firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Features Implemented

### ✅ Guestbook
- Google authentication required to post messages
- Real-time message updates
- Displays user profile picture and name
- Messages stored in Firestore with timestamps

### ✅ Newsletter
- Email subscription without authentication
- Email validation
- Stored in Firestore with timestamps
- Toast notifications for success/error

## Testing

1. Start your development server: `npm run dev`
2. Go to `/guestbook` page
3. Click "Sign in with Google"
4. Leave a message
5. Try the newsletter subscription in the sidebar

## Production Deployment

Before deploying:
1. Update Firestore rules to production mode
2. Add your production domain to Firebase authorized domains
3. Use environment variables for Firebase config
4. Enable security rules based on your needs

## Firestore Collections

### `guestbook`
- `name` (string): User's display name
- `email` (string): User's email
- `photoURL` (string): User's profile picture URL
- `message` (string): Guestbook message
- `createdAt` (timestamp): When the message was created

### `newsletter`
- `email` (string): Subscriber's email
- `subscribedAt` (timestamp): When they subscribed

## Support

For issues with Firebase setup, refer to:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication Guide](https://firebase.google.com/docs/auth)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
