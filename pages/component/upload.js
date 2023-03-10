import React from 'react'
import { useRouter } from 'next/router'

const upload = () => {
    const router = useRouter();
  return (
    <div>
        <form method='POST' action='/api/upload' encType='multipart/form-data'>
            <input type='file' name='image'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default upload