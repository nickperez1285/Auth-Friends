

export const fakeAuth = { 
	isAuthenticated: false, 
	authenticate(cb) {
		isAuthenticated = true
		setTimeout(cb, 100)
	}, 
	signout(cb){
		isAuthenticated = false 
	}

}