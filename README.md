# compromised-accounts-app

## Link to app hosted on AWS
[Compromised Accounts App](http://compromised-accounts-app.s3-website-us-west-2.amazonaws.com/)

## Description
- Includes login functionality with basic input validation
- Hits external API to check if a user's account(s) have been compromised
- Displays breached accounts on user dashboard
- Hosted on AWS

## Project Goals
- Implement React Hooks
- Use all functional components rather than use class components
- Use best React practices & file structure (each component has its own folder, JS file and CSS file)
- Use best JS practices: destructuring, keeping functions simple/small, not directly manipulating arr/obj values
- Use best CSS practices: each folder has its own CSS file, class names are based on Class name

## External API
[Have I Been Pwned API](https://haveibeenpwned.com/API/v3#BreachModel)

**Getting a single breached site**

Sometimes just a single breach is required and this can be retrieved by the breach "name". This is the stable value which may or may not be the same as the breach "title" (which can change). See the breach model below for more info.

`GET https://haveibeenpwned.com/api/v3/breach/{name}`

**Sample breached account response:**
```
{
  "Name":"Adobe",
  "Title":"Adobe",
  "Domain":"adobe.com",
  "BreachDate":"2013-10-04",
  "AddedDate":"2013-12-04T00:00Z",
  "ModifiedDate":"2013-12-04T00:00Z",
  "PwnCount":152445165,
  "Description":"In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
  "DataClasses":["Email addresses","Password hints","Passwords","Usernames"],
  "IsVerified":true,
  "IsFabricated":false,
  "IsSensitive":false,
  "IsRetired":false,
  "IsSpamList":false,
  "LogoPath":"https://haveibeenpwned.com/Content/Images/PwnedLogos/Adobe.png"
}
```

**Screenshots**
Login Page:
![Login page](login-page.png)

User with Compromised Accounts (user name: Adobe, password: pw):
![Compromised accounts user](dashboard-compromised-account.png)

User with No Compromised Accounts (user name: Regular, password: pw):
![No compromised accounts user](dashboard-noncompromised-account.png)

**Future Goals & Enhancements**
- TDD & testing React hooks
