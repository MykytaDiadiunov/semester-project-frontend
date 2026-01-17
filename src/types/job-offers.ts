import { SalaryBy, WorkingTimeType, WorkPlaceType } from '@/enums'

export interface JobOffer {
  id: number
  created_at: Date
  updated_at: Date
  url_id: string
  title: string
  experience_level: string
  salary_by: SalaryBy
  salary_value_from: Partial<number>
  salary_value_to: Partial<number>
  company_city: string
  location: string
  working_time_type: WorkingTimeType
  work_place_type: WorkPlaceType
  offer_category: string
}
