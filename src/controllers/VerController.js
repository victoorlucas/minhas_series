import firebase from '../config/firebase'

exports.load = async (id) => {

        let response;
        
        let child = firebase.database().ref('atividades').child(id)
        await child.once('value', snap => {
            
            response = {status: true, atividade: snap.val()}
            
        })
        return response;

    }

// module.exports = {
//     load: async (id) => {

//         let response;
        
//         let child = await firebase.database().ref('atividades').child(id)
//         child.once('value', snap => {
            
//             response = {status: true, atividade: snap.val()}
//             return response;
//         })

//     }
// }