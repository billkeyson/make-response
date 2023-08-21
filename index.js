exports.standard_response = (status, code, message, data)=>{
    if (typeof data === 'object' || Array.isArray(data) || data === null || data === undefined) {
        return JSON.stringify(
            {
                status : status,
                code : code, 
                message : message, 
                data : data === undefined ? null : data}) 
      }
      throw new Error('data is either null , an array or an object')
}

exports.status_response = (status, code , message, data)=>{
    if (typeof data === 'object' || Array.isArray(data) || data === null || data === undefined) {
        return JSON.stringify(
          {
            status : status,
            message : message,
            error_code : code,
            data : data
        }
        ) 
      }
      throw new Error('data is either null , an array or an object')
}
