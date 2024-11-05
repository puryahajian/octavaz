
import React from 'react'

import AboutProduct from '../molecules/about-product';
import DescriptionProduct from '../molecules/description-product';
import CourseInformationProduct from './course-information-product';
import AbouteTacherProductPage from '../molecules/about-teacher-product-page';
import ResponsiveFloatingProductPage from '../molecules/responsive-floating-product-page';
import CourseContacts from '../molecules/course-contacts';
import CourseRequirements from '../molecules/course-requirements';
import CoursePrerequisite from '../molecules/course-prerequisite';
import TrainingModel from '../molecules/training-model';
import CourseAchievement from '../molecules/course-achievement';

function DetailProduct() {
  return (
    <div className=' text-white w-10/12 max-[770px]:w-full max-[770px]:mx-4'>
      <AboutProduct/>
      {/* floating product */}
      <ResponsiveFloatingProductPage/>
      {/* floating product */}
      <DescriptionProduct/>
      <CourseContacts/>
      <CourseRequirements/>
      <CoursePrerequisite/>
      <TrainingModel/>
      <CourseAchievement/>
      <CourseInformationProduct/>
      <AbouteTacherProductPage/>
    </div>
  )
}

export default DetailProduct
