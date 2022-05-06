
const user = {
    email: 'test@test.com',
    password: 'password'
}

module.exports.signup = async (app, request) => {
    const response = await request(app)
            .post('/api/auth/signup')
            .send(user)
            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(
                expect.objectContaining({
                    accessToken: expect.any(String)
                })
            )

    return response;
}

module.exports.signin = async (app, request) => {
    const response = await request(app)
            .post('/api/auth/signin')
            .send(user)
            
            expect(response.statusCode).toBe(200);
            
        return response;
}