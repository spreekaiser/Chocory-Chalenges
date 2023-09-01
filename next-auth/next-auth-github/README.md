# Next authentication using GitHub provider

```bash
$ npm install @next-auth/mongodb-adapter mongodb next-auth
```

#### Go to GitHub -> Settings -> Developer settings -> OAuth Apps and get the ClientId and ClientSecret

#### Set the authorization callback url in GitHub to: `http://localhost:3000/api/auth/`

- add `mongodb.js` in the `lib` folder

- Add adapter in [...nextauth]

Check the index.js file to see how to access the session 
