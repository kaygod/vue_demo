/**
 * 
 * 模拟ajax请求
 */
export const ajax = (data)=>{

    return new Promise((resolve)=>{

        let timer = setTimeout(()=>{
            clearTimeout(timer);
            resolve(data);
        },250)

    })

}