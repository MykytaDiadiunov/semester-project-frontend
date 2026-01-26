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

export interface JobRequirementSkill {
  id: number
  skill_title: string
  created_at: Date
  updated_at: Date
}

export interface JobOfferGeneralStatistic {
  total: number
  with_salary_count: number
  avg_salary_from: number
  max_salary_possible: number
}

interface StatisticItem {
  count: number
}

export interface JobOfferTopSkillStatisticItem extends StatisticItem {
  skill_title: string,
}

export interface JobOfferWorkTypeStatisticItem extends StatisticItem {
  work_place_type: string,
}

export interface JobOfferExperienceLevelStatisticItem extends StatisticItem {
  experience_level: string,
}

export interface JobOfferTopCityStatisticItem extends StatisticItem {
  company_city: string,
}

export interface JobOfferStatistic {
  general: JobOfferGeneralStatistic
  top_skills: JobOfferTopSkillStatisticItem[]
  work_types: JobOfferWorkTypeStatisticItem[]
  experience_levels: JobOfferExperienceLevelStatisticItem[]
  top_cities: JobOfferTopCityStatisticItem[]
}
