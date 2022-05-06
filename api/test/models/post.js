module.exports.create = async (app, request) => {
    const response = await request(app)
            .post('/api/posts')
            .send({
                title: 'test',
                content: 'test'
            })

    return response
}