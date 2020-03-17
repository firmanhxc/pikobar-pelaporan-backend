module.exports = (server) =>{
    const handlers = require('./handlers')(server)
    //const inputValidations = require('./validations/input')
    //const outputValidations = require('./validations/output') 

    const CheckRoleView = require('./route_prerequesites').CheckRoleView(server)
    const CheckRoleCreate = require('./route_prerequesites').CheckRoleCreate(server)
    const CheckRoleUpdate = require('./route_prerequesites').CheckRoleUpdate(server)


    return [
        // Get list case
        {
            method: 'GET',
            path: '/cases',
            config: {
                auth: 'jwt',
                description: 'show list of all cases',
                tags: ['api', 'cases'],
                // validate: inputValidations,
                // response: outputValidations
                pre: [
                    CheckRoleView
                ]
            },
            handler: handlers.ListCase
        },
        // Create case
        {
            method: 'POST',
            path: '/cases',
            config: {
                auth: 'jwt',
                description: 'create new cases',
                tags: ['api', 'cases'],
                // validate: inputValidations,
                // response: outputValidations
                pre: [
                    CheckRoleCreate
                ]
            },
            handler: handlers.CreateCase
        },
        // Get detail case
        {
            method: 'GET',
            path: '/cases/{id}',
            config: {
                auth: 'jwt',
                description: 'show a specific cases details',
                tags: ['api', 'cases'],
                // validate: inputValidations,
                // response: outputValidations
                pre: [
                    CheckRoleView
                ]
            },
            handler: handlers.GetCaseDetail
        },
        // Get case's history
        {
            method: 'GET',
            path: '/cases/{id}/history',
            config: {
                auth: 'jwt',
                description: 'show a specific cases history',
                tags: ['api', 'cases'],
                // validate: inputValidations,
                // response: outputValidations
                pre: [
                    CheckRoleView
                ]
            },
            handler: handlers.GetCaseHistory
        },
        // Update case
        {
            method: 'PUT',
            path: '/cases/{id}',
            config: {
                auth: 'jwt',
                description: 'show a specific cases details',
                tags: ['api', 'cases'],
                // validate: inputValidations,
                // response: outputValidations
                pre: [
                    CheckRoleUpdate
                ]
            },
            handler: handlers.UpdateCase
        },
        // Delete case sepertinya jangan dulu jadi saya komen ya (sandi)
        // {
        //     method: 'DELETE',
        //     path: '/cases/{id}',
        //     config: {
        //         description: 'show a specific cases details',
        //         tags: ['api', 'cases'],
        //         // validate: inputValidations,
        //         // response: outputValidations
        //     },
        //     handler: handlers.DeleteCase
        // }
    ]

}