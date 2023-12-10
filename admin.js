const {kafka} = require('./client')

async function init() {
    const admin = kafka.admin()
    console.log('Admin Connecting...')
    admin.connect()
    console.log('Admin connection success')

    admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions: 2,
            },
        ]
    })

    console.log('Topic connected success... rider-updates')

    console.log('Admin Disconnecting...')
    await admin.disconnect()
}

init()