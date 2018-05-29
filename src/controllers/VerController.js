import firebase from '../config/firebase'

module.exports = {
    load: async (id) => {

        let response = { status: false };
        
        let child = firebase.database().ref('atividades').child(id)
        await child.once('value', snap => {
            response = {
                status: true,
                atividade: snap.val()
            }
        })

        return response;
    }

}