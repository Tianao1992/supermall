import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
     // 1 拼接header
     // 2 添加 loading
     // 3 添加token
     return config
    },err => {

    })

    instance.interceptors.response.use(res => {
       return res.data
    },err => {
       return err
    })
    return instance (config);
}



// export function request(config) {
//  return new Promise ((resolve,reject) => {
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     instance(config).then(res => {
//        resolve(res)
//     }).catch(err => {
//         reject(err)
//     })
//  })
// }
