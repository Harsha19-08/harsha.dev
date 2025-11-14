# Firestore Security Rules

Copy and paste these rules into your Firebase Console:
**Firestore Database → Rules**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }
    
    function isValidEmail(email) {
      return email is string && email.matches('.*@.*');
    }
    
    // Guestbook messages
    // Anyone can read, only authenticated users can create
    match /guestbook/{messageId} {
      allow read: if true;
      
      allow create: if isSignedIn()
        && request.resource.data.keys().hasAll(['name', 'email', 'photoURL', 'message', 'createdAt'])
        && request.resource.data.name is string
        && request.resource.data.email is string
        && isValidEmail(request.resource.data.email)
        && request.resource.data.photoURL is string
        && request.resource.data.message is string
        && request.resource.data.message.size() > 0
        && request.resource.data.message.size() <= 500
        && request.resource.data.createdAt == request.time;
      
      // Prevent updates and deletes (messages are permanent)
      allow update, delete: if false;
    }
    
    // Newsletter subscriptions
    // Anyone can read and subscribe (no auth required)
    match /newsletter/{subscriptionId} {
      allow read: if true;
      
      allow create: if request.resource.data.keys().hasAll(['email', 'subscribedAt'])
        && request.resource.data.email is string
        && isValidEmail(request.resource.data.email)
        && request.resource.data.subscribedAt == request.time;
      
      // Prevent updates and deletes
      allow update, delete: if false;
    }
    
    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Rule Breakdown

### Guestbook Collection (`/guestbook/{messageId}`)

**Read Access:**
- ✅ Anyone can read messages (public guestbook)

**Write Access:**
- ✅ User must be authenticated (signed in with Google)
- ✅ Must include all required fields: `name`, `email`, `photoURL`, `message`, `createdAt`
- ✅ Email must be valid format
- ✅ Message must be between 1-500 characters
- ✅ Timestamp must match server time (prevents backdating)

**Restrictions:**
- ❌ Cannot update existing messages
- ❌ Cannot delete messages

### Newsletter Collection (`/newsletter/{subscriptionId}`)

**Read Access:**
- ✅ Anyone can read (to check if email exists, prevent duplicates)

**Write Access:**
- ✅ No authentication required
- ✅ Must include: `email`, `subscribedAt`
- ✅ Email must be valid format
- ✅ Timestamp must match server time

**Restrictions:**
- ❌ Cannot update subscriptions
- ❌ Cannot delete subscriptions

### Security Features

1. **Input Validation**
   - Type checking (string, number, etc.)
   - Format validation (email regex)
   - Length limits (500 char max for messages)

2. **Timestamp Protection**
   - Uses `request.time` to prevent time manipulation
   - Ensures all timestamps are server-side

3. **Authentication**
   - Guestbook requires Google sign-in
   - Newsletter is public (anyone can subscribe)

4. **Immutability**
   - Once created, messages/subscriptions cannot be modified
   - Prevents tampering with historical data

5. **Default Deny**
   - All other collections are blocked
   - Explicit allow rules only

## Testing Rules

### Test in Firebase Console

1. Go to **Firestore Database → Rules**
2. Click **Rules Playground** tab
3. Test scenarios:

```javascript
// Test 1: Authenticated user creating message
Auth: Authenticated user
Location: /guestbook/test123
Operation: create
Data: {
  name: "John Doe",
  email: "john@example.com",
  photoURL: "https://example.com/photo.jpg",
  message: "Hello world!",
  createdAt: <now>
}
// Should: Allow ✅

// Test 2: Unauthenticated user creating message
Auth: Unauthenticated
Location: /guestbook/test123
Operation: create
Data: { ... same as above ... }
// Should: Deny ❌

// Test 3: Message too long
Auth: Authenticated user
Data: {
  ...,
  message: "a".repeat(501)  // 501 characters
}
// Should: Deny ❌

// Test 4: Newsletter subscription (no auth)
Auth: Unauthenticated
Location: /newsletter/test123
Operation: create
Data: {
  email: "user@example.com",
  subscribedAt: <now>
}
// Should: Allow ✅
```

## Production Considerations

### Rate Limiting
Consider adding rate limiting in production:

```javascript
// Example: Limit to 5 messages per user per day
match /guestbook/{messageId} {
  allow create: if isSignedIn()
    && !exists(/databases/$(database)/documents/guestbook/$(request.auth.uid + '_' + request.time.toDate().toString('yyyy-MM-dd')))
    // ... other conditions
}
```

### Admin Access
Add admin override for moderation:

```javascript
function isAdmin() {
  return isSignedIn() && 
    request.auth.token.email in ['admin@yourdomain.com'];
}

match /guestbook/{messageId} {
  allow delete: if isAdmin();
}
```

### Duplicate Prevention
Prevent duplicate newsletter subscriptions:

```javascript
match /newsletter/{email} {
  allow create: if !exists(/databases/$(database)/documents/newsletter/$(request.resource.data.email))
    // ... other conditions
}
```

## Monitoring

Monitor rule violations in Firebase Console:
- **Firestore → Usage** - See denied requests
- **Firestore → Rules** - View rule evaluation logs
- Set up alerts for suspicious activity

## Emergency Lockdown

If you detect abuse, quickly lock down all writes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false;  // Block all writes
    }
  }
}
```

---

**Copy these rules into Firebase Console to activate security! 🔒**
