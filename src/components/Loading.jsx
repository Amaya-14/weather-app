import React from 'react'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className='w-[433px] h-[514px] rounded-sm bg-white p-4 mx-auto flex justify-center items-center'>
      <div className={styles.loader}>
        <div />
      </div>
    </div>
  )
}
