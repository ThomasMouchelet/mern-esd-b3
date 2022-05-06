module.exports.create = async (app, request, accessToken = "") => {
    console.log("accessToken: ", accessToken);
    const response = await request(app)
            .post('/api/posts')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                title: 'test',
                content: 'test'
            })
    console.log("response: ", response.body);
    return response
}