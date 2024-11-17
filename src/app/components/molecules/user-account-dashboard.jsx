import React from 'react'
import Text from '../atoms/text'

function UserAccountDashboard(id) {
    return (
        <div className='flex justify-center'>
            <div className='border !border-gray-500 p-8 w-[600px] rounded-lg'>
                <Text className={`text-white`}>نام و نام کاربری</Text>
                <Text className={`mt-2`}>لورم ایپسوم</Text>

                <hr className='border border-gray-500 my-4' />

                <Text className={`text-white`}> آدرس ایمیل</Text>
                <Text className={`mt-2`}>لورم ایپسوم</Text>

                <hr className='border border-gray-500 my-4' />

                <Text className={`text-white`}> شماره تماس</Text>
                <Text className={`mt-2`}>لورم ایپسوم</Text>

                <hr className='border border-gray-500 my-4' />

                <Text className={`text-white`}> رمز عبور</Text>
                <Text className={`mt-2`}>لورم ایپسوم</Text>
            </div>
        </div>
    )
}

export default UserAccountDashboard
