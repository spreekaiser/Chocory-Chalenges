// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
	password: 'FaaQnhbhD0+EG/wZJ4Jgs1jG4eCD9H5mbeZLcOBjqwk=',
	cookieName: "iron-session",
	cookieOptions: {
	  secure: false,
	},
  };